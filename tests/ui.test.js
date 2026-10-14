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
test('recall session can reveal, fail, retry, persist and resume',async()=>{const u=await setup();u.go('#cards');assert.ok(u.text().includes('Make finance'));u.click('#start');assert.ok(u.text().includes('What is its annual coupon payment'));assert.ok(u.doc.querySelector('.formula-reference'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('F = face value'));u.click('#reveal');assert.ok(u.text().includes('face value (F)'));u.click('[data-rating=again]');let state=JSON.parse(u.storage.get('finance-remember-v1'));assert.equal(state.session.queue.length,5);assert.equal(state.session.index,1);assert.equal(state.cards['bonds-face'].interval,1);u.go('#cards');assert.ok(u.text().includes('Resume session'));u.click('#start');assert.ok(u.text().includes('why does the payment-period index change'));u.click('#reveal');u.click('[data-rating=good]');u.click('#reveal');u.click('[data-rating=good]');assert.ok(u.doc.querySelector('#check'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('coupon payment per period'));assert.equal(u.doc.querySelector('.answer'),null);u.doc.querySelector('#attempt').value='9999';u.doc.querySelector('#attempt').dispatchEvent(new u.window.Event('input'));u.click('#check');assert.ok(u.doc.querySelector('[data-rating=good]').disabled);u.click('[data-rating=again]');assert.ok(u.text().includes('Explain face value'));u.click('#reveal');u.click('[data-rating=good]');state=JSON.parse(u.storage.get('finance-remember-v1'));assert.equal(state.cards['bonds-face'].interval,1);assert.equal(state.cards['bonds-face'].rating,'hard');});
test('helper caps grading and wrong multiple choice forces relearning',async()=>{const u=await setup();u.go('#cards');u.click('#start');u.click('#choices');assert.equal(u.doc.querySelectorAll('[data-choice]').length,3);const correct=[...u.doc.querySelectorAll('[data-choice]')].find(b=>b.textContent.includes('face value (F)'));correct.click();assert.ok(u.doc.querySelector('[data-rating=good]').disabled);u.click('[data-rating=hard]');u.click('#choices');const wrong=[...u.doc.querySelectorAll('[data-choice]')].find(b=>!b.textContent.includes('payment-period index (t) runs through'));wrong.click();assert.ok(u.doc.querySelector('[data-rating=hard]').disabled);u.click('[data-rating=again]');assert.equal(JSON.parse(u.storage.get('finance-remember-v1')).cards['bonds-time'].rating,'again');});
test('library search, topic detail, settings and progress render',async()=>{const u=await setup();u.go('#cards');u.go('#library');const input=u.doc.querySelector('#search');input.value='coupon';input.dispatchEvent(new u.window.Event('input'));assert.ok(u.doc.querySelector('#matches').textContent.includes('Coupon'));u.go('#topic/housing');assert.ok(u.text().includes('Mortgage amortization'));u.click('#topicpractice');assert.ok(u.text().includes('Extra practice'));u.go('#progress');assert.ok(u.text().includes('Your lesson progress'));u.go('#settings');assert.ok(u.doc.querySelector('#export'));assert.ok(u.doc.querySelector('#import'));assert.ok(u.text().includes('no account sync'));});
test('saved session survives app reload without resetting index',async()=>{const storage=new Map();let u=await setup(storage);u.go('#cards');u.click('#start');u.click('#reveal');u.click('[data-rating=good]');u=await setup(storage);u.go('#cards');assert.ok(u.text().includes('Resume session'));u.click('#start');assert.ok(u.text().includes('why does the payment-period index change'));assert.equal(JSON.parse(storage.get('finance-remember-v1')).session.index,1);});
test('corrupt stored data remains protected instead of being overwritten',async()=>{const storage=new Map([['finance-remember-v1','{broken']]);const u=await setup(storage);u.go('#cards');assert.ok(u.text().includes('could not be read'));u.click('#start');assert.equal(storage.get('finance-remember-v1'),'{broken');});

test('standalone HTML runs daily recall and saves progress with no network',async()=>{const u=await setup(new Map(),true);u.go('#cards');assert.ok(u.text().includes('Make finance'));u.click('#start');assert.ok(u.text().includes('What is its annual coupon payment'));assert.ok(u.doc.querySelector('.formula-reference'));assert.ok(u.doc.querySelector('.formula-reference').textContent.includes('F = face value'));u.click('#reveal');u.click('[data-rating=good]');assert.equal(JSON.parse(u.storage.get('finance-remember-v1')).cards['bonds-face'].interval,1);u.go('#library');assert.ok(u.text().includes('Coupon and final payment'));});


test('home leads to a compact lesson with one application and terms on demand',async()=>{
 const u=await setup();assert.ok(u.text().includes('Finance,'));assert.equal(u.doc.querySelectorAll('[data-guide-start]').length,1);u.click('[data-guide-start=promise]');
 assert.ok(u.doc.querySelector('.guided-context'));assert.equal(u.doc.querySelectorAll('.guided-application').length,1);assert.equal(u.doc.querySelector('#trial-next'),null);
 const help=u.doc.querySelector('.number-work .term-help');assert.ok(help);assert.equal(help.hasAttribute('open'),false);assert.ok(help.textContent.toLowerCase().includes('face value'));
 assert.ok(u.text().includes('$1,000 × 0.05'));u.click('[data-guide-choice="0"]');assert.ok(u.text().includes('does not rewrite'));u.click('[data-guide-finish=close]');assert.ok(u.text().includes('Lesson complete'));assert.equal(u.doc.querySelector('.guided-application'),null);
 const p=JSON.parse(u.storage.get('finance-guided-lessons-v1'));assert.equal(p.lessons.promise.interval,1);assert.equal(p.lessons.promise.inProgress,false);assert.ok(!u.storage.has('finance-remember-v1'));
});
test('guided resume and spaced review preserve the existing card records',async()=>{
 const u=await setup();u.go('#cards');u.click('#start');u.click('#reveal');u.click('[data-rating=good]');const legacy=u.storage.get('finance-remember-v1');
 u.go('#today');u.click('[data-guide-start=promise]');u.click('#guide-walkthrough');u.go('#today');assert.ok(u.text().includes('Continue lesson'));u.click('[data-guide-start=promise]');assert.ok(u.doc.querySelector('[data-guide-finish=clear]'));
 u.click('[data-guide-finish=clear]');assert.equal(u.storage.get('finance-remember-v1'),legacy);const p=JSON.parse(u.storage.get('finance-guided-lessons-v1'));p.lessons.promise.due=Date.now()-1000;u.storage.set('finance-guided-lessons-v1',JSON.stringify(p));
 const v=await setup(u.storage);v.click('[data-guide-start=promise]');assert.ok(v.doc.querySelector('.guided-refresher'));assert.equal(v.doc.querySelector('.guided-refresher').hasAttribute('open'),false);assert.ok(v.doc.querySelector('.guided-context'));
});
test('slider shows the calculation for every changed bond price',async()=>{
 const u=await setup();u.go('#trial/price');const slider=u.doc.querySelector('#guided-yield');assert.ok(slider);slider.value='4';slider.dispatchEvent(new u.window.Event('input'));assert.equal(u.doc.querySelector('#guided-bond-price').textContent,'$1,027.75');assert.ok(u.doc.querySelector('#guided-price-working').textContent.includes('(1 + 0.04)^3'));assert.ok(u.doc.querySelector('#guided-price-working').textContent.includes('4% ÷ 100'));
 u.go('#trial/yield');assert.ok(u.text().includes('$1,050 ÷ (1 + 0.06)'));assert.ok(u.text().includes('$990.57'));
});
test('every course lesson works in standalone mode and has a single main question',async()=>{
 const {guidedLessons}=await import('../dist/lesson-content.js');const u=await setup(new Map(),true);
 for(const l of guidedLessons){u.go('#lesson/'+l.id);assert.ok(u.doc.querySelector('.guided-context'),l.id);assert.equal(u.doc.querySelectorAll('.guided-application').length,1,l.id);assert.ok(u.text().includes(l.title));u.click('#guide-walkthrough');u.click('[data-guide-finish=clear]');assert.ok(u.text().includes('Lesson complete'),l.id);}
 const p=JSON.parse(u.storage.get('finance-guided-lessons-v1'));assert.equal(Object.keys(p.lessons).length,guidedLessons.length);assert.ok(Object.values(p.lessons).every(r=>r.completedAt));assert.ok(!u.storage.has('finance-remember-v1'));
});
test('optional calculation shows input origins and worked steps after checking',async()=>{
 const u=await setup();u.go('#lesson/mortgage');assert.ok(u.doc.querySelector('.example-inputs'));assert.ok(u.text().includes('30 × 12 = 360'));u.click('#guide-walkthrough');const variation=u.doc.querySelector('.guided-variation');assert.ok(variation);variation.open=true;u.doc.querySelector('#guided-number').value='999999';u.doc.querySelector('#guided-number').dispatchEvent(new u.window.Event('input'));u.click('#guided-check-number');assert.ok(u.doc.querySelector('.guided-variation').open);assert.ok(u.doc.querySelector('.guided-variation .calculation-steps'));assert.ok(u.text().includes('Compare your result'));
});
test('import validates lesson data and preserves lessons when reading an older backup',async()=>{
 const u=await setup();u.go('#lesson/promise');u.click('#guide-walkthrough');u.click('[data-guide-finish=clear]');const saved=u.storage.get('finance-guided-lessons-v1');u.go('#settings');
 const file=u.doc.querySelector('#importfile');Object.defineProperty(file,'files',{configurable:true,value:[{size:100,text:async()=>JSON.stringify({app:'finance-remember',version:1,state:{cards:{},days:{},notes:{}}})}]});await file.onchange({target:file});assert.ok(u.text().includes('no lesson data'));u.click('#confirmimport');assert.equal(u.storage.get('finance-guided-lessons-v1'),saved);
});

test('backup export includes guided records and invalid guided imports change neither store',async()=>{
 const u=await setup();u.go('#lesson/promise');u.click('#guide-walkthrough');u.click('[data-guide-finish=clear]');const guided=u.storage.get('finance-guided-lessons-v1');u.go('#settings');
 let blob;const originalCreate=URL.createObjectURL;URL.createObjectURL=x=>{blob=x;return 'blob:test-finance';};u.click('#export');URL.createObjectURL=originalCreate;
 const exported=JSON.parse(await blob.text());assert.deepEqual(exported.guided,JSON.parse(guided));assert.ok(exported.state.cards);
 const bad=structuredClone(exported);bad.guided.lessons.promise.choice=999;const input=u.doc.querySelector('#importfile');Object.defineProperty(input,'files',{value:[{size:100,text:async()=>JSON.stringify(bad)}],configurable:true});const cardsBefore=u.storage.get('finance-remember-v1');await input.onchange({target:input});assert.equal(u.doc.querySelector('#confirmimport'),null);assert.equal(u.storage.get('finance-guided-lessons-v1'),guided);assert.equal(u.storage.get('finance-remember-v1'),cardsBefore);
});
test('lesson completion does not claim a successful save when storage fails',async()=>{
 const u=await setup();u.go('#lesson/promise');u.click('#guide-walkthrough');globalThis.localStorage.setItem=()=>{throw Error('quota');};u.click('[data-guide-finish=clear]');assert.ok(u.text().includes('has not saved'));assert.ok(!u.text().includes('PROGRESS SAVED'));
});

test('chapter history is optional, sourced and leaves progress untouched',async()=>{
 const {chapterConnections}=await import('../dist/connections.js');const u=await setup(new Map(),true);
 for(const [topic,c] of Object.entries(chapterConnections)){
  u.go('#chapter/'+topic);const panel=u.doc.querySelector('.chapter-connections');assert.ok(panel,topic);assert.equal(panel.hasAttribute('open'),false);assert.ok(panel.textContent.includes(c.historyTitle));
  assert.equal(panel.querySelectorAll('.connection-sources a').length,c.sources.length);assert.ok(panel.querySelector('a[href="#lesson/'+c.lessonId+'"]'));assert.equal(panel.querySelector('.term-help').hasAttribute('open'),false);
  panel.open=true;assert.equal(u.doc.querySelector('.guided-application'),null);assert.ok(!u.storage.has('finance-guided-lessons-v1'));
 }
 u.go('#lesson/digital-claims');assert.ok(u.doc.querySelector('.chapter-connections'));assert.equal(u.doc.querySelectorAll('.guided-application').length,1);const before=u.storage.get('finance-guided-lessons-v1');u.doc.querySelector('.chapter-connections').open=true;assert.equal(u.storage.get('finance-guided-lessons-v1'),before);
 u.go('#lesson/promise');assert.equal(u.doc.querySelector('.chapter-connections'),null);
});
test('reference finds history and extra concepts and respects chapter filtering',async()=>{
 const u=await setup();u.go('#library');const input=u.doc.querySelector('#search');input.value='TerraUSD';input.dispatchEvent(new u.window.Event('input'));assert.equal(u.doc.querySelectorAll('.chapter-connections').length,1);assert.ok(u.doc.querySelector('#matches').textContent.includes('conversion mechanism'));
 const filter=u.doc.querySelector('#librarytopic');filter.querySelector('option[value="all"]').removeAttribute('selected');filter.querySelector('option[value="bonds"]').setAttribute('selected','');filter.dispatchEvent(new u.window.Event('change'));assert.equal(u.doc.querySelectorAll('.chapter-connections').length,0);
 input.value='breakeven';input.dispatchEvent(new u.window.Event('input'));assert.equal(u.doc.querySelectorAll('.chapter-connections').length,1);assert.ok(u.doc.querySelector('.chapter-connections .formula').textContent.includes('nominal Treasury yield'));assert.ok(u.doc.querySelector('.chapter-connections .term-help').textContent.includes('Real yield ='));
 u.go('#topic/bonds');assert.ok(u.doc.querySelector('.chapter-connections'));
});
