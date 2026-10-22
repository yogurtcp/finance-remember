// A small arithmetic parser: expressions are data, never executable JavaScript.
export function calculateExpression(expression){
 const source=String(expression).trim().replace(/^=/,'').replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-').replaceAll('√','sqrt').replaceAll('²','^2').replaceAll('³','^3');
 if(!source)throw Error('Enter a calculation first.');
 if(source.length>300)throw Error('Try a shorter calculation.');
 const tokens=[];let index=0;
 while(index<source.length){
  if(/\s/.test(source[index])){index++;continue;}
  if(source[index]==='$'){
   index++;while(/\s/.test(source[index]||'')&&index<source.length)index++;
   if(!/[\d.]/.test(source[index]||''))throw Error('Put a dollar sign directly before an amount.');
  }
  const rest=source.slice(index),number=rest.match(/^(?:(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
  if(number){const value=Number(number[0].replaceAll(',',''));if(!Number.isFinite(value))throw Error('That number is too large.');tokens.push(value);index+=number[0].length;continue;}
  const name=rest.match(/^(sqrt|exp|e)\b/);
  if(name){tokens.push(name[0]);index+=name[0].length;continue;}
  if('+-*/^()%'.includes(source[index])){tokens.push(source[index++]);continue;}
  if(source[index]===',')throw Error('Use a dot for decimals. Commas may only group thousands, as in 1,000.');
  throw Error('Use numbers, +, −, ×, ÷, parentheses, powers, sqrt or exp.');
 }
 let position=0,depth=0;
 const current=()=>tokens[position];
 const finite=value=>{if(!Number.isFinite(value))throw Error('That calculation has no finite real-number result.');return Object.is(value,-0)?0:value;};
 function sum(){let value=product();while(current()==='+'||current()==='-'){const op=tokens[position++],next=product();value=finite(op==='+'?value+next:value-next);}return value;}
 function product(){let value=unary();while(current()==='*'||current()==='/'){const op=tokens[position++],next=unary();if(op==='/'&&next===0)throw Error('Cannot divide by zero.');value=finite(op==='*'?value*next:value/next);}return value;}
 function unary(){
  if(++depth>40)throw Error('Try fewer nested operations.');
  let value;if(current()==='+'||current()==='-'){const sign=tokens[position++];value=unary();if(sign==='-')value=-value;}else value=power();
  depth--;return finite(value);
 }
 function power(){let value=primary();while(current()==='%'){position++;value/=100;}if(current()==='^'){position++;value=finite(Math.pow(value,unary()));}return value;}
 function primary(){
  const value=tokens[position++];if(typeof value==='number')return value;
  if(value==='e')return Math.E;
  if(value==='('){const inner=sum();if(tokens[position++]!==')')throw Error('Close each opening parenthesis with ).');return inner;}
  if(value==='sqrt'||value==='exp'){
   if(tokens[position++]!=='(')throw Error('Use '+value+'(...) with parentheses.');
   const inner=sum();if(tokens[position++]!==')')throw Error('Close each opening parenthesis with ).');
   if(value==='sqrt'&&inner<0)throw Error('Square root needs a non-negative number.');
   return finite(value==='sqrt'?Math.sqrt(inner):Math.exp(inner));
  }
  throw Error(value===undefined?'Finish the expression after the operator.':'Check the number or parentheses here.');
 }
 const result=sum();if(position!==tokens.length)throw Error('Use × between values and check your parentheses.');return finite(result);
}

const calculatorMemory=new Map(),calculatorRoots=new WeakSet();let calculatorSerial=0;
const calculatorEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const calculatorFormat=value=>{const rounded=Number(value.toPrecision(15));return (Number.isFinite(rounded)?rounded:value).toString();};
const calculatorState=key=>{
 if(!calculatorMemory.has(key)){
  if(calculatorMemory.size>=100)calculatorMemory.delete(calculatorMemory.keys().next().value);
  calculatorMemory.set(key,{expression:'',result:null,error:'',open:false,calculated:false});
 }
 return calculatorMemory.get(key);
};

export function renderCalculator(key,{targetId='',answerUnit=''}={}){
 const state=calculatorState(key),safe=calculatorEscape,id='calculator-expression-'+(++calculatorSerial);
 const keys=[['7','7'],['8','8'],['9','9'],['÷','÷'],['⌫','backspace','Delete previous character'],['4','4'],['5','5'],['6','6'],['×','×'],['C','clear','Clear calculator'],['1','1'],['2','2'],['3','3'],['−','−'],['(','('],['0','0'],['.','.'],['%','%','Percent: divide by 100'],['+','+'],[')',')'],['xʸ','^','Raise to a power'],['√','sqrt(','Square root'],['eˣ','exp(','Exponential: e to a power'],['=','equals','Calculate result']];
 const answerNote=answerUnit==='percent'?'The answer box expects a percentage number. Multiply a decimal return by 100 first: 0.06 × 100 = 6, entered as 6 for 6%.':answerUnit==='percentage points'?'The answer box expects percentage points. Multiply a decimal ratio change by 100 first.':answerUnit?`The answer box expects ${answerUnit}. Check that your calculation uses those units.`:'';
 return `<details class="mini-calculator" data-calculator-key="${safe(key)}" data-calculator-target="${safe(targetId)}" ${state.open?'open':''}><summary>Calculator</summary><div class="calculator-body"><label for="${id}">Your calculation</label><input id="${id}" class="calculator-expression" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" maxlength="300" placeholder="For example: 50 ÷ (1 + 6%)^2" value="${safe(state.expression)}"><div class="calculator-result-line"><span>Result</span><output class="calculator-result" aria-live="polite">${state.result===null?'—':safe(calculatorFormat(state.result))}</output></div><p class="calculator-error" role="status" ${state.error?'':'hidden'}>${safe(state.error)}</p><div class="calculator-keypad" aria-label="Calculator keys">${keys.map(([label,value,aria])=>`<button type="button" data-calculator-keypress="${safe(value)}" class="${value==='equals'?'calculator-equals primary':''}" aria-label="${safe(aria||label)}">${safe(label)}</button>`).join('')}</div>${targetId?`<button type="button" class="calculator-use" data-calculator-use ${state.result===null?'disabled':''}>Use result in my answer</button>`:''}${answerNote?`<p class="calculator-unit-note">${safe(answerNote)}</p>`:''}<details class="calculator-help"><summary>How to use it</summary><p>Type an expression or tap the keys. Press = or Enter to calculate. Parentheses group steps; xʸ means raise to a power.</p><p>% always divides by 100: 5% = 5 ÷ 100 = 0.05. To find 5% of $1,000, enter 1000 × 5%.</p><p>√ inserts sqrt(...) for a square root. eˣ inserts exp(...) for continuous growth or discounting. For example, exp(0) = 1. Use * and / when typing multiplication and division.</p><p>Results display up to 15 significant digits. Using the calculator does not submit an answer or change your review rating.</p></details></div></details>`;
}

export function calculatorExampleKey(example){
 const text=JSON.stringify([example.prompt,example.formula,example.givens]);let hash=2166136261;
 for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619);}
 return 'example:'+String(globalThis.location?.hash||'')+':'+(hash>>>0).toString(16);
}

// Delegation keeps the calculator working after lessons or answer panels rerender.
export function initializeCalculators(root){
 if(calculatorRoots.has(root))return;calculatorRoots.add(root);
 const panelFor=target=>target?.closest?.('.mini-calculator');
 function update(panel,state){
  const expressionInput=panel.querySelector('.calculator-expression');if(expressionInput.value!==state.expression)expressionInput.value=state.expression;
  panel.querySelector('.calculator-result').textContent=state.result===null?'—':calculatorFormat(state.result);
  const error=panel.querySelector('.calculator-error');error.textContent=state.error;error.hidden=!state.error;
  const use=panel.querySelector('[data-calculator-use]');if(use)use.disabled=state.result===null;
 }
 function evaluate(panel,state){
  try{state.result=calculateExpression(state.expression);state.error='';state.calculated=true;}
  catch(error){state.result=null;state.error=error.message;state.calculated=false;}
  update(panel,state);
 }
 root.addEventListener('toggle',event=>{if(event.target?.matches?.('.mini-calculator'))calculatorState(event.target.dataset.calculatorKey).open=event.target.open;},true);
 root.addEventListener('input',event=>{
  if(!event.target?.matches?.('.calculator-expression'))return;const panel=panelFor(event.target),state=calculatorState(panel.dataset.calculatorKey);
  Object.assign(state,{expression:event.target.value,result:null,error:'',open:panel.open,calculated:false});update(panel,state);
 });
 root.addEventListener('keydown',event=>{
  if(!event.target?.matches?.('.calculator-expression'))return;const panel=panelFor(event.target),state=calculatorState(panel.dataset.calculatorKey);
  if(event.key==='Enter'||event.key==='='){event.preventDefault();event.stopPropagation();evaluate(panel,state);}
  if(event.key==='Escape'){event.preventDefault();panel.open=false;state.open=false;panel.querySelector('summary').focus();}
 });
 root.addEventListener('click',event=>{
  const button=event.target?.closest?.('[data-calculator-keypress],[data-calculator-use]');if(!button||!root.contains(button))return;
  const panel=panelFor(button),state=calculatorState(panel.dataset.calculatorKey),input=panel.querySelector('.calculator-expression');state.open=panel.open;
  if(button.hasAttribute('data-calculator-use')){
   if(state.result===null)return;const answer=panel.ownerDocument.getElementById(panel.dataset.calculatorTarget);if(!answer)return;
   answer.value=Number(calculatorFormat(state.result)).toLocaleString('en-US',{useGrouping:false,maximumSignificantDigits:15});
   answer.dispatchEvent(new (answer.ownerDocument.defaultView.Event)('input',{bubbles:true}));answer.focus();return;
  }
  const key=button.dataset.calculatorKeypress;
  if(key==='equals'){evaluate(panel,state);return;}
  if(key==='clear'){Object.assign(state,{expression:'',result:null,error:'',calculated:false});update(panel,state);return;}
  let expression=state.expression,start=input.selectionStart??expression.length,end=input.selectionEnd??expression.length;
  if(state.calculated&&key!=='backspace'){
   expression=/^[+−×÷^%]$/.test(key)?calculatorFormat(state.result):'';start=end=expression.length;
  }
  let cursor;
  if(key==='backspace'){if(start===end&&start>0)start--;state.expression=expression.slice(0,start)+expression.slice(end);cursor=start;}
  else{state.expression=expression.slice(0,start)+key+expression.slice(end);cursor=start+key.length;}
  if(state.expression.length>300){state.expression=expression;state.error='Try a shorter calculation.';}else state.error='';
  state.result=null;state.calculated=false;update(panel,state);input.setSelectionRange?.(cursor,cursor);
 });
}
