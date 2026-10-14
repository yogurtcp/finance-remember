import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {guidedLessons,bondLessonExample} from '../dist/lesson-content.js';
import {generate,calculationCards} from '../dist/calculations.js';
import {freshGuided,startGuided,finishGuided,nextGuided,validateGuided,readGuided,GUIDED_KEY} from '../dist/guided-progress.js';
import {chapterConnections} from '../dist/connections.js';
const content=JSON.parse(fs.readFileSync(new URL('../dist/content.json',import.meta.url)));
const now=Date.UTC(2026,9,14,12),day=86400000;
test('every chapter has a sourced enrichment with valid lesson and chapter connections',()=>{
 assert.deepEqual(new Set(Object.keys(chapterConnections)),new Set(content.topics.map(t=>t.id)));
 for(const [topic,c] of Object.entries(chapterConnections)){
  assert.ok(guidedLessons.some(l=>l.id===c.lessonId&&l.topic===topic),topic);
  assert.ok(content.topics.some(t=>t.id===c.relatedTopic)&&c.relatedTopic!==topic,topic);
  assert.ok(c.concept.length>100&&c.history.length>100&&c.connection.length>100,topic);
  assert.ok(c.terms&&c.sources.length,topic);
  for(const [title,url] of c.sources){assert.ok(title);assert.equal(new URL(url).protocol,'https:');}
 }
});
test('guided course covers all existing concepts exactly once and all calculation families',()=>{
 const ids=guidedLessons.flatMap(l=>l.conceptIds);assert.equal(guidedLessons.length,45);assert.equal(new Set(guidedLessons.map(l=>l.id)).size,45);assert.equal(ids.length,140);assert.equal(new Set(ids).size,140);assert.deepEqual(new Set(ids),new Set(content.cards.map(c=>c.id)));
 const keys=new Set(guidedLessons.flatMap(l=>l.calculations));assert.deepEqual(keys,new Set(calculationCards().map(c=>c.key)));for(const l of guidedLessons){assert.equal(l.options.length,3);assert.ok(l.correct>=0&&l.correct<3);assert.ok(l.context.length>50);assert.ok(l.teaching.length>120);}
});
test('all generated examples expose assumptions, terms and numeric working',()=>{for(const c of calculationCards())for(let seed=0;seed<10;seed++){const g=generate(c.key,seed*101);assert.ok(g.givens.length>=2,c.key);assert.ok(g.steps.length>=2,c.key);assert.ok(g.formula&&g.symbols,c.key);assert.ok(g.steps.every(s=>typeof s==='string'&&s.length>10));assert.ok(Number.isFinite(g.answer));}});
test('familiar bond prices and the per-payment working stay consistent',()=>{const p=bondLessonExample('price');assert.equal(p.answerText,'$973.27');assert.ok(p.steps.some(s=>s.includes('$47.17')));assert.ok(p.steps.some(s=>s.includes('$44.50')));assert.ok(p.steps.some(s=>s.includes('$881.60')));const y=bondLessonExample('yield');assert.equal(y.answerText,'$990.57');assert.ok(y.steps.some(s=>s.includes('$59.43')));});
test('one completed application schedules spaced review, without in-session repetition',()=>{const p=freshGuided();assert.deepEqual(nextGuided(p,now),{id:'promise',kind:'learn'});startGuided(p,'promise',now);assert.deepEqual(nextGuided(p,now),{id:'promise',kind:'continue'});finishGuided(p,'promise','clear',now);assert.equal(p.lessons.promise.due,now+3*day);assert.deepEqual(nextGuided(p,now),{id:'price',kind:'learn'});assert.deepEqual(nextGuided(p,now+4*day),{id:'promise',kind:'review'});startGuided(p,'promise',now+4*day);finishGuided(p,'promise','close',now+4*day);assert.equal(p.lessons.promise.interval,1);assert.equal(p.lessons.promise.due,now+5*day);});
test('lesson backup validation rejects malformed records before replacing progress',()=>{const p=freshGuided();startGuided(p,'promise',now);finishGuided(p,'promise','clear',now);assert.deepEqual(validateGuided(p),p);const bad=structuredClone(p);bad.lessons.promise.choice=99;assert.throws(()=>validateGuided(bad));bad.lessons.promise.choice=null;bad.lessons.promise.due=NaN;assert.throws(()=>validateGuided(bad));});
test('completed original trials migrate without writing or discarding their old records',()=>{const old=JSON.stringify({version:1,lessons:{promise:{finished:now,step:4,answers:{}},price:{finished:null,step:2,answers:{}}}});const storage=new Map([['finance-bond-trials-v1',old]]);globalThis.localStorage={getItem:k=>storage.get(k)||null};const r=readGuided(now);assert.equal(r.progress.lessons.promise.completedAt,now);assert.equal(r.progress.lessons.promise.due,now+3*day);assert.equal(r.progress.activeLesson,'price');assert.equal(storage.get('finance-bond-trials-v1'),old);assert.ok(!storage.has(GUIDED_KEY));});
