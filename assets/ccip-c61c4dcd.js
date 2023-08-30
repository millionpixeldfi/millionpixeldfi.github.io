import{a4 as f,a5 as w,a6 as y,a7 as p,a8 as h,a9 as g,aa as k,ab as O,ac as L,ad as m,ae as E}from"./Home-abae6bd3.js";import"./VRow-c65a0b39.js";import"./tag-403d31b1.js";import"./index-4620ed17.js";import"./_commonjsHelpers-de833af9.js";import"./resizeObserver-6f19d09c.js";class x extends f{constructor({callbackSelector:e,cause:t,data:o,extraData:c,sender:d,urls:a}){var i;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(i=t.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(u=>`    ${w(u)}`)],`  Sender: ${d}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends f{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(t)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends f{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function $(s,e){if(!p(s))throw new h({address:s});if(!p(e))throw new h({address:e});return s.toLowerCase()===e.toLowerCase()}const G="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function U(s,{blockNumber:e,blockTag:t,data:o,to:c}){const{args:d}=g({data:o,abi:[S]}),[a,i,u,r,n]=d;try{if(!$(c,a))throw new R({sender:a,to:c});const l=await A({data:u,sender:a,urls:i}),{data:b}=await k(s,{blockNumber:e,blockTag:t,data:O([r,L([{type:"bytes"},{type:"bytes"}],[l,n])]),to:c});return b}catch(l){throw new x({callbackSelector:r,cause:l,data:o,extraData:n,sender:a,urls:i})}}async function A({data:s,sender:e,urls:t}){var c;let o=new Error("An unknown error occurred.");for(let d=0;d<t.length;d++){const a=t[d],i=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",u=i==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(a.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(u),method:i});let n;if((c=r.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?n=(await r.json()).data:n=await r.text(),!r.ok){o=new m({body:u,details:y(n.error)||r.statusText,headers:r.headers,status:r.status,url:a});continue}if(!E(n)){o=new M({result:n,url:a});continue}return n}catch(r){o=new m({body:u,details:r.message,url:a})}}throw o}export{A as ccipFetch,U as offchainLookup,S as offchainLookupAbiItem,G as offchainLookupSignature};
