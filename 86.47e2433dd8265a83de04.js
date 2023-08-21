"use strict";(self.webpackChunktailchat_web=self.webpackChunktailchat_web||[]).push([[86],{28723:(y,P,t)=>{t.d(P,{L:()=>c});var e=t(20685),d=t(52983),_=t(93540);const c=d.memo(r=>{const[o,E]=(0,d.useState)(!1);return d.createElement(e.Z,{open:o,onOpenChange:E,content:()=>r.popoverContent({hidePopover:()=>{E(!1)}}),overlayClassName:"chat-message-input_action-popover",showArrow:!1,placement:"topRight",trigger:["click"]},d.createElement(_.JO,{className:"text-2xl cursor-pointer",icon:r.icon}))});c.displayName="BaseChatInputButton"},29254:(y,P,t)=>{t.d(P,{TD:()=>s,at:()=>l,x2:()=>v,zB:()=>m});var e=t(52983),d=t(30831),_=Object.defineProperty,c=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,E=(n,a,i)=>a in n?_(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,f=(n,a)=>{for(var i in a||(a={}))r.call(a,i)&&E(n,i,a[i]);if(c)for(var i of c(a))o.call(a,i)&&E(n,i,a[i]);return n};const m=e.createContext({});m.displayName="ChatInputActionContext";function l(){return(0,e.useContext)(m)}const u=e.createContext(null);u.displayName="ChatInputMentionsContext";const v=e.memo(n=>e.createElement(u.Provider,{value:(0,d.coD)(f({},n))},n.children));v.displayName="ChatInputMentionsContextProvider";function s(){var n,a;const i=(0,e.useContext)(u);return{users:(n=i==null?void 0:i.users)!=null?n:[],panels:(a=i==null?void 0:i.panels)!=null?a:[],placeholder:i==null?void 0:i.placeholder,disabled:i==null?void 0:i.disabled}}},16365:(y,P,t)=>{t.d(P,{H:()=>c});var e=t(52983),d=t(30831);const _=e.memo(r=>{const o=(0,e.useRef)(null),E=(0,d.nWw)(m=>{const{onIntersection:l,onUnIntersection:u}=r;m.forEach(v=>{const{intersectionRatio:s}=v;s>0?l&&l(v.target):u&&u(v.target)})}),f=(0,d.nWw)(()=>{r.onIntersectionUnmount&&r.onIntersectionUnmount()});return(0,e.useEffect)(()=>{if(!o.current)return;const m=r.root?document.querySelector(r.root):null,l=new IntersectionObserver(E,{root:m,rootMargin:r.rootMargin,threshold:r.threshold});return l.observe(o.current),()=>{l.disconnect(),f()}},[]),e.createElement("div",{ref:o},r.children)});_.displayName="Intersection";const c=e.memo(r=>{const{updateConverseAck:o}=(0,d.hoD)(r.converseId),E=(0,d.zX9)(()=>{o(r.messageId)});return e.createElement(_,{onIntersection:E},r.children)});c.displayName="MessageAckContainer"},89925:(y,P,t)=>{t.d(P,{a:()=>e.a3});var e=t(93540)},53652:(y,P,t)=>{t.d(P,{d:()=>u,_:()=>v});var e=t(52983),d=t(30831),_=t(72630);const c=_;var r=t(62394),o=t(22183),E=t(30387);const f=t.p+"assets/twitter.f37b283.png",m=e.memo(s=>{const{isDarkMode:n}=(0,d.tv4)(),{language:a}=(0,d.ZKp)(),i=(0,e.useCallback)(I=>{const g=I.shortcodes;(0,d.YQu)(g)&&s.onSelect(g)},[s.onSelect]);return e.createElement("div",{className:"emoji-picker"},e.createElement(r.Z,{set:"twitter",data:c,theme:n?"dark":"light",i18n:a==="zh-CN"?o:E,previewPosition:"none",skinTonePosition:"none",onEmojiSelect:i,getSpritesheetURL:()=>f}))});m.displayName="EmojiPicker";var l=t(22705);(0,l.S1)({set:"twitter",data:c});const u=e.memo(s=>{const n=s.emoji.startsWith(":")?s.emoji:`:${s.emoji}:`;return(0,e.useMemo)(()=>{var a,i;let I="",g=0;const h=n.match(l.WV.SHORTCODES_REGEX);h&&(I=h[1],h[2]&&(g=Number(h[2])));const D=l.WV.get(I);if(!D)return e.createElement("span",null);const p=D.skins[g-1]||D.skins[0];return e.createElement("span",{className:"emoji-mart-emoji align-middle","data-emoji-set":"twitter"},e.createElement("span",{style:{display:"block",width:(a=s.size)!=null?a:"16px",height:(i=s.size)!=null?i:"16px",backgroundImage:`url(${f})`,backgroundSize:`${100*l.Vw.sheet.cols}% ${100*l.Vw.sheet.rows}%`,backgroundPosition:`${100/(l.Vw.sheet.cols-1)*p.x}% ${100/(l.Vw.sheet.rows-1)*p.y}%`}}))},[n])});u.displayName="Emoji";const v=e.memo(s=>e.createElement(m,{onSelect:s.onSelect}));v.displayName="EmojiPanel"},21597:(y,P,t)=>{t.d(P,{o:()=>_});var e=t(52983),d=t(6739);const _=e.memo(({error:c})=>{var r,o;return e.createElement(d.t,{text:String((o=(r=c.message)!=null?r:c.name)!=null?o:c)})});_.displayName="ErrorView"},7606:(y,P,t)=>{t.d(P,{LP:()=>D,jo:()=>p,lj:()=>x});var e=t(52983),d=t(76705),_=t.n(d),c=t(14698),r=t.n(c),o=t(58761),E=t(79546),f=t(30831),m=t(89925),l=t(84143),u=t(7013),v=Object.defineProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(O,C,M)=>C in O?v(O,C,{enumerable:!0,configurable:!0,writable:!0,value:M}):O[C]=M,I=(O,C)=>{for(var M in C||(C={}))n.call(C,M)&&i(O,M,C[M]);if(s)for(var M of s(C))a.call(C,M)&&i(O,M,C[M]);return O};function g(O){return _()(O)?O:void 0}const h=e.memo(O=>{var C,M;const[W,A]=(0,e.useState)(!1),[N,w]=(0,e.useState)((C=O.value)!=null?C:""),T=g(O.value);(0,e.useEffect)(()=>{var B;w((B=O.value)!=null?B:"")},[O.value]);const R=(0,e.useCallback)(()=>{A(!W)},[W]),U=(0,e.useCallback)(()=>{var B;(B=O.onSave)==null||B.call(O,N),A(!1)},[O.onSave,N]),L=O.renderEditor;return e.createElement("div",{className:"flex w-full"},e.createElement("div",{className:"truncate"},W&&!r()(L)?e.createElement(L,{value:N,onChange:w}):e.createElement("span",{className:"select-text",title:T},(M=O.content)!=null?M:O.value)),e.createElement("div",{className:"ml-2"},W?e.createElement(o.Z,null,e.createElement(m.a,{title:(0,f.t)("\u53D6\u6D88")},e.createElement(l.a,{size:"small",icon:"mdi:close",onClick:R})),e.createElement(m.a,{title:(0,f.t)("\u4FDD\u5B58\u53D8\u66F4")},e.createElement(l.a,{type:"primary",size:"small",icon:"mdi:check",onClick:U}))):e.createElement(m.a,{title:(0,f.t)("\u7F16\u8F91")},e.createElement(l.a,{size:"small",icon:"mdi:square-edit-outline",onClick:R}))))});h.displayName="FullModalFieldEditor";const D=e.memo(O=>{var C;const M=g(O.value),W=O.editable===!0&&!r()(O.renderEditor);return e.createElement("div",{className:"mb-4"},e.createElement("div",{className:"text-xs text-gray-400 mb-2 flex items-center"},e.createElement("span",null,O.title),O.tip&&e.createElement("span",{className:"ml-1 text-sm"},e.createElement(u.a,{content:O.tip}))),e.createElement("div",{className:"min-h-10 text-base truncate"},W===!0?e.createElement(h,I({},O)):e.createElement("span",{className:"select-text",title:M},(C=O.content)!=null?C:O.value)))});D.displayName="FullModalField";const p=({value:O,onChange:C})=>e.createElement(E.Z,{value:O,onChange:M=>C(M.target.value)}),x=({value:O,onChange:C})=>e.createElement(E.Z.TextArea,{autoSize:{minRows:2,maxRows:6},value:O,onChange:M=>C(M.target.value)})},84143:(y,P,t)=>{t.d(P,{a:()=>g});var e=t(75526),d=t(95268),_=t(14517),c=t(52983),r=t(30831),o=t(93540),E=Object.defineProperty,f=Object.defineProperties,m=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,s=(h,D,p)=>D in h?E(h,D,{enumerable:!0,configurable:!0,writable:!0,value:p}):h[D]=p,n=(h,D)=>{for(var p in D||(D={}))u.call(D,p)&&s(h,p,D[p]);if(l)for(var p of l(D))v.call(D,p)&&s(h,p,D[p]);return h},a=(h,D)=>f(h,m(D)),i=(h,D)=>{var p={};for(var x in h)u.call(h,x)&&D.indexOf(x)<0&&(p[x]=h[x]);if(h!=null&&l)for(var x of l(h))D.indexOf(x)<0&&v.call(h,x)&&(p[x]=h[x]);return p};function I(h="circle"){return h==="circle"?"circle":"default"}const g=c.memo(h=>{var D=h,{icon:p,iconClassName:x,title:O,className:C}=D,M=i(D,["icon","iconClassName","title","className"]);const W=I(M.shape),A=c.createElement("span",{className:"anticon"},c.createElement(o.JO,{className:x,icon:p})),N=M.active?"bg-black bg-opacity-60":"bg-black bg-opacity-20 hover:bg-opacity-60",w=c.createElement(e.Z,a(n({className:(0,_.Z)("border-0 text-white text-opacity-80 hover:text-opacity-100",M.danger?"bg-red-600 bg-opacity-80 hover:bg-opacity-100":N,C)},M),{shape:W,icon:A}));return(0,r.YQu)(O)&&!M.disabled?c.createElement(d.Z,{title:O},w):w});g.displayName="IconBtn"},13893:(y,P,t)=>{t.d(P,{L:()=>v,A:()=>s.A});var e=t(52983),d=t(52081),_=Object.defineProperty,c=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(n,a,i)=>a in n?_(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,l=(n,a)=>{for(var i in a||(a={}))E.call(a,i)&&m(n,i,a[i]);if(o)for(var i of o(a))f.call(a,i)&&m(n,i,a[i]);return n},u=(n,a)=>c(n,r(a));const v=n=>{const a=(0,d.P)(i=>i.cachedComponents);return e.createElement(e.Fragment,null,n.children,e.createElement("div",{className:"keep-alive-overlay-host"},Object.entries(a).map(([i,I])=>{const{visible:g,element:h,rect:D}=I;return e.createElement("div",{id:`cache-${i}`,style:u(l({display:g?"block":"none"},D),{position:"fixed"}),key:i},h)})))};v.displayName="KeepAliveOverlayHost";var s=t(74312)},52081:(y,P,t)=>{t.d(P,{P:()=>_});var e=t(36350),d=t(50748);const _=(0,e.create)()((0,d.immer)(c=>({cachedComponents:{},mount:(r,o)=>{c(E=>{const f=E.cachedComponents;if(f[r]){E.cachedComponents[r].visible=!0;return}f[r]={visible:!0,element:o,rect:{left:0,top:0,width:0,height:0}}})},show:r=>{c(o=>{!o.cachedComponents[r]||(o.cachedComponents[r].visible=!0)})},hide:r=>{c(o=>{!o.cachedComponents[r]||(o.cachedComponents[r].visible=!1)})},updateRect:(r,o)=>{c(E=>{!E.cachedComponents[r]||(E.cachedComponents[r].rect=o)})}})))},74312:(y,P,t)=>{t.d(P,{A:()=>v});var e=t(52983),d=t(52081),_=t(73352),c=t.n(_),r=t(22398),o=Object.defineProperty,E=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,l=(s,n,a)=>n in s?o(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,u=(s,n)=>{for(var a in n||(n={}))f.call(n,a)&&l(s,a,n[a]);if(E)for(var a of E(n))m.call(n,a)&&l(s,a,n[a]);return s};function v(s,n){return a=>{const i=(0,e.useRef)(null),I=c()(a,["className","style"]),{mount:g,hide:h,updateRect:D}=(0,d.P)(),p=(0,e.useMemo)(()=>typeof n.cacheId=="function"?n.cacheId(I):n.cacheId,[I]);return(0,e.useEffect)(()=>(g(p,e.createElement(s,u({key:p},I))),()=>{h(p)}),[p]),(0,e.useEffect)(()=>{if(!i.current)return;const x=new ResizeObserver(A=>{A.forEach(N=>{const{target:w}=N;if(!w.parentElement)return;const T=w.getBoundingClientRect();D(p,{left:T.left,top:T.top,width:T.width,height:T.height})})});x.observe(i.current);const O=(0,r.g$)(i.current);function C(A){if(i.current&&O.includes(A.target)){const N=i.current.getBoundingClientRect();D(p,{left:N.left,top:N.top,width:N.width,height:N.height})}}const{start:M,end:W}=(0,r.SQ)(C);return window.addEventListener("transitionend",W),window.addEventListener("transitionstart",M),()=>{i.current&&(x.unobserve(i.current),window.removeEventListener("transitionend",W),window.removeEventListener("transitionstart",M))}},[p]),e.createElement("div",{id:`withKeepAlive${p}`,ref:i,className:a.className,style:a.style})}}},18300:(y,P,t)=>{t.d(P,{g:()=>c});var e=t(14517),d=t(52983),_=t(38887);const c=d.memo(r=>{const{spinning:o=!1,className:E,style:f,tip:m}=r;return d.createElement("div",{className:(0,e.Z)("relative",E),style:f},d.createElement("div",{className:(0,e.Z)("absolute inset-0 z-10 bg-white bg-opacity-20 flex justify-center items-center transition-opacity duration-100",{"opacity-0 pointer-events-none":!o,"opacity-100":o})},d.createElement(_.T,{tip:m})),r.children)});c.displayName="Loading"},36932:(y,P,t)=>{t.d(P,{t:()=>v});var e=t(52983),d=t(18300),_=Object.defineProperty,c=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(s,n,a)=>n in s?_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,l=(s,n)=>{for(var a in n||(n={}))E.call(n,a)&&m(s,a,n[a]);if(o)for(var a of o(n))f.call(n,a)&&m(s,a,n[a]);return s},u=(s,n)=>c(s,r(n));const v=e.memo(s=>{const n=(0,e.useRef)(!1),a=(0,e.useMemo)(()=>n.current===!0?!1:(s.spinning===!0&&(n.current=!0),s.spinning),[s.spinning]);return e.createElement(d.g,u(l({},s),{spinning:a}),s.children)});v.displayName="LoadingOnFirst"},15333:(y,P,t)=>{t.d(P,{J:()=>c});var e=t(52983),d=t(65097),_=t(30831);const c=e.memo(r=>{var o;return e.createElement(d.Z,{description:(o=r.message)!=null?o:(0,_.t)("\u6CA1\u6709\u6570\u636E")})});c.displayName="NoData"},64939:(y,P,t)=>{t.d(P,{T:()=>c});var e=t(52983),d=t(65097),_=t(30831);const c=e.memo(r=>{var o;return e.createElement(d.Z,{description:(o=r.message)!=null?o:(0,_.t)("\u672A\u627E\u5230\u5185\u5BB9")})});c.displayName="NotFound"},87179:(y,P,t)=>{t.d(P,{x:()=>r});var e=t(58312),d=t(75526),_=t(52983),c=t(30831);const r=_.memo(o=>_.createElement(e.ZP,{className:"w-full",title:(0,c.t)("\u5F53\u524D\u9762\u677F\u5DF2\u5728\u72EC\u7ACB\u7A97\u53E3\u6253\u5F00"),extra:_.createElement(d.Z,{onClick:o.onClosePanelWindow},(0,c.t)("\u5173\u95ED\u72EC\u7ACB\u7A97\u53E3"))}));r.displayName="OpenedPanelTip"},712:(y,P,t)=>{t.d(P,{S:()=>f});var e=t(52983),d=t(1348),_=t(58761);const c=e.memo(m=>e.createElement(d.M,null,e.createElement("div",{className:"flex flex-wrap text-xl justify-between"},e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"text-gray-500 mr-1"},m.prefix),e.createElement("div",{className:"text-base"},m.children),e.createElement("div",{className:"ml-2"},m.suffix)),e.createElement(_.Z,null,m.actions))));c.displayName="PanelCommonHeader";var r=t(14517),o=t(89935),E=t(84143);const f=e.memo(m=>{const[l,u]=(0,e.useState)(),v=(0,o.d)();return e.createElement("div",{className:"w-full h-full flex",style:{minWidth:v&&!l?"calc(100vw - 72px)":0}},e.createElement("div",{className:"flex flex-col overflow-hidden flex-1"},e.createElement(c,{actions:m.actions&&m.actions({setRightPanel:u})},m.header),e.createElement("div",{className:"flex-1 overflow-hidden"},m.children)),e.createElement("div",{className:(0,r.Z)("transition-all overflow-hidden border-l border-black border-opacity-20 flex flex-col",{"w-96 mobile:w-full":l,"w-0":!l})},e.createElement(c,{actions:[e.createElement(E.a,{key:"close",shape:"square",icon:"mdi:close",iconClassName:"text-2xl",onClick:()=>u(void 0)})]},l==null?void 0:l.name),e.createElement("div",{className:"flex-1 overflow-y-auto"},l==null?void 0:l.panel)))});f.displayName="CommonPanelWrapper"},29188:(y,P,t)=>{t.d(P,{q:()=>m});var e=t(84143),d=t(52983),_=t(30831),c=t(712),r=t(14698),o=t.n(r),E=t(103),f=t(87179);const m=d.memo(l=>{const{groupId:u,panelId:v}=l,s=(0,_.wY6)(u,v),{hasOpenedPanel:n,openPanelWindow:a,closePanelWindow:i}=(0,E.l)(`/panel/group/${u}/${v}`);return o()(s)?null:n?d.createElement(f.x,{onClosePanelWindow:i}):d.createElement(c.S,{header:s.name,actions:I=>{var g,h,D,p;return[...(h=(g=l.prefixActions)==null?void 0:g.call(l,I))!=null?h:[],d.createElement(e.a,{key:"open",title:(0,_.t)("\u5728\u65B0\u7A97\u53E3\u6253\u5F00"),shape:"square",icon:"mdi:dock-window",iconClassName:"text-2xl",onClick:a}),...(p=(D=l.suffixActions)==null?void 0:D.call(l,I))!=null?p:[]]}},l.children)});m.displayName="GroupPanelWithHeader"},83667:(y,P,t)=>{t.d(P,{N:()=>v,c:()=>s});var e=t(2496),d=t(52983),_=Object.defineProperty,c=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(n,a,i)=>a in n?_(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,l=(n,a)=>{for(var i in a||(a={}))E.call(a,i)&&m(n,i,a[i]);if(o)for(var i of o(a))f.call(a,i)&&m(n,i,a[i]);return n},u=(n,a)=>c(n,r(a));const v=d.memo(n=>d.createElement(e.Z,u(l({},n),{className:"pill-tabs",type:"card",animated:!1}),n.children));v.displayName="PillTabs";const s=e.Z.TabPane},1348:(y,P,t)=>{t.d(P,{M:()=>r});var e=t(52983),d=t(96136),_=t(93540),c=t(14517);const r=e.memo(o=>{const[E,f]=(0,e.useState)(!1);return e.createElement("div",{className:"h-12 relative flex items-center py-0 text-base font-bold flex-shrink-0 thin-line-bottom"},o.menu?e.createElement(d.Z,{className:"overflow-hidden",onOpenChange:f,menu:o.menu,placement:"topRight",trigger:["click"]},e.createElement("div",{className:"cursor-pointer flex flex-1","data-testid":o["data-testid"]},e.createElement("header",{className:"flex-1 truncate px-4"},o.children),e.createElement(_.JO,{className:(0,c.Z)("text-2xl transition-transform transform",{"rotate-180":E}),icon:"mdi:chevron-down"},"\uE60F"))):e.createElement("header",{className:"flex-1 truncate px-4 select-text","data-testid":o["data-testid"]},o.children))});r.displayName="SectionHeader"},3856:(y,P,t)=>{t.d(P,{u:()=>m});var e=t(52983),d=t(13546),_=t.n(d),c=t(30831),r=t(14517);const o=l=>e.createElement("div",{className:(0,r.Z)("rounded-sm px-1.5 py-2.5 mb-1 text-gray-700 dark:text-gray-300 cursor-pointer  hover:bg-black hover:bg-opacity-10 hover:text-gray-800 dark:hover:text-gray-200",{"bg-black bg-opacity-10 text-gray-900 dark:text-white":l.active,"text-red-500":l.isDanger}),style:{width:192,lineHeight:"20px"},onClick:l.onClick},l.children),E=e.createContext(null);E.displayName="SidebarViewContext";const f=e.memo(l=>{const{menu:u}=l,v=(0,e.useContext)(E);if(!v)return null;const{content:s,setContent:n}=v;if(u.type==="group")return e.createElement("div",{className:"pb-2.5 mb-2.5 border-b last:border-0"},e.createElement("div",{className:"px-1.5 py-2.5 pt-0 text-xs font-bold uppercase"},u.title),e.createElement("div",null,u.children.map((a,i)=>e.createElement(f,{key:i,menu:a}))));if(u.type==="item"){if(u.hidden===!0)return null;const a=e.createElement(o,{active:s===u.content,onClick:()=>n(u.content)},u.title);return u.isDev===!0?e.createElement(c.AKk,null,a):e.createElement("div",null,a)}else if(u.type==="link")return e.createElement("div",null,e.createElement(o,{isDanger:u.isDanger,onClick:u.onClick},u.title));return null});f.displayName="SidebarViewMenuItem";const m=e.memo(l=>{const{menu:u,defaultContentPath:v="0.children.0.content"}=l,[s,n]=(0,e.useState)(_()(u,v,null));return e.createElement(E.Provider,{value:{content:s,setContent:n}},e.createElement("div",{className:"flex w-full h-full mobile:flex-col mobile:overflow-auto"},e.createElement("div",{className:"bg-black bg-opacity-10 flex flex-col justify-start items-end py-20 px-2.5 mobile:items-start mobile:py-10 text-sm",style:{flex:"1 0 218px"}},u.map((a,i)=>e.createElement(f,{key:i,menu:a}))),e.createElement("div",{className:"pt-24 pb-20 px-10 mobile:pt-10 mobile:px-2 desktop:overflow-auto",style:{flex:"1 1 800px"}},s)))});m.displayName="SidebarView"},7013:(y,P,t)=>{t.d(P,{a:()=>c});var e=t(52983),d=t(93540),_=t(89925);const c=e.memo(({content:r})=>e.createElement(_.a,{overlay:r},e.createElement(d.JO,{icon:"mdi:alert-circle-outline",className:"cursor-help"})));c.displayName="TipIcon"},66559:(y,P,t)=>{t.d(P,{V:()=>_,v:()=>c});var e=t(52983),d=t(30831);const _=e.memo(o=>{var E;const{userId:f,showDiscriminator:m,className:l,style:u,fallbackName:v}=o,s=(0,d.xzJ)(f);return e.createElement("span",{className:l,style:u},(E=s.nickname)!=null?E:(0,d.YQu)(v)?v:e.createElement("span",null,"\xA0"),m&&e.createElement(r,{discriminator:s.discriminator}))});_.displayName="UserNamePure";const c=e.memo(o=>{var E;const{userId:f,showDiscriminator:m,className:l,style:u,fallbackName:v}=o,s=(0,d.xzJ)(f),n=(0,d.TQq)(f);return e.createElement("span",{className:l,style:u},n?e.createElement(e.Fragment,null,n,e.createElement("span",{className:"opacity-60"},"(",s.nickname,")")):(E=s.nickname)!=null?E:(0,d.YQu)(v)?v:e.createElement("span",null,"\xA0"),m&&e.createElement(r,{discriminator:s.discriminator}))});c.displayName="UserName";const r=e.memo(({discriminator:o})=>e.createElement("span",{className:"text-gray-500 dark:text-gray-300 opacity-0 group-hover:opacity-100"},"#",o));r.displayName="UserNameDiscriminator"},103:(y,P,t)=>{t.d(P,{l:()=>f});let e=0;function d(m){return Object.entries(m).map(([l,u])=>`${l}=${u}`).join(",")}function _(m){const l=414,u=736,v=(window.screen.height-u)/2,s=(window.screen.width-l)/2;return window.open(m,`tailwindow#${e++}`,d({top:v,left:s,width:l,height:u,menubar:!1,toolbar:!1,location:!1,status:!1,resizable:!0}))}class c{constructor(){this.openedPanelWindows={}}open(l,u){if(this.openedPanelWindows[l]){this.openedPanelWindows[l].focus();return}const v=_(l);if(!v)return;const s=setInterval(()=>{v.closed&&(delete this.openedPanelWindows[l],clearInterval(s),typeof(u==null?void 0:u.onClose)=="function"&&(u==null||u.onClose()))},1e3);this.openedPanelWindows[l]=v}close(l){!this.openedPanelWindows[l]||(this.openedPanelWindows[l].close(),delete this.openedPanelWindows[l])}has(l){return!!this.openedPanelWindows[l]}}const r=new c;var o=t(52983),E=t(30831);function f(m){const l=(0,E.CGy)(n=>n.ui.panelWinUrls.includes(m)&&r.has(m)),u=(0,E.TL5)(),v=(0,o.useCallback)(()=>{r.open(m,{onClose(){u(E.AwB.deletePanelWindowUrl({url:m}))}}),u(E.AwB.addPanelWindowUrl({url:m}))},[m]),s=(0,o.useCallback)(()=>{r.close(m),u(E.AwB.deletePanelWindowUrl({url:m}))},[m]);return{hasOpenedPanel:l,openPanelWindow:v,closePanelWindow:s}}}}]);
