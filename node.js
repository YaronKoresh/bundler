var b=Object.create;var d=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var O=(e,l)=>{for(var n in l)d(e,n,{get:l[n],enumerable:!0})},g=(e,l,n,o)=>{if(l&&typeof l=="object"||typeof l=="function")for(let t of T(l))!L.call(e,t)&&t!==n&&d(e,t,{get:()=>l[t],enumerable:!(o=A(l,t))||o.enumerable});return e};var m=(e,l,n)=>(n=e!=null?b(B(e)):{},g(l||!e||!e.__esModule?d(n,"default",{value:e,enumerable:!0}):n,e)),k=e=>g(d({},"__esModule",{value:!0}),e);var M={};O(M,{Bundle:()=>j});module.exports=k(M);var r=m(require("path"),1);var c=m(require("fs"),1),C="(none)",u=null,h={"C/C++":[".h",".hpp",".c",".cc",".cpp"]},v=Object.keys(h),F=Object.values(h),p=null,f=null,w=[],a="",S="",x=null,i=null,j=function(e,l,n="."){if(f=r.default.basename(e),!f)throw new Error("The main file is null!");p=r.default.basename(l),x=r.default.resolve(n).replaceAll("\\","/"),i=[x],c.default.writeFileSync(p,""),P(f),c.default.appendFileSync(p,a)};function E(e){try{S=a+e,a=S}catch(l){c.default.appendFileSync(p,a),c.default.appendFileSync(p,e),a=""}}function P(e){D(e);let l=e;if(e=I(e),C=e,!w.includes(e)){if(w.push(e),u){if(!h[u].includes(r.default.extname(e)))throw new Error("Multiple languages detected!")}else{let n=null;for(let o=0;o<F.length;o++)F[o].includes(r.default.extname(e))&&(n=o);if(n==null)throw new Error("Unsupported language detected!");u=v[n],console.log(`
Language:
`+u)}E("// File: "+l+`
`),u=="C/C++"&&Z(e)}}function D(e){console.log(`
Directories:
`+i.join(`
`)),console.log(`
Processing:
`+e)}function y(){for(let e=0;e<i.length;e++)for(let l=0;l<i.length;l++)e!=l&&i[e].includes(i[l])&&(i[l]="*");i=i.filter(e=>e!="*")}function I(e){y();for(let l=0;l<i.length;l++){let n=i[l],o=e.replaceAll("\\","/").replaceAll("//","/"),t=n.split("/");for(;t.length>0;){let s=[...t,o].join("/");if(c.default.existsSync(s))return i.push(r.default.dirname(s)),y(),s;t.pop()}}throw new Error(e+" was not found! Caller: "+C)}function Z(e){let n=c.default.readFileSync(e,{encoding:"utf8"}).split(`
`);for(let o=0;o<n.length;o++){let t=n[o];if(t.includes('#include "')||t.includes("#include '")){let s=t.trim().replace(/#include ([\"\'])/,"").replace(/([\"\']).*$/,"");P(s)}else E(t+`
`)}}0&&(module.exports={Bundle});
