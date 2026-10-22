import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateExpression} from '../dist/calculator.js';
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<=Math.max(1,Math.abs(expected))*1e-12,`${actual} versus ${expected}`);

test('arithmetic follows precedence, parentheses and right-associative powers',()=>{
 assert.equal(calculateExpression('1 + 2 × 3'),7);
 assert.equal(calculateExpression('(1 + 2) × 3'),9);
 assert.equal(calculateExpression('2^3^2'),512);
 assert.equal(calculateExpression('-2^2'),-4);
 assert.equal(calculateExpression('(-2)^2'),4);
 assert.equal(calculateExpression('2^-3'),0.125);
 assert.equal(calculateExpression('−5 − (−2)'),-3);
});
test('percentages consistently divide by 100 and financial discounting stays accurate',()=>{
 assert.equal(calculateExpression('5%'),0.05);
 assert.equal(calculateExpression('1000 × 5%'),50);
 assert.equal(calculateExpression('100 + 10%'),100.1);
 close(calculateExpression('50 ÷ (1 + 6%)^2'),50/1.06**2);
 close(calculateExpression('$50 ÷ 1.06²'),50/1.06**2);
 close(calculateExpression('$1,050 ÷ 1.06³'),1050/1.06**3);
 close(calculateExpression('50/1.06 + 50/1.06^2 + 1050/1.06^3'),973.2698805053836);
 close(calculateExpression('(1.08/1.03 - 1)*100'),(1.08/1.03-1)*100);
});
test('square roots and continuous-growth expressions support course calculations',()=>{
 assert.equal(calculateExpression('sqrt(0.04)'),0.2);
 assert.equal(calculateExpression('√(81)'),9);
 close(calculateExpression('100 * exp(0.04 * 0.5)'),100*Math.exp(0.02));
 close(calculateExpression('100 * e^(-0.04 * 0.5)'),100*Math.exp(-0.02));
 assert.equal(calculateExpression('exp(0)'),1);
});
test('ordinary financial number formats are accepted without misreading comma decimals',()=>{
 assert.equal(calculateExpression('=$1,000 ÷ 4'),250);
 assert.equal(calculateExpression('1,234,567.5 - .5'),1234567);
 assert.equal(calculateExpression('1e-3'),0.001);
 assert.throws(()=>calculateExpression('1,5'),/dot for decimals/);
 assert.throws(()=>calculateExpression('12,34'),/dot for decimals/);
});
test('incomplete expressions, invalid domains and excessive input produce useful errors',()=>{
 assert.throws(()=>calculateExpression(''),/first/);
 assert.throws(()=>calculateExpression('5 +'),/Finish/);
 assert.throws(()=>calculateExpression('(5 + 2'),/parenthesis/);
 assert.throws(()=>calculateExpression('1 / (2-2)'),/zero/);
 assert.throws(()=>calculateExpression('sqrt(-1)'),/non-negative/);
 assert.throws(()=>calculateExpression('2(3)'),/between values/);
 assert.throws(()=>calculateExpression('exp(1000)'),/finite/);
 assert.throws(()=>calculateExpression('1e999'),/too large/);
 assert.throws(()=>calculateExpression('('.repeat(45)+'1'+')'.repeat(45)),/nested/);
 assert.throws(()=>calculateExpression('1'.repeat(301)),/shorter/);
});
test('expressions cannot call JavaScript or access names outside the arithmetic grammar',()=>{
 for(const source of ['Math.random()','globalThis.alert(1)','constructor.constructor(1)','1;2','<img src=x>','[1,2]','2**3'])assert.throws(()=>calculateExpression(source),source);
});
