if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7a43ab6235ffb65c1fd23fac1201172f"},{url:"assets/app.6585a414.js",revision:null},{url:"assets/blog_dive_index.md.1f9fd6eb.js",revision:null},{url:"assets/blog_dive_index.md.1f9fd6eb.lean.js",revision:null},{url:"assets/blog_first.md.09eafac5.js",revision:null},{url:"assets/blog_first.md.09eafac5.lean.js",revision:null},{url:"assets/blog_misc_module.md.c2ea2578.js",revision:null},{url:"assets/blog_misc_module.md.c2ea2578.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.aa276f8c.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.aa276f8c.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.bc2e4adc.js",revision:null},{url:"assets/blog_resource_advanced.md.bc2e4adc.lean.js",revision:null},{url:"assets/blog_resource_basic.md.1a214c06.js",revision:null},{url:"assets/blog_resource_basic.md.1a214c06.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.a6fb21b1.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.a6fb21b1.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.705f1ad1.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.705f1ad1.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.1605d0ca.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.1605d0ca.lean.js",revision:null},{url:"assets/book_babel_1.md.fd2d7bd0.js",revision:null},{url:"assets/book_babel_1.md.fd2d7bd0.lean.js",revision:null},{url:"assets/book_babel_2.md.bdc019f8.js",revision:null},{url:"assets/book_babel_2.md.bdc019f8.lean.js",revision:null},{url:"assets/book_babel_3.md.1cd000d2.js",revision:null},{url:"assets/book_babel_3.md.1cd000d2.lean.js",revision:null},{url:"assets/book_babel_4.md.4e56863f.js",revision:null},{url:"assets/book_babel_4.md.4e56863f.lean.js",revision:null},{url:"assets/book_babel_5.md.3d4f4a47.js",revision:null},{url:"assets/book_babel_5.md.3d4f4a47.lean.js",revision:null},{url:"assets/book_babel_6.md.988cfac6.js",revision:null},{url:"assets/book_babel_6.md.988cfac6.lean.js",revision:null},{url:"assets/book_babel_index.md.4ae21c3c.js",revision:null},{url:"assets/book_babel_index.md.4ae21c3c.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.b84a52cb.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.b84a52cb.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.d58e3d94.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.d58e3d94.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.3bd8cf89.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.3bd8cf89.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.4204bf0d.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.4204bf0d.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.00506960.js",revision:null},{url:"assets/book_patterns_module-system_index.md.00506960.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.78aea281.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.78aea281.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.0166f0bc.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.0166f0bc.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.76c7b3b5.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.76c7b3b5.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.4b3531cb.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.4b3531cb.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.356a6576.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.356a6576.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.3cf669ae.js",revision:null},{url:"assets/book_patterns_the-module-system.md.3cf669ae.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.1805d0c4.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.1805d0c4.lean.js",revision:null},{url:"assets/book_vite_1.md.62ad9d99.js",revision:null},{url:"assets/book_vite_1.md.62ad9d99.lean.js",revision:null},{url:"assets/book_vite_10.md.94b279a0.js",revision:null},{url:"assets/book_vite_10.md.94b279a0.lean.js",revision:null},{url:"assets/book_vite_11.md.dbdb9af2.js",revision:null},{url:"assets/book_vite_11.md.dbdb9af2.lean.js",revision:null},{url:"assets/book_vite_12.md.5d8ed56e.js",revision:null},{url:"assets/book_vite_12.md.5d8ed56e.lean.js",revision:null},{url:"assets/book_vite_14.md.afa0e735.js",revision:null},{url:"assets/book_vite_14.md.afa0e735.lean.js",revision:null},{url:"assets/book_vite_15.md.7393935a.js",revision:null},{url:"assets/book_vite_15.md.7393935a.lean.js",revision:null},{url:"assets/book_vite_16.md.4bfbd572.js",revision:null},{url:"assets/book_vite_16.md.4bfbd572.lean.js",revision:null},{url:"assets/book_vite_17.md.c62a806f.js",revision:null},{url:"assets/book_vite_17.md.c62a806f.lean.js",revision:null},{url:"assets/book_vite_18.md.229e3017.js",revision:null},{url:"assets/book_vite_18.md.229e3017.lean.js",revision:null},{url:"assets/book_vite_19.md.4c4b81bb.js",revision:null},{url:"assets/book_vite_19.md.4c4b81bb.lean.js",revision:null},{url:"assets/book_vite_2.md.6a7ce4e8.js",revision:null},{url:"assets/book_vite_2.md.6a7ce4e8.lean.js",revision:null},{url:"assets/book_vite_3.md.de3a3acc.js",revision:null},{url:"assets/book_vite_3.md.de3a3acc.lean.js",revision:null},{url:"assets/book_vite_4.md.5d44cfc7.js",revision:null},{url:"assets/book_vite_4.md.5d44cfc7.lean.js",revision:null},{url:"assets/book_vite_7.md.2e3a9bad.js",revision:null},{url:"assets/book_vite_7.md.2e3a9bad.lean.js",revision:null},{url:"assets/book_vite_8.md.c23e7030.js",revision:null},{url:"assets/book_vite_8.md.c23e7030.lean.js",revision:null},{url:"assets/book_vite_9.md.daf74a2e.js",revision:null},{url:"assets/book_vite_9.md.daf74a2e.lean.js",revision:null},{url:"assets/book_webpack_1.md.31f13091.js",revision:null},{url:"assets/book_webpack_1.md.31f13091.lean.js",revision:null},{url:"assets/book_webpack_10.md.432f42d2.js",revision:null},{url:"assets/book_webpack_10.md.432f42d2.lean.js",revision:null},{url:"assets/book_webpack_11.md.58c36101.js",revision:null},{url:"assets/book_webpack_11.md.58c36101.lean.js",revision:null},{url:"assets/book_webpack_13.md.fa89613a.js",revision:null},{url:"assets/book_webpack_13.md.fa89613a.lean.js",revision:null},{url:"assets/book_webpack_15.md.e0333a68.js",revision:null},{url:"assets/book_webpack_15.md.e0333a68.lean.js",revision:null},{url:"assets/book_webpack_16.md.41d2ddd3.js",revision:null},{url:"assets/book_webpack_16.md.41d2ddd3.lean.js",revision:null},{url:"assets/book_webpack_2.md.3127b212.js",revision:null},{url:"assets/book_webpack_2.md.3127b212.lean.js",revision:null},{url:"assets/book_webpack_3.md.50be4f51.js",revision:null},{url:"assets/book_webpack_3.md.50be4f51.lean.js",revision:null},{url:"assets/book_webpack_index.md.c8119075.js",revision:null},{url:"assets/book_webpack_index.md.c8119075.lean.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.7812daa2.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.f0f59a04.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.7aa64f07.js",revision:null},{url:"assets/core_events_index.md.7aa64f07.lean.js",revision:null},{url:"assets/core_stream_index.md.4838a299.js",revision:null},{url:"assets/core_stream_index.md.4838a299.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.33d45bd7.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.33d45bd7.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.774d9db4.js",revision:null},{url:"assets/core_stream_stream-visualization.md.774d9db4.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.8dfda6c5.js",revision:null},{url:"assets/framework_express_index.md.8dfda6c5.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.2d68a237.js",revision:null},{url:"assets/framework_nestjs_index.md.2d68a237.lean.js",revision:null},{url:"assets/index.md.08b5552d.js",revision:null},{url:"assets/index.md.08b5552d.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.fd1f602e.js",revision:null},{url:"assets/lib_fs-extra_copy.md.fd1f602e.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.52257059.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.52257059.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.9a1578e7.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.9a1578e7.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.25b05437.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.25b05437.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.a4c4da30.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.a4c4da30.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.3bdc433c.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.3bdc433c.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.e71d0db4.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.e71d0db4.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.e9881e6d.js",revision:null},{url:"assets/lib_fs-extra_index.md.e9881e6d.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.fa2e7b53.js",revision:null},{url:"assets/lib_fs-extra_move.md.fa2e7b53.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.c68d8e5d.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.c68d8e5d.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.7face63b.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.7face63b.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.654794f3.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.654794f3.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.2a7ec3a3.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.2a7ec3a3.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.6de1ffb0.js",revision:null},{url:"assets/lib_fs-extra_remove.md.6de1ffb0.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.ae2315a4.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.ae2315a4.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.871c7783.js",revision:null},{url:"assets/manager_babel.md.871c7783.lean.js",revision:null},{url:"assets/manager_basic.md.0e68864a.js",revision:null},{url:"assets/manager_basic.md.0e68864a.lean.js",revision:null},{url:"assets/manager_recipe.md.4e03920c.js",revision:null},{url:"assets/manager_recipe.md.4e03920c.lean.js",revision:null},{url:"assets/manager_vite.md.cdcdc276.js",revision:null},{url:"assets/manager_vite.md.cdcdc276.lean.js",revision:null},{url:"assets/manager_webpack.md.5b39f06d.js",revision:null},{url:"assets/manager_webpack.md.5b39f06d.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.7aaf77d9.css",revision:null},{url:"assets/v18doc_File-System.md.94a17901.js",revision:null},{url:"assets/v18doc_File-System.md.94a17901.lean.js",revision:null},{url:"assets/v18doc_Path.md.ab487f60.js",revision:null},{url:"assets/v18doc_Path.md.ab487f60.lean.js",revision:null},{url:"blog/dive/index.html",revision:"11870d6f6f3044a664a51cb5e60ac1ad"},{url:"blog/first.html",revision:"7d10d5ffb12dd75947ffedad89d59ed4"},{url:"blog/misc/module.html",revision:"53e2690093be8b87c0fa49a974123bab"},{url:"blog/misc/ts-and-express.html",revision:"ae417c1c5aed776f5f1f263fdb300f1e"},{url:"blog/resource/advanced.html",revision:"77af758406467641adf128c51b30c026"},{url:"blog/resource/basic.html",revision:"f71e0840d8c346c6bd23e7a9c5d150d9"},{url:"blog/translate/file-system-paths.html",revision:"6741789aa32aca6c0c126db53107c633"},{url:"blog/translate/fs-in-node.html",revision:"574c47403249c7136179b8f872983723"},{url:"blog/translate/web-streams-on-node.html",revision:"a2f0d7b633034b9afddcd849ee38af5c"},{url:"book/babel/1.html",revision:"35bce19b21d3a2175b1a9e5743b866ed"},{url:"book/babel/2.html",revision:"c0be4c65d966779f3ed1bc0248782fd8"},{url:"book/babel/3.html",revision:"aa05508335ecc2a95846cfc4946196a5"},{url:"book/babel/4.html",revision:"fe25d1c920b33a95f3cf1ab20d937a57"},{url:"book/babel/5.html",revision:"14bfef98fa6f59e7d8c81af367733f2d"},{url:"book/babel/6.html",revision:"0ea4e35f8211c457266be51f52fa18d7"},{url:"book/babel/index.html",revision:"2826cf3febd8c8addc830d8aee0d5903"},{url:"book/patterns/callback-and-events.html",revision:"4d05209ed370ad4f264b2fa07a7aa508"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"01b14780ce0c126788720d7e38555250"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"13e176b2ef92fc8f0f6e05331bf22b50"},{url:"book/patterns/module-system/esm.html",revision:"fcee5efcb85a2e480692d30f638a28c2"},{url:"book/patterns/module-system/index.html",revision:"ea10cbf974b223ade5d32b859fe3a150"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"a5b52a2532f22843cd0de6a4062a4594"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"bf278188574c29afc9bc7a1887b25a32"},{url:"book/patterns/module-system/summary.html",revision:"d24f4c246e9e65063e2643f2f6b79db8"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"a4749b7df6509c8275a669c6463e7791"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"c5fc8660a380782defb4ecd6d71c420e"},{url:"book/patterns/the-module-system.html",revision:"b4f30db334f46a0ff3fbeb006a28ee59"},{url:"book/patterns/the-node-platform.html",revision:"d24044c94401e52985926058c0eebeaa"},{url:"book/vite/1.html",revision:"9d7ecec7dfd5cca109dca3f0d3083c3b"},{url:"book/vite/10.html",revision:"5d1c5b6dcfcbc223bfd0c296805ac1eb"},{url:"book/vite/11.html",revision:"c8778fb5d42217348788e47bca69cd08"},{url:"book/vite/12.html",revision:"1e6887fa5ddff95085f12e713c3a58cf"},{url:"book/vite/14.html",revision:"11c6fcd2237feb945198e13feab52132"},{url:"book/vite/15.html",revision:"460b11599b64ea7039dbcf75ff3d8982"},{url:"book/vite/16.html",revision:"26e2ce36eeb852f0d25e8309231a799c"},{url:"book/vite/17.html",revision:"0d717519c01e3f2eb1328b45b76924e9"},{url:"book/vite/18.html",revision:"0dbcf02d4a0071ea4e850e3595564a91"},{url:"book/vite/19.html",revision:"583b8e427354154b2b58e5b79066a009"},{url:"book/vite/2.html",revision:"d49a76b7a0003b496bfabc67765c2732"},{url:"book/vite/3.html",revision:"efb8fc270ccbc360ab7fedd0ae3f66b7"},{url:"book/vite/4.html",revision:"416cd1713f286803620caa9f96a1f9dd"},{url:"book/vite/7.html",revision:"8f3f6b02000dd1622fd34c3c66cff3bc"},{url:"book/vite/8.html",revision:"88c5c8bf4517eb79ca5de74dc94e299a"},{url:"book/vite/9.html",revision:"c6198130ce64dff0e220c33e0e47cb13"},{url:"book/webpack/1.html",revision:"f3f587a8e749a9baf2fba0ba34596989"},{url:"book/webpack/10.html",revision:"802c1e8655566df52027a082db74be25"},{url:"book/webpack/11.html",revision:"dabaf914face25d4cd4f21700d1cd5ed"},{url:"book/webpack/13.html",revision:"96bb7ea3990ab362d3da5a941f352b2f"},{url:"book/webpack/15.html",revision:"af3be3e95487064f9d32fe7eade05c74"},{url:"book/webpack/16.html",revision:"36b1f0d8c4bffb4fc8c92c7c28602de8"},{url:"book/webpack/2.html",revision:"6d8146bac1603cfaa48fecba12d78340"},{url:"book/webpack/3.html",revision:"70a14cce0fb12ed915195114ce234ee1"},{url:"book/webpack/index.html",revision:"685fada25e8d7925babe9859376b4cab"},{url:"core/events/index.html",revision:"c9b91528b58ec0972bfd07015d97bdd0"},{url:"core/stream/index.html",revision:"74dcf931972916ffc1d799400b37b7b2"},{url:"core/stream/stream-in-practice.html",revision:"e88713f206c48d1914127c01bf578afc"},{url:"core/stream/stream-visualization.html",revision:"856f6a84f2b01be8795ae0c3ac0f058a"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"290677350b0a104a6a5c1bd160a1f2ff"},{url:"framework/nestjs/index.html",revision:"1ca4c0d6d79893622cb9ce3bd1c2a216"},{url:"index.html",revision:"1e10a65dc2d79f7ee0dde8f80b7c862c"},{url:"lib/fs-extra/copy.html",revision:"daf814b94fbc0343213df90ecb9a169b"},{url:"lib/fs-extra/emptyDir.html",revision:"d025f62ad62b746d70d306e400658c6f"},{url:"lib/fs-extra/ensureDir.html",revision:"f984c6cb53b16bc020116f9e969f439e"},{url:"lib/fs-extra/ensureFile.html",revision:"1b10a8a2b4789b889cfa0ef0de5ed22f"},{url:"lib/fs-extra/ensureLink.html",revision:"03af0d5d1d7f6fee78c35940506419cb"},{url:"lib/fs-extra/ensureSymlink.html",revision:"0e0e597700ea24740564cf8791f05bd5"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"933e958acfb60fd6b898f2eeeaba370a"},{url:"lib/fs-extra/index.html",revision:"7dffb87c2ec37129cac0a1536a3ce9a4"},{url:"lib/fs-extra/move.html",revision:"d59a54ce885d71d3db26d1c1df922a3d"},{url:"lib/fs-extra/outputFile.html",revision:"ddd8a71094655c98ed2dbae9dffd9d65"},{url:"lib/fs-extra/outputJson.html",revision:"dd30dd22adeff9aaf305126e67426c5e"},{url:"lib/fs-extra/pathExists.html",revision:"b825437e85cc24a4411d9c9edc9a7206"},{url:"lib/fs-extra/readJson.html",revision:"73104b6653252092cf32d337a6635b5b"},{url:"lib/fs-extra/remove.html",revision:"08e955d2aca789db3963e22e69615bc0"},{url:"lib/fs-extra/writeJson.html",revision:"b43b6ae852bf9d63838e9c63e9b94a03"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"55a4ff8d2bf69a20b57f3d664a71b919"},{url:"manager/basic.html",revision:"b500c2187fad9d257fdcb6db9657a44a"},{url:"manager/recipe.html",revision:"8815070b152cd435f4a13402267853ac"},{url:"manager/vite.html",revision:"fdc26d398e2b6719ac365be8aee900a6"},{url:"manager/webpack.html",revision:"7027a392c6433e67b51d87fa18cf3a72"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"02ef6ae45dd9af7547fd67ee09d0e412"},{url:"v18doc/Path.html",revision:"c57292ec04d0a978388885b3d341b30e"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
