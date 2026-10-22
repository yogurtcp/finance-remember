import pathlib,re,json
root=pathlib.Path(__file__).parent;dist=root/'dist'
js='\n'.join(re.sub(r'^import .*?;\n','', (dist/f).read_text(),flags=re.M).replace('export ','') for f in ['engine.js','calculator.js','calculations.js','lesson-content.js','guided-progress.js','connections.js','guided-ui.js','trials.js','app.js'])
js=js.replace("const res=await fetch('content.json');if(!res.ok)throw Error('Content could not load.');data=await res.json();",'data='+json.dumps(json.load(open(dist/'content.json')),ensure_ascii=False)+';')
js=js.replace("if('serviceWorker' in navigator)","if(location.protocol!=='file:'&&'serviceWorker' in navigator)")
css=re.sub(r'^@import .*?;\n','',(dist/'styles.css').read_text(),flags=re.M)
html=(dist/'index.html').read_text().replace('<link rel="stylesheet" href="styles.css">','<style>'+css+'</style>').replace('<script type="module" src="app.js"></script>','<script type="module">'+js.replace('</script','<\\/script')+'</script>').replace('<link rel="manifest" href="manifest.webmanifest">','').replace('<link rel="icon" href="icon.svg">','')
output=root/'standalone';output.mkdir(exist_ok=True);(output/'finance-remember.html').write_text(html)
trial_html=html.replace('<script type="module">', '<script type="module">\nif(!location.hash)location.hash="chapter/bonds";\n',1)
(output/'bond-trials.html').write_text(trial_html)
(output/'guided-finance.html').write_text(html)
print(output/'finance-remember.html')
print(output/'bond-trials.html')
