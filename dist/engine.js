export const DAY=86400000;
export const intervals=[1,3,7,14,30,60,120];
export function dayKey(now=Date.now()){const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function fresh(){return {version:1,cards:{},days:{},settings:{limit:12,newLimit:4,mode:'recall',topic:'all'},notes:{},session:null};}
export function grade(old={},rating,now=Date.now(),assisted=false){
 if(!['again','hard','good','easy'].includes(rating))throw Error('Invalid rating');
 if(assisted && ['good','easy'].includes(rating))rating='hard';
 let stage=Number.isInteger(old.stage)?old.stage:-1;
 if(rating==='again')stage=0;
 else if(rating==='hard')stage=Math.max(0,stage);
 else stage=Math.min(intervals.length-1,stage+(rating==='easy'?2:1));
 const days=rating==='again'||rating==='hard'?1:intervals[stage];
 return {stage,due:now+days*DAY,interval:days,reviews:(old.reviews||0)+1,lapses:(old.lapses||0)+(rating==='again'?1:0),last:now,rating};
}
export function selectQueue(cards,state,now=Date.now(),{topic=state.settings.topic,limit=state.settings.limit,newLimit=state.settings.newLimit,practice=false}={}){
 const selected=cards.filter(c=>topic==='all'||c.topic===topic);
 if(practice){return selected.slice().sort((a,b)=>(state.cards[a.id]?.last||0)-(state.cards[b.id]?.last||0)).slice(0,limit).map(c=>c.id);}
 const due=selected.filter(c=>state.cards[c.id]&&state.cards[c.id].due<=now).sort((a,b)=>state.cards[a.id].due-state.cards[b.id].due);
 const introduced=state.days[dayKey(now)]?.new||0;
 const unseen=selected.filter(c=>!state.cards[c.id]).slice(0,Math.max(0,newLimit-introduced));
 // Interleave due subjects, preserving priority within each subject.
 const buckets=new Map();for(const c of due){if(!buckets.has(c.topic))buckets.set(c.topic,[]);buckets.get(c.topic).push(c);}
 const mixed=[];while([...buckets.values()].some(x=>x.length))for(const b of buckets.values())if(b.length)mixed.push(b.shift());
 return [...mixed,...unseen].slice(0,limit).map(c=>c.id);
}
export function addRetry(queue,id,index,retries){
 if((retries[id]||0)>=2)return queue;
 const next=queue.slice();next.splice(Math.min(next.length,index+4),0,id);return next;
}
export function validateBackup(raw,ids){
 if(!raw||raw.app!=='finance-remember'||raw.version!==1||!raw.state)throw Error('This is not a Remember Finance backup.');
 const s=raw.state;if(!s.cards||typeof s.cards!=='object'||Array.isArray(s.cards))throw Error('Invalid card records.');
 const out=fresh();let imported=0;
 for(const [id,r] of Object.entries(s.cards)){
  if(!ids.has(id))continue;
  if(!r||!Number.isInteger(r.stage)||r.stage<0||r.stage>=intervals.length||!Number.isFinite(r.due)||r.due<0||!Number.isInteger(r.reviews)||r.reviews<0||!Number.isInteger(r.lapses)||r.lapses<0||!Number.isFinite(r.last)||!intervals.includes(r.interval)||!['again','hard','good','easy'].includes(r.rating))throw Error('Invalid review record: '+id);
  out.cards[id]={...r};imported++;
 }
 if(s.days&&typeof s.days==='object')for(const [d,v] of Object.entries(s.days))if(/^\d{4}-\d{2}-\d{2}$/.test(d)&&v&&['reviews','new','correct'].every(k=>Number.isInteger(v[k])&&v[k]>=0))out.days[d]={reviews:v.reviews,new:v.new,correct:v.correct};
 if(s.notes&&typeof s.notes==='object')for(const [id,n] of Object.entries(s.notes))if(ids.has(id)&&typeof n==='string'&&n.length<=10000)out.notes[id]=n;
 if(s.settings){const x=s.settings;if([6,12,20].includes(x.limit))out.settings.limit=x.limit;if([0,2,4,8].includes(x.newLimit))out.settings.newLimit=x.newLimit;if(['recall','choice'].includes(x.mode))out.settings.mode=x.mode;}
 return {state:out,imported};
}
export function seeded(seed){let x=seed>>>0;return ()=>{x=(1664525*x+1013904223)>>>0;return x/4294967296;};}
export function shuffle(a,rng=Math.random){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
export function curriculum(concepts,calculations){
 const all=[...concepts,...calculations],map=new Map(all.map(c=>[c.id,c]));
 const anchors=['bonds-face','bonds-time','bonds-market','calc-bond-coupon','bonds-price','bonds-ytminverse','bonds-current','calc-bond-price','purpose-claims','risk-expected','risk-correlation','calc-expected','risk-systematic','bonds-real','calc-real-return','behavior-news','crises-leverage','calc-leverage','equity-residual','equity-gordon','calc-gordon'];
 const out=[];for(const id of anchors)if(map.has(id)){out.push(map.get(id));map.delete(id);}
 const topics=[...new Set(concepts.map(c=>c.topic))],buckets=topics.map(t=>{const cs=concepts.filter(c=>c.topic===t&&map.has(c.id)),ns=calculations.filter(c=>c.topic===t&&map.has(c.id));let b=[];for(let i=0;i<cs.length;i++){b.push(cs[i]);if(i%3===2&&ns.length)b.push(ns.shift());}return [...b,...ns];});
 while(buckets.some(b=>b.length))for(const b of buckets)if(b.length)out.push(b.shift());
 return out;
}
