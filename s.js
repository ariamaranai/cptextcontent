(({contextMenus:m,runtime:r,scripting:s})=>(r.onInstalled.addListener(()=>m.create({id:"",title:"Copy textContent",contexts:["page","link"]})),s=s.executeScript,m.onClicked.addListener(({frameId:f},{url:u,id:i})=>u[0]!="c"&&s({target:f?{tabId:i,frameIds:[f]}:{tabId:i},world:"MAIN",func:()=>navigator.clipboard.writeText(document.activeElement.textContent)}))))(chrome)