"use strict";(self.webpackChunktailchat_web=self.webpackChunktailchat_web||[]).push([[528],{7528:(E,v,h)=>{h.r(v),h.d(v,{start:()=>x});var l={},d={},p=0;function y(o){if(o instanceof HTMLElement&&!!o.dataset.source){var t=o.dataset.source;if(!l[t]){p++;var e=p.toString(36);l[t]=e,d[e]=t}var r=l[t];o.removeAttribute("data-source"),o.setAttribute("data-sr","".concat(r))}}function b(o){var t=d[o];return t?t.includes("://")?t:"vscode://file/"+d[o]:"(unknown)"}var m="__source-ref-selected",w="__source-ref-mask",k="__source-ref-close",B=function(){function o(t){var e=this;this.target=t,this.containerId="__source-ref-panel",this.focusBlock=null,this.path=[],this.initNodePath=function(r){for(var n=[],i=r;i!==document.body&&i instanceof HTMLElement;)i.dataset.sr&&n.push({sr:i.dataset.sr,node:i}),i=i.parentElement;e.path=n},this.setFocusBlock=function(r){if(r===null){e.focusBlock&&(document.body.removeChild(e.focusBlock),e.focusBlock=null);return}if(r instanceof HTMLElement){e.focusBlock||(e.focusBlock=document.createElement("div"),e.focusBlock.className=w,e.focusBlock.style.position="absolute",e.focusBlock.style.backgroundColor="rgba(134, 185, 242, 0.5)",document.body.appendChild(e.focusBlock));var n=r.getBoundingClientRect();e.focusBlock.style.height=n.height+"px",e.focusBlock.style.width=n.width+"px",e.focusBlock.style.left=n.left+"px",e.focusBlock.style.top=n.top+"px"}},this.close=function(){e.setFocusBlock(null),document.body.removeChild(e.getContainer())},this.getContainer=function(){var r=document.getElementById(e.containerId);if(r)return r;var n=document.createElement("div");n.id=e.containerId,document.body.appendChild(n),n.addEventListener("mouseover",function(c){var s=c.target;if(s instanceof HTMLElement&&s.dataset.sr){var a=e.path.find(function(L){return L.sr===s.dataset.sr});if(a){var g=a.node;g.classList.add(m),e.setFocusBlock(g)}}}),n.addEventListener("mouseout",function(c){var s=c.target;if(s instanceof HTMLElement&&s.dataset.sr){var a=document.querySelector('[data-sr="'.concat(s.dataset.sr,'"]'));a&&(a.classList.remove(m),e.setFocusBlock(null))}}),n.addEventListener("click",function(c){var s=c.target;s instanceof HTMLElement&&s.classList.contains(k)&&(c.stopPropagation(),e.close())});var i=function(c){c.key==="Escape"&&(c.stopPropagation(),e.close(),document.removeEventListener("keydown",i))};return document.addEventListener("keydown",i),n},this.renderHTML=function(){var r=e.checkTargetIsInBottom(),n=`
      <div style="
        position: fixed;
        background: white;
        `.concat(r?"top":"bottom",`: 0;
        left: 0;
        z-index: 9999;
        border-radius: `).concat(r?"0 0 10px 0":"0 10px 0 0",`;
        box-shadow: 0px 0 4px 0px;
        max-width: 90vw;
        max-height: 80vh;
        overflow: auto;
        padding: 10px;
      ">
        <div style="display: flex; align-items: center;">
          <div style="flex: 1;">SourceRef</div>
          <div style="
            cursor: pointer;
            text-align: right;
            font-size: 24px;
            line-height: 24px;
          " class="`).concat(k,`" title="Close(esc)">\xD7</div>
        </div>

        `).concat(e.path.map(function(c){var s=c.sr,a=b(s);return'<a href="'.concat(a,`" target="_blank" style="
              display: block;
              ling-height: 1.5em;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              direction: rtl;
              text-align: left;
            " data-sr="`).concat(s,'">source-ref: ').concat(a,"</a>")}).join(""),`

      </div>
    `),i=e.getContainer();i.innerHTML=n},this.initNodePath(t)}return o.prototype.checkTargetIsInBottom=function(){return this.target instanceof HTMLElement?this.target.getBoundingClientRect().y>window.innerHeight/2:!1},o}(),f=null,u=null;function x(){document.body.addEventListener("click",function(t){if(t.altKey){t.preventDefault(),t.stopPropagation(),u&&(u.close(),u=null);var e=new B(t.target);e.renderHTML(),u=e}},!0);var o=new MutationObserver(function(){f&&clearTimeout(f),f=window.setTimeout(function(){document.querySelectorAll("[data-source]").forEach(function(t){return y(t)})},400)});o.observe(document.body,{attributes:!0,childList:!0,subtree:!0})}}}]);
