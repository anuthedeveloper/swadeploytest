import"../modulepreload-polyfill--IJuvtTE.js";import{m as e}from"../alpine-ce9rsFNy.js";document.addEventListener("alpine:init",(()=>{e.data("ModelNavigation",(()=>({getBareModelUid:e=>null==e?void 0:e.replace("#model-","").replace("model-",""),findPreviousAndNextModel(){const e=this.getBareModelUid(document.location.hash);if(!e)return{previous:null,next:null};const t=[...document.querySelectorAll("ul.cards li.visible dialog")].sort(((e,t)=>{const n=e=>{for(;null!==e;){if(e.style.order)return parseInt(e.style.order);e=e.parentElement}return 0};return n(e)-n(t)}));if(!t||0===t.length)return{previous:null,next:null};let n=null,o=null,l=!1;for(const i of t){const t=this.getBareModelUid(i.id);if(t===e&&(l=!0),l&&!o&&t!==e&&(o=i),l||t===e||(n=i),n&&o)break}return{previous:n,next:o}},close(){document.location.hash=""},navigate(e){switch(e.keyCode){case 33:this.previous();break;case 34:this.next()}},previous(){const e=this.findPreviousAndNextModel();e.previous&&(document.location.hash=e.previous.id)},next(){const e=this.findPreviousAndNextModel();e.next&&(document.location.hash=e.next.id)}})))})),window.Alpine||(window.Alpine=e,e.start()),function(){const e=function(e,t,n){var o;const l=(null==t?void 0:t.includes(e))?e.length/t.length*5:0,i=null==(o=null==n?void 0:n.filter((t=>null==t?void 0:t.includes(e))))?void 0:o.map((t=>e.length/t.length*1)),r=Math.max(i)||0;return Math.max(l,r)||0},t=function(e){var t,n;const o=e.querySelector(".name");return null==(n=null==(t=(null==o?void 0:o.textContent)||(null==o?void 0:o.innerText))?void 0:t.trim())?void 0:n.toUpperCase()},n=function(e){const t=e.querySelectorAll(".tags > li");return t&&0!==t.length?[...t].map((e=>{var t,n;return null==(n=null==(t=null==e?void 0:e.innerText)?void 0:t.trim())?void 0:n.toUpperCase()})):[]},o=function(o){const l=o.target.dataset.target;if(!l)return void l.error("No data-target specified");const i=document.querySelectorAll(l);if(!i||0===i.length)return void console.error(`'${l}' matches no elements`);const r=o.target.value.toUpperCase();for(const s of i)for(const o of s.children){if(0===(null==r?void 0:r.trim().length)){o.style.order=0,o.classList.remove("visible","hidden"),o.classList.add("visible");continue}const l=t(o),i=n(o),s=e(r,l,i),d=-1*Math.round(1e5*s);o.style.order=d,o.classList.remove("visible","hidden"),s>0?o.classList.add("visible"):o.classList.add("hidden")}};document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll('input[type="search"]');for(const t of e)t.addEventListener("keyup",o)}))}();//# sourceMappingURL=index-Mrp6P90n.js.map
