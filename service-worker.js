if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const a=e=>l(e,r),u={module:{uri:r},exports:c,require:a};s[r]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5048be62"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/151.00a06c97436c92c965b5.js",revision:null},{url:"/175.eaf772e7b99557f6ddc3.js",revision:null},{url:"/195.670643f8d86bfa13a50d.js",revision:null},{url:"/20.74346ca71ba5832bd3d9.js",revision:null},{url:"/212.32fd097e1d8af293b21c.js",revision:null},{url:"/236.a3f78a40f5f37656199d.js",revision:null},{url:"/258.737ffdb51ed8be35919d.js",revision:null},{url:"/28.6609eb13ef66c5cb420e.js",revision:null},{url:"/329.be90ba238abffc93d0f3.js",revision:null},{url:"/36.741679bf714c4df7a354.js",revision:null},{url:"/528.ac69d20cfc6300fc3c90.js",revision:null},{url:"/538.65d05a13d61982b8ebaa.js",revision:null},{url:"/579.de13c3c70ec5c6b7f4ce.js",revision:null},{url:"/594.9bf4d7b82c9395bd0502.js",revision:null},{url:"/748.6839dd2a2eb17f25b799.js",revision:null},{url:"/86.47e2433dd8265a83de04.js",revision:null},{url:"/882.125b6e770d4a83badb62.js",revision:null},{url:"/899.02afbb5c04045b9649aa.js",revision:null},{url:"/app.437f0745b638f2cc2dd7.js",revision:null},{url:"/assets/bg.7550497.webp",revision:null},{url:"/entry.d08b989011c455bcc8b9.js",revision:null},{url:"/favicon.ico",revision:"60dc3b3d52a36c5020f6d8d37b23f612"},{url:"/images/avatar/github-color.webp",revision:"8e69e73409d758bc8fbf235e0a3c24f2"},{url:"/images/avatar/robot.webp",revision:"5f848d8f90c1926422dfd4f1a019556b"},{url:"/index.html",revision:"65b5623ce21327bc9b3749abda8d2ffd"},{url:"/invite.04eaaafc1cf7ac90cc3b.js",revision:null},{url:"/locales/en-US/translation.json",revision:"6ada55c1390c1637fdac0702c4a42a0c"},{url:"/locales/zh-CN/translation.json",revision:"2dbf4dfd1a402702527d515cf842a369"},{url:"/main.c3252196df987f0a57bd.js",revision:null},{url:"/pwa.webmanifest",revision:"5101aae51551dacba8f4e0b218a12b0d"},{url:"/registry.json",revision:"6c70f1eec59439a413a015388209ecfd"},{url:"/styles-14a4d95f970d5ef11ee9.css",revision:null},{url:"/styles-226f4825abc707fb1ef7.css",revision:null},{url:"/styles-4c555390ff983c87e876.css",revision:null},{url:"/styles-6abb608ed7bff9f90804.css",revision:null},{url:"/styles-cae6d88a200818a456b2.css",revision:null},{url:"/styles-cffed5362661d1d49c68.css",revision:null},{url:"/styles-e738542ab6491cf1d167.css",revision:null},{url:"/tailchat.manifest",revision:"e9c691e38c99db28d4eaf3a7a1091076"},{url:"/vendors-5f01b890.15b0c1badf70ee13038d.js",revision:null},{url:"/vendors-6575d636.f2c20ed478d4d9722f8e.js",revision:null},{url:"/vendors-734fce56.caf166ad5d2912f16e50.js",revision:null},{url:"/vercel.json",revision:"abd07d5b81e7d2c7029cc5611e1ec638"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:1209600})]}),"GET"),e.registerRoute(/plugins\/com\.msgbyte(.*?)\/index\.js/,new e.StaleWhileRevalidate({cacheName:"builtin-plugins-entry",plugins:[new e.ExpirationPlugin({maxAgeSeconds:86400}),new e.CacheableResponsePlugin({headers:{"content-type":"application/javascript; charset=utf-8"}})]}),"GET"),e.registerRoute(/plugins\/com\.msgbyte\.(.*?)\/(\S+?)\-(\S*?)\.js/,new e.StaleWhileRevalidate({cacheName:"builtin-plugins-detail",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800}),new e.CacheableResponsePlugin({headers:{"content-type":"application/javascript; charset=utf-8"}})]}),"GET")}));
