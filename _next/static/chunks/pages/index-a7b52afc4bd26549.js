(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1891)}])},1891:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return u}});var n=t(5893),l=t(4110),r=t.n(l);let i=e=>(0,n.jsx)("div",{className:r().cell,onClick:e.onClick,children:0!==e.color&&(0,n.jsx)("div",{className:r().stone,id:"stone",style:{background:1===e.color?"#000":2===e.color?"#fff":"#f00"}})});var s=t(7294);let c=()=>{let[e,o]=(0,s.useState)(1),[t,n]=(0,s.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),l=0;for(let e=0;e<=7;e+=1)for(let o=0;o<=7;o+=1)2===t[e][o]&&(l+=1);let r=0;for(let e=0;e<=7;e+=1)for(let o=0;o<=7;o+=1)1===t[e][o]&&(r+=1);(0,s.useEffect)(()=>{let e=l,o=document.getElementById("result");o&&(o.textContent=e.toString());let t=r,n=document.getElementById("result");n&&(n.textContent=t.toString())},[l,r]);for(let e=0;e<=7;e+=1)for(let o=0;o<=7;o+=1)3===t[e][o]&&(t[e][o]=0);for(let o=0;o<=7;o+=1)for(let n=0;n<=7;n+=1)for(let l=-1;l<=1;l+=1)for(let r=-1;r<=1;r+=1)if(void 0!==t[o+l]&&void 0!==t[n+r]&&t[o+l][n+r]===3-e)for(let i=2;i<=7&&(void 0===t[o+i*l]||void 0===t[n+i*r]||0!==t[o+i*l][n+i*r]);i+=1)void 0!==t[o+i*l]&&void 0!==t[n+i*r]&&t[o+i*l][n+i*r]===e&&(0===t[o][n]||3===t[o][n])&&(t[o][n]=3);let i=()=>{window.location.reload()},c=100,d=(l,r)=>{100===l&&100===r&&console.log("pass!"),console.log(l,r);let i=JSON.parse(JSON.stringify(t));if(100!==r&&100!==l&&0===t[r][l]||3===t[r][l]){for(let n=-1;n<=1;n+=1)for(let s=-1;s<=1;s+=1)if(void 0!==t[r+n]&&void 0!==t[l+s]&&t[r+n][l+s]===3-e)for(let d=2;d<=7;d+=1){if(50===c){c=100;break}if(void 0!==t[r+d*n]&&void 0!==t[l+d*s]&&0===t[r+d*n][l+d*s])break;if(void 0!==t[r+d*n]&&void 0!==t[l+d*s]&&t[r+d*n][l+d*s]===e){for(let o=0;o<=d;o+=1)i[r+o*n][l+o*s]=e,c=50;o(3-e)}}}n(i)};return{click_reload:i,board:t,onClick:d,turncolor:e,black:r,white:l,myTurnColor:1==e?"黒":"白"}};var d=t(2729),a=t.n(d);let _=()=>{let{onClick:e,click_reload:o,board:t,white:l,black:r,myTurnColor:s}=c();return(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsxs)("div",{className:a().turn,children:[s,"のターン"]}),(0,n.jsxs)("div",{className:a().scores,children:[(0,n.jsxs)("div",{className:a().black_number,id:"result-black",children:["黒",r]}),(0,n.jsxs)("div",{className:a().white_number,id:"result-white",children:["白",l]})]}),(0,n.jsx)("div",{className:a().reload,onClick:o,children:"リセット"}),(0,n.jsx)("div",{className:a().board,children:t.map((o,t)=>o.map((o,l)=>(0,n.jsx)(i,{color:o,onClick:()=>e(l,t)},"".concat(l,"-").concat(t))))})]})};var u=_},4110:function(e){e.exports={cell:"cell_cell__VTQkI",stone:"cell_stone__pDME7"}},2729:function(e){e.exports={container:"index_container__gnN1f","ka-soru":"index_ka-soru__OyY4J",turn:"index_turn__J8soK",scores:"index_scores__e5g_T",black_number:"index_black_number__QNNRT",white_number:"index_white_number__ytwxj",reload:"index_reload__agpXx",board:"index_board__2d6xe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);