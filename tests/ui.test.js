import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
const content=JSON.parse(fs.readFileSync(new URL('../dist/content.json',import.meta.url)));
const tick=()=>new Promise(r=>setTimeout(r,0));
async function setup(storage=new Map(),standalone=false){
 const html=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
 const {window}=parseHTML(html);globalThis.window=window;globalThis.document=window.document;globalThis.navigator={};
 globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 let hash='#today';globalThis.location={get hash(){return hash;},set hash(v){hash=v.startsWith('#')?v:'#'+v;window.dispatchEvent(new window.Event('hashchange'));}};
 window.scrollTo=()=>{};globalThis.fetch=async()=>({ok:true,json:async()=>content});
 if(standalone){const file=fs.readFileSync(new URL('../standalone/finance-remember.html',import.meta.url),'utf8');const code=file.match(/<script type="module">([\s\S]*?)<\/script>/)[1];globalThis.fetch=async()=>{throw Error('Network deliberately unavailable');};await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64')+'#'+Math.random());}else await import('../dist/app.js?test='+Math.random());
 return {window,storage,doc:window.document,click:sel=>{const e=window.document.querySelector(sel);assert.ok(e,'Missing '+sel);e.click();},go:hash=>{globalThis.location.hash=hash;},text:()=>window.document.querySelector('#app').textContent};
}
test('recall session can reveal, fail, retry, persist and resume',async()=>{const u=await setup();assert.ok(u.text().includes('Make finance'));u.click('#start');assert.ok(u.text().includes('What is its annual coupon payment'));assert.ok(u.doc.querySelector('.formula-reference'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('F = face value'));u.click('#reveal');assert.ok(u.text().includes('face value (F)'));u.click('[data-rating=again]');let state=JSON.parse(u.storage.get('finance-remember-v1'));assert.equal(state.session.queue.length,5);assert.equal(state.session.index,1);assert.equal(state.cards['bonds-face'].interval,1);u.go('#today');assert.ok(u.text().includes('Resume session'));u.click('#start');assert.ok(u.text().includes('why does the payment-period index change'));u.click('#reveal');u.click('[data-rating=good]');u.click('#reveal');u.click('[data-rating=good]');assert.ok(u.doc.querySelector('#check'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('coupon payment per period'));assert.equal(u.doc.querySelector('.answer'),null);u.doc.querySelector('#attempt').value='9999';u.doc.querySelector('#attempt').dispatchEvent(new u.window.Event('input'));u.click('#check');assert.ok(u.doc.querySelector('[data-rating=good]').disabled);u.click('[data-rating=again]');assert.ok(u.text().includes('Explain face value'));u.click('#reveal');u.click('[data-rating=good]');state=JSON.parse(u.storage.get('finance-remember-v1'));assert.equal(state.cards['bonds-face'].interval,1);assert.equal(state.cards['bonds-face'].rating,'hard');});
test('helper caps grading and wrong multiple choice forces relearning',async()=>{const u=await setup();u.click('#start');u.click('#choices');assert.equal(u.doc.querySelectorAll('[data-choice]').length,3);const correct=[...u.doc.querySelectorAll('[data-choice]')].find(b=>b.textContent.includes('face value (F)'));correct.click();assert.ok(u.doc.querySelector('[data-rating=good]').disabled);u.click('[data-rating=hard]');u.click('#choices');const wrong=[...u.doc.querySelectorAll('[data-choice]')].find(b=>!b.textContent.includes('payment-period index (t) runs through'));wrong.click();assert.ok(u.doc.querySelector('[data-rating=hard]').disabled);u.click('[data-rating=again]');assert.equal(JSON.parse(u.storage.get('finance-remember-v1')).cards['bonds-time'].rating,'again');});
test('library search, topic detail, settings and progress render',async()=>{const u=await setup();u.go('#library');const input=u.doc.querySelector('#search');input.value='coupon';input.dispatchEvent(new u.window.Event('input'));assert.ok(u.doc.querySelector('#matches').textContent.includes('Coupon'));u.go('#topic/housing');assert.ok(u.text().includes('Mortgage amortization'));u.click('#topicpractice');assert.ok(u.text().includes('Extra practice'));u.go('#progress');assert.ok(u.text().includes('Topic coverage'));u.go('#settings');assert.ok(u.doc.querySelector('#export'));assert.ok(u.doc.querySelector('#import'));assert.ok(u.text().includes('no account sync'));});
test('saved session survives app reload without resetting index',async()=>{const storage=new Map();let u=await setup(storage);u.click('#start');u.click('#reveal');u.click('[data-rating=good]');u=await setup(storage);assert.ok(u.text().includes('Resume session'));u.click('#start');assert.ok(u.text().includes('why does the payment-period index change'));assert.equal(JSON.parse(storage.get('finance-remember-v1')).session.index,1);});
test('corrupt stored data remains protected instead of being overwritten',async()=>{const storage=new Map([['finance-remember-v1','{broken']]);const u=await setup(storage);assert.ok(u.text().includes('could not be read'));u.click('#start');assert.equal(storage.get('finance-remember-v1'),'{broken');});

test('standalone HTML runs daily recall and saves progress with no network',async()=>{const u=await setup(new Map(),true);assert.ok(u.text().includes('Make finance'));u.click('#start');assert.ok(u.text().includes('What is its annual coupon payment'));assert.ok(u.doc.querySelector('.formula-reference'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('F = face value'));u.click('#reveal');u.click('[data-rating=good]');assert.equal(JSON.parse(u.storage.get('finance-remember-v1')).cards['bonds-face'].interval,1);u.go('#library');assert.ok(u.text().includes('Coupon and final payment'));});


test('guided lessons give context first and save progress separately from card reviews',async()=>{
 const u=await setup();u.click('#start');u.click('#reveal');u.click('[data-rating=good]');const reviews=u.storage.get('finance-remember-v1');
 u.go('#trials');assert.equal(u.doc.querySelectorAll('[data-trial-open]').length,3);u.click('[data-trial-open=promise]');
 assert.ok(u.text().includes('Maya lends a workshop'));assert.ok(u.doc.querySelector('.trial-context'));assert.equal(u.doc.querySelector('[data-trial-choice]'),null);
 u.click('#trial-next');assert.ok(u.doc.querySelector('.trial-timeline'));u.click('#trial-next');assert.ok(u.doc.querySelector('#trial-next').disabled);
 u.click('[data-trial-choice="0"]');assert.ok(u.text().includes('The final payment combines'));assert.equal(u.doc.querySelector('#trial-next').disabled,false);
 u.go('#trials');u.click('[data-trial-open=promise]');assert.ok(u.text().includes('How much arrives'));u.click('#trial-next');u.click('#trial-explain');u.click('#trial-next');
 assert.ok(u.text().includes('How did this feel'));u.click('[data-trial-reflection=lighter]');
 const record=JSON.parse(u.storage.get('finance-bond-trials-v1'));assert.ok(record.lessons.promise.finished);assert.equal(record.lessons.promise.reflection,'lighter');assert.equal(u.storage.get('finance-remember-v1'),reviews);
 const v=await setup(u.storage);v.go('#trials');assert.ok(v.text().includes('EXPLORED'));
});
test('bond explorer prices fixed cash flows and remaining-payment lesson provides its formula',async()=>{
 const u=await setup();u.go('#trial/price');for(let i=0;i<3;i++){u.doc.querySelector('#trial-explain')?.click();u.click('#trial-next');}
 const slider=u.doc.querySelector('#trial-yield');assert.ok(slider);slider.value='6';slider.dispatchEvent(new u.window.Event('input'));assert.equal(u.doc.querySelector('#trial-price').textContent,'$973.27');assert.ok(u.text().includes('annual coupon is still $50'));
 slider.value='4';slider.dispatchEvent(new u.window.Event('input'));assert.equal(u.doc.querySelector('#trial-price').textContent,'$1,027.75');
 u.go('#trial/yield');assert.ok(u.text().includes('Two years have passed'));assert.ok(u.doc.querySelector('.trial-context').textContent.includes('One $1,050 payment'));u.click('#trial-next');assert.ok(u.text().includes('Price today = final payment'));u.click('#trial-next');u.click('[data-trial-choice="0"]');assert.ok(u.text().includes('$1,050 ÷ 1.10'));
});
test('all three guided lessons can be explored with explanations and revisited',async()=>{
 const u=await setup(new Map(),true);
 for(const id of ['promise','price','yield']){u.go('#trial/'+id);for(let i=0;i<6&&u.doc.querySelector('#trial-next');i++){u.doc.querySelector('#trial-explain')?.click();u.click('#trial-next');}assert.ok(u.text().includes('How did this feel'));}
 const record=JSON.parse(u.storage.get('finance-bond-trials-v1'));assert.ok(Object.values(record.lessons).every(l=>l.finished));u.click('#trial-revisit');assert.ok(u.text().includes('Two years have passed'));
 assert.ok(!u.storage.has('finance-remember-v1'));
});
