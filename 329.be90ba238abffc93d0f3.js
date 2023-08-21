"use strict";(self.webpackChunktailchat_web=self.webpackChunktailchat_web||[]).push([[329],{61500:(K,h,e)=>{e.d(h,{R$:()=>C,SH:()=>D,Ux:()=>p});var u=e(52983),f=e(54782),O=e(30831);const p=u.memo(d=>{const c=(0,f.useNavigate)();return u.createElement("div",{className:"absolute bottom-4 left-0 right-0 text-center"},u.createElement("div",{className:"shadow-lg px-6 py-2 rounded-full inline-block bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer",onClick:()=>{c(d.link)}},d.text))});p.displayName="JumpToButton";const D=u.memo(d=>{const c=`/main/group/${d.groupId}/${d.panelId}`;return u.createElement(p,{link:c,text:(0,O.t)("\u8DF3\u8F6C\u5230\u9762\u677F")})});D.displayName="JumpToGroupPanelButton";const C=u.memo(d=>{const c=d.groupId?`/main/group/${d.groupId}/${d.converseId}`:`/main/personal/converse/${d.converseId}`;return u.createElement(p,{link:c,text:(0,O.t)("\u8DF3\u8F6C\u5230\u4F1A\u8BDD")})});C.displayName="JumpToConverseButton"},59412:(K,h,e)=>{e.d(h,{U:()=>c});var u=e(72297),f=e(52983),O=e(30831),p=e(80474),D=e(93540),C=e(66175);const d=(0,p.P)(()=>Promise.all([e.e(594),e.e(20)]).then(e.bind(e,28020))),c=f.memo(({raw:T,baseUrl:A})=>{const B=(0,f.useCallback)(E=>(0,O.YQu)(A)?new URL(E,(0,u.W8)(A)).href:E,[A]),U=(0,f.useMemo)(()=>({img:E=>f.createElement(D.Ee,{src:E.src,preview:!0})}),[]);return f.createElement(d,{className:"tailchat-markdown",transformImageUri:E=>B(E),transformLinkUri:E=>B(E),remarkPlugins:[C.Z],linkTarget:"_blank",skipHtml:!0,components:U},T)});c.displayName="Markdown"},84165:(K,h,e)=>{e.r(h),e.d(h,{Avatar:()=>m.qE,BaseChatInputButton:()=>ce.L,Button:()=>f.Z,Card:()=>ue,Checkbox:()=>O.Z,CopyableText:()=>m.v$,DefaultFullModalInputEditorRender:()=>S.jo,DefaultFullModalTextAreaEditorRender:()=>S.lj,Divider:()=>p.Z,Emoji:()=>Ne.d,Empty:()=>B.Z,ErrorBoundary:()=>Be.S,ErrorView:()=>H.o,FullModalField:()=>S.LP,GroupExtraDataPanel:()=>b,GroupPanelContainer:()=>$.q,GroupPanelSelector:()=>ee,Icon:()=>m.JO,IconBtn:()=>L.a,Image:()=>m.Ee,Input:()=>u.Z,JumpToButton:()=>J.Ux,JumpToConverseButton:()=>J.R$,JumpToGroupPanelButton:()=>J.SH,Link:()=>me.rU,Loadable:()=>q.P,Loading:()=>W.g,LoadingOnFirst:()=>Ie.t,LoadingSpinner:()=>Ce.T,Markdown:()=>Ge.U,MarkdownEditor:()=>Ze,Menu:()=>C.Z,MessageAckContainer:()=>ve.H,ModalWrapper:()=>y.AB,NoData:()=>Ke.J,NotFound:()=>$e.T,PillTabPane:()=>k.c,PillTabs:()=>k.N,Popover:()=>U.Z,PortalAdd:()=>te.rk,PortalRemove:()=>te.i6,Problem:()=>V.t,SensitiveText:()=>m.PJ,SidebarView:()=>xe.u,Skeleton:()=>ie.Z,Space:()=>D.Z,Switch:()=>c.Z,Table:()=>d.Z,Tag:()=>E.Z,TextArea:()=>He,Tooltip:()=>T.Z,UserAvatar:()=>oe,UserName:()=>Se.v,WebFastForm:()=>m.Po,WebMetaForm:()=>m.Po,Webview:()=>G,WebviewKeepAlive:()=>le,closeModal:()=>y.Mr,createMetaFormSchema:()=>m._D,metaFormFieldSchema:()=>m._6,notification:()=>A.Z,openConfirmModal:()=>y._5,openModal:()=>y.h7,openReconfirmModal:()=>y.VW,useChatInputActionContext:()=>Ee.at,useModalContext:()=>y.vR,withKeepAliveOverlay:()=>Ve.A});var u=e(79546),f=e(75526),O=e(66990),p=e(75217),D=e(58761),C=e(3301),d=e(69104),c=e(44411),T=e(95268),A=e(43991),B=e(65097),U=e(20685),E=e(56489),ie=e(55696),m=e(93540),me=e(10330),ve=e(16365),ce=e(28723),Ee=e(29254),$=e(29188),fe=e(85478),r=e(52983),l=e(30831),V=e(6739),H=e(21597),W=e(18300),L=e(84143),y=e(84208),Pe=e(85466),pe=e.n(Pe),ye=Object.defineProperty,ge=Object.defineProperties,he=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,z=(t,a,n)=>a in t?ye(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,R=(t,a)=>{for(var n in a||(a={}))Oe.call(a,n)&&z(t,n,a[n]);if(X)for(var n of X(a))De.call(a,n)&&z(t,n,a[n]);return t},Q=(t,a)=>ge(t,he(a)),Y=(t,a,n)=>new Promise((o,i)=>{var P=s=>{try{g(n.next(s))}catch(N){i(N)}},v=s=>{try{g(n.throw(s))}catch(N){i(N)}},g=s=>s.done?o(s.value):Promise.resolve(s.value).then(P,v);g((n=n.apply(t,a)).next())});const w=r.memo(t=>{const{groupId:a,panelId:n,names:o}=t,[i,P]=(0,r.useReducer)(I=>I+1,0),{value:v={},loading:g,error:s}=(0,l.r53)(()=>Y(void 0,null,function*(){return(yield Promise.all(o.map(x=>l.o4J.ru.getGroupPanelExtraData(t.groupId,t.panelId,x).then(M=>({name:x,data:M}))))).reduce((x,M)=>Q(R({},x),{[M.name]:M.data}),{})}),[a,n,o,i]),[N]=(0,l.WHr)(a,[l.g3S.core.managePanel]),j=(0,r.useRef)(!1),Xe=(0,l.nWw)(()=>{const I=R({},v);if(!t.renderEdit){console.warn("[GroupExtraDataPanel] Please set renderEdit");return}const x=()=>Y(void 0,null,function*(){if(j.current===!0){(0,l.lHp)((0,l.t)("\u6B63\u5728\u4FDD\u5B58, \u8BF7\u7A0D\u540E"));return}pe()(I,v)||(j.current=!0,yield Promise.all(Object.entries(I).map(([M,ze])=>l.o4J.ru.saveGroupPanelExtraData(a,n,M,ze))),j.current=!1,P(),(0,l.jiy)())});(0,y.h7)(t.renderEdit(I),{onCloseModal:x})});return s?r.createElement(H.o,{error:s}):r.createElement($.q,{groupId:a,panelId:n,prefixActions:()=>N?[r.createElement(L.a,{key:"edit",title:(0,l.t)("\u7F16\u8F91"),shape:"square",icon:"mdi:square-edit-outline",iconClassName:"text-2xl",onClick:Xe})]:[]},r.createElement(W.g,{className:"h-full w-full",spinning:g},r.createElement("div",{className:"overflow-auto h-full"},t.render(v))))});w.displayName="GroupExtraDataPanelInner";const b=r.memo(t=>{const a=(0,fe.D)();return a===null?r.createElement(V.t,{text:(0,l.t)("\u7EC4\u4EF6\u53EA\u80FD\u5728\u7FA4\u7EC4\u9762\u677F\u4E2D\u624D\u80FD\u6B63\u5E38\u663E\u793A")}):r.createElement(w,Q(R({},t),{groupId:a.groupId,panelId:a.panelId}))});b.displayName="GroupExtraDataPanel";var k=e(83667),S=e(7606),q=e(80474),Ce=e(38887),Ie=e(36932),xe=e(3856),_=e(73246),Me=e(50842);const{Option:Ae}=_.Z,ee=r.memo(t=>{var a,n;const o=(0,Me.b)(),i=(a=t.groupId)!=null?a:o,P=(n=t.panelType)!=null?n:l.Xpe.TEXT,v=(0,l.Ew8)(i),g=(0,r.useMemo)(()=>v.filter(s=>s.type===P),[v,P]);return r.createElement(_.Z,{className:t.className,style:t.style,placeholder:(0,l.t)("\u8BF7\u9009\u62E9\u9762\u677F"),value:t.value,onChange:t.onChange},g.map(s=>r.createElement(Ae,{key:s.id,value:s.id},s.name)))});ee.displayName="GroupPanelSelector";var Ne=e(53652),te=e(442),Be=e(67706),Fe=Object.defineProperty,Te=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=(t,a,n)=>a in t?Fe(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,We=(t,a)=>{for(var n in a||(a={}))ae.call(a,n)&&re(t,n,a[n]);if(F)for(var n of F(a))ne.call(a,n)&&re(t,n,a[n]);return t},Le=(t,a)=>Te(t,Ue(a)),Re=(t,a)=>{var n={};for(var o in t)ae.call(t,o)&&a.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&F)for(var o of F(t))a.indexOf(o)<0&&ne.call(t,o)&&(n[o]=t[o]);return n};const oe=r.memo(t=>{const a=t,{userId:n}=a,o=Re(a,["userId"]),i=(0,l.xzJ)(n);return r.createElement(m.qE,Le(We({},o),{src:i.avatar,name:i.nickname}))});oe.displayName="UserAvatar";var Se=e(66559),Ge=e(59412);const Ze=(0,q.P)(()=>Promise.all([e.e(594),e.e(882),e.e(151)]).then(e.bind(e,98151)).then(t=>t.MarkdownEditor));var Je=e(13893);const G=t=>{const a=(0,r.useRef)(null),[n,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{var i;const P=()=>{o(!1)};return(i=a.current)==null||i.addEventListener("load",P),()=>{var v;(v=a.current)==null||v.removeEventListener("load",P)}},[]),r.createElement(W.g,{spinning:n,className:"w-full h-full",tip:(0,l.t)("\u52A0\u8F7D\u7F51\u9875\u4E2D...")},r.createElement("iframe",{ref:a,className:"w-full h-full",src:t.url}))};G.displayName="Webview";const le=(0,Je.A)(G,{cacheId:t=>t.url});le.displayName="WebviewKeepAlive";var je=e(74774);const Z=r.memo(t=>r.createElement("div",{className:"w-3/4"},r.createElement("div",{className:"max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden",style:{minWidth:240}},t.children)));Z.displayName="CardWrapper";const se=r.memo(t=>{var a;const n=(a=t.payload)!=null?a:{},o=(0,l.nWw)(()=>{(0,je.GR)(n.url,n.label)});return r.createElement(Z,null,r.createElement("div",{className:"flex w-full items-center"},r.createElement("div",{className:"mr-3 overflow-hidden flex-1"},r.createElement("div",{className:"flex text-lg items-center"},r.createElement(m.JO,{icon:"mdi:paperclip"}),r.createElement("span",{className:"ml-1"},(0,l.t)("\u6587\u4EF6"))),r.createElement("div",{className:"text-sm text-black text-opacity-60 dark:text-white dark:text-opacity-60"},n.label)),r.createElement(L.a,{title:(0,l.t)("\u4E0B\u8F7D"),icon:"mdi:cloud-download-outline",onClick:o})))});se.displayName="FileCard";var de=e(7975);const ue=r.memo(t=>{if(de.pluginCardItemMap[t.type]){const n=de.pluginCardItemMap[t.type].render;return r.createElement(n,{payload:t.payload})}return t.type==="file"?r.createElement(se,{payload:t.payload}):r.createElement(Z,null,(0,l.t)("\u672A\u77E5\u7684\u5361\u7247\u7C7B\u578B"))});ue.displayName="Card";var J=e(61500),Ke=e(15333),$e=e(64939),Ve=e(74312);const He=u.Z.TextArea}}]);
