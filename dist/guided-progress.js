import {guidedLessons} from './lesson-content.js';
export const GUIDED_KEY='finance-guided-lessons-v1';
const GUIDED_DAY=86400000;
export function freshGuided(){return {version:1,lessons:{},activeLesson:null};}
export function validateGuided(value){
 if(!value||value.version!==1||!value.lessons||typeof value.lessons!=='object'||Array.isArray(value.lessons))throw Error('Invalid lesson backup.');
 const out=freshGuided();
 for(const lesson of guidedLessons){const r=value.lessons[lesson.id];if(!r)continue;
  if(typeof r!=='object'||!Number.isInteger(r.visits)||r.visits<0||!Number.isFinite(r.completedAt)||r.completedAt<0||!Number.isFinite(r.due)||r.due<0||!Number.isInteger(r.interval)||r.interval<0||r.interval>60||typeof r.inProgress!=='boolean'||typeof r.revealed!=='boolean'||(r.choice!==null&&(!Number.isInteger(r.choice)||r.choice<0||r.choice>=lesson.options.length)))throw Error('Invalid lesson record: '+lesson.id);
  out.lessons[lesson.id]={visits:r.visits,completedAt:r.completedAt,due:r.due,interval:r.interval,inProgress:r.inProgress,revealed:r.revealed,choice:r.choice,review:!!r.review};
 }
 if(typeof value.activeLesson==='string'&&out.lessons[value.activeLesson]?.inProgress)out.activeLesson=value.activeLesson;
 return out;
}
export function readGuided(now=Date.now()){
 try{const raw=localStorage.getItem(GUIDED_KEY);if(raw)return {progress:validateGuided(JSON.parse(raw)),blocked:false,warning:''};
  const p=freshGuided(),old=localStorage.getItem('finance-bond-trials-v1');
  if(old){try{const trial=JSON.parse(old);for(const id of ['promise','price','yield']){const r=trial.version===1?trial.lessons?.[id]:null;if(!r)continue;
   if(Number.isFinite(r.finished)&&r.finished>0)p.lessons[id]={visits:1,completedAt:r.finished,due:r.finished+3*GUIDED_DAY,interval:3,inProgress:false,revealed:false,choice:null,review:false};
   else if(Number.isInteger(r.step)&&r.step>0){p.lessons[id]={visits:0,completedAt:0,due:0,interval:0,inProgress:true,revealed:false,choice:null,review:false};p.activeLesson=id;}
  }}catch{/* A damaged old trial file stays untouched; card progress is separate. */}}
  return {progress:p,blocked:false,warning:''};
 }catch{return {progress:freshGuided(),blocked:true,warning:'Lesson progress could not be read. The original stored data is protected; you can still read the lessons.'};}
}
export function writeGuided(progress,blocked=false){if(blocked)return false;try{localStorage.setItem(GUIDED_KEY,JSON.stringify(progress));return true;}catch{return false;}}
export function startGuided(progress,id,now=Date.now()){
 if(!guidedLessons.some(l=>l.id===id))throw Error('Unknown lesson.');
 const existing=progress.lessons[id];
 if(!existing?.inProgress)progress.lessons[id]={visits:existing?.visits||0,completedAt:existing?.completedAt||0,due:existing?.due||0,interval:existing?.interval||0,inProgress:true,revealed:false,choice:null,review:!!existing?.completedAt};
 progress.activeLesson=id;return progress.lessons[id];
}
export function finishGuided(progress,id,confidence,now=Date.now()){
 if(!['clear','close'].includes(confidence))throw Error('Invalid confidence.');
 const r=progress.lessons[id];if(!r?.inProgress)throw Error('Lesson is not active.');
 const days=confidence==='close'?1:r.interval?Math.min(60,Math.max(3,r.interval*2)):3;
 Object.assign(r,{visits:r.visits+1,completedAt:now,due:now+days*GUIDED_DAY,interval:days,inProgress:false,revealed:false,choice:null,review:false});
 if(progress.activeLesson===id)progress.activeLesson=null;return r;
}
export function nextGuided(progress,now=Date.now()){
 if(progress.activeLesson&&progress.lessons[progress.activeLesson]?.inProgress)return {id:progress.activeLesson,kind:'continue'};
 const due=guidedLessons.filter(l=>progress.lessons[l.id]?.completedAt&&progress.lessons[l.id].due<=now).sort((a,b)=>progress.lessons[a.id].due-progress.lessons[b.id].due);
 if(due.length)return {id:due[0].id,kind:'review'};
 const next=guidedLessons.find(l=>!progress.lessons[l.id]?.completedAt);return next?{id:next.id,kind:'learn'}:null;
}
