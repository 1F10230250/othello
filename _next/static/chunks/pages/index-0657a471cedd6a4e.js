(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,i,t){"use strict";t.r(i);var n=t(5893),o=t(7294),l=t(2729),d=t.n(l);let r=()=>{let[e,i]=(0,o.useState)(1),[t,l]=(0,o.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),r=0;for(let e=0;e<=7;e+=1)for(let i=0;i<=7;i+=1)2===t[e][i]&&(r+=1);let _=0;for(let e=0;e<=7;e+=1)for(let i=0;i<=7;i+=1)1===t[e][i]&&(_+=1);(0,o.useEffect)(()=>{let e=r,i=document.getElementById("result");i&&(i.textContent=e.toString());let t=_,n=document.getElementById("result");n&&(n.textContent=t.toString())},[r,_]);for(let e=0;e<=7;e+=1)for(let i=0;i<=7;i+=1)3===t[e][i]&&(t[e][i]=0);for(let i=0;i<=7;i+=1)for(let n=0;n<=7;n+=1)for(let o=-1;o<=1;o+=1)for(let l=-1;l<=1;l+=1)if(void 0!==t[i+o]&&void 0!==t[n+l]&&t[i+o][n+l]===3-e)for(let d=2;d<=7&&(void 0===t[i+d*o]||void 0===t[n+d*l]||0!==t[i+d*o][n+d*l]);d+=1)void 0!==t[i+d*o]&&void 0!==t[n+d*l]&&t[i+d*o][n+d*l]===e&&(0===t[i][n]||3===t[i][n])&&(t[i][n]=3);let s=()=>{i(3-e),console.log("変わったよ",e)},c=100,a=(n,o)=>{100===n&&100===o&&console.log("pass!"),console.log(n,o);let d=JSON.parse(JSON.stringify(t));if(100!==o&&100!==n&&0===t[o][n]||3===t[o][n]){for(let l=-1;l<=1;l+=1)for(let r=-1;r<=1;r+=1)if(void 0!==t[o+l]&&void 0!==t[n+r]&&t[o+l][n+r]===3-e)for(let _=2;_<=7;_+=1){if(50===c){c=100;break}if(void 0!==t[o+_*l]&&void 0!==t[n+_*r]&&0===t[o+_*l][n+_*r])break;if(void 0!==t[o+_*l]&&void 0!==t[n+_*r]&&t[o+_*l][n+_*r]===e){for(let i=0;i<=_;i+=1)d[o+i*l][n+i*r]=e,c=50;i(3-e)}}}l(d)};return(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsx)("div",{id:"your-element-id",children:"要素"}),(0,n.jsxs)("div",{className:d().black_number,id:"result-black",children:["黒",_]}),(0,n.jsxs)("div",{className:d().white_number,id:"result-white",children:["白",r]}),(0,n.jsx)("div",{className:d().pass,onClick:s,children:"pass"}),(0,n.jsx)("div",{className:d().board,children:t.map((e,i)=>e.map((e,t)=>(0,n.jsx)("div",{className:d().cell,onClick:()=>a(t,i),children:0!==e&&(0,n.jsx)("div",{className:d().stone,id:"stone",style:{background:1===e?"#000":2===e?"#fff":"#f00"}})},"".concat(t,"-").concat(i))))})]})};i.default=r},2729:function(e){e.exports={container:"index_container__gnN1f",black_number:"index_black_number__QNNRT",white_number:"index_white_number__ytwxj","ka-soru":"index_ka-soru__OyY4J",pass:"index_pass__reocV",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);