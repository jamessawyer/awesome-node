if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b31b0d3f9cca9221958e79623c211ba1"},{url:"assets/app.0051a3fc.js",revision:null},{url:"assets/blog_dive_index.md.baa20a88.js",revision:null},{url:"assets/blog_dive_index.md.baa20a88.lean.js",revision:null},{url:"assets/blog_first.md.4ac9c895.js",revision:null},{url:"assets/blog_first.md.4ac9c895.lean.js",revision:null},{url:"assets/blog_misc_module.md.b19bd85d.js",revision:null},{url:"assets/blog_misc_module.md.b19bd85d.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.59182803.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.59182803.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.8b16edcf.js",revision:null},{url:"assets/blog_resource_advanced.md.8b16edcf.lean.js",revision:null},{url:"assets/blog_resource_basic.md.32a3c3f3.js",revision:null},{url:"assets/blog_resource_basic.md.32a3c3f3.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.ee14cf7b.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.ee14cf7b.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ec0322e3.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ec0322e3.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.51946e67.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.51946e67.lean.js",revision:null},{url:"assets/book_babel_1.md.ffe60d6f.js",revision:null},{url:"assets/book_babel_1.md.ffe60d6f.lean.js",revision:null},{url:"assets/book_babel_2.md.9ecd3f2e.js",revision:null},{url:"assets/book_babel_2.md.9ecd3f2e.lean.js",revision:null},{url:"assets/book_babel_3.md.16241b75.js",revision:null},{url:"assets/book_babel_3.md.16241b75.lean.js",revision:null},{url:"assets/book_babel_4.md.9f0e3f05.js",revision:null},{url:"assets/book_babel_4.md.9f0e3f05.lean.js",revision:null},{url:"assets/book_babel_5.md.49ad81fc.js",revision:null},{url:"assets/book_babel_5.md.49ad81fc.lean.js",revision:null},{url:"assets/book_babel_6.md.fb4d2be0.js",revision:null},{url:"assets/book_babel_6.md.fb4d2be0.lean.js",revision:null},{url:"assets/book_babel_index.md.bc3e0dcd.js",revision:null},{url:"assets/book_babel_index.md.bc3e0dcd.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.c2b63db5.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.c2b63db5.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.096d23c0.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.096d23c0.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.6aee85d6.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.6aee85d6.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.c6d01a89.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.c6d01a89.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.d21e61e2.js",revision:null},{url:"assets/book_patterns_module-system_index.md.d21e61e2.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.64e5ce61.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.64e5ce61.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.e02ea116.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.e02ea116.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.6df8bf9d.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.6df8bf9d.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.f24d50ed.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.f24d50ed.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.93c3fece.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.93c3fece.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.6d725059.js",revision:null},{url:"assets/book_patterns_the-module-system.md.6d725059.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.f40b0d70.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.f40b0d70.lean.js",revision:null},{url:"assets/book_vite_1.md.5ebe0bf9.js",revision:null},{url:"assets/book_vite_1.md.5ebe0bf9.lean.js",revision:null},{url:"assets/book_vite_10.md.4202341c.js",revision:null},{url:"assets/book_vite_10.md.4202341c.lean.js",revision:null},{url:"assets/book_vite_11.md.46e3e55b.js",revision:null},{url:"assets/book_vite_11.md.46e3e55b.lean.js",revision:null},{url:"assets/book_vite_12.md.192ecc7c.js",revision:null},{url:"assets/book_vite_12.md.192ecc7c.lean.js",revision:null},{url:"assets/book_vite_14.md.ce726f96.js",revision:null},{url:"assets/book_vite_14.md.ce726f96.lean.js",revision:null},{url:"assets/book_vite_15.md.cff1486f.js",revision:null},{url:"assets/book_vite_15.md.cff1486f.lean.js",revision:null},{url:"assets/book_vite_16.md.386be96b.js",revision:null},{url:"assets/book_vite_16.md.386be96b.lean.js",revision:null},{url:"assets/book_vite_17.md.1cc2ec20.js",revision:null},{url:"assets/book_vite_17.md.1cc2ec20.lean.js",revision:null},{url:"assets/book_vite_18.md.6fbbe960.js",revision:null},{url:"assets/book_vite_18.md.6fbbe960.lean.js",revision:null},{url:"assets/book_vite_19.md.541bc0db.js",revision:null},{url:"assets/book_vite_19.md.541bc0db.lean.js",revision:null},{url:"assets/book_vite_2.md.367cfbbf.js",revision:null},{url:"assets/book_vite_2.md.367cfbbf.lean.js",revision:null},{url:"assets/book_vite_3.md.9a4b1665.js",revision:null},{url:"assets/book_vite_3.md.9a4b1665.lean.js",revision:null},{url:"assets/book_vite_4.md.612ce898.js",revision:null},{url:"assets/book_vite_4.md.612ce898.lean.js",revision:null},{url:"assets/book_vite_7.md.2e23c378.js",revision:null},{url:"assets/book_vite_7.md.2e23c378.lean.js",revision:null},{url:"assets/book_vite_8.md.0f3be93e.js",revision:null},{url:"assets/book_vite_8.md.0f3be93e.lean.js",revision:null},{url:"assets/book_vite_9.md.bea739e9.js",revision:null},{url:"assets/book_vite_9.md.bea739e9.lean.js",revision:null},{url:"assets/book_webpack_1.md.6abfdc1f.js",revision:null},{url:"assets/book_webpack_1.md.6abfdc1f.lean.js",revision:null},{url:"assets/book_webpack_10.md.2670c0cd.js",revision:null},{url:"assets/book_webpack_10.md.2670c0cd.lean.js",revision:null},{url:"assets/book_webpack_11.md.7eb0dbc3.js",revision:null},{url:"assets/book_webpack_11.md.7eb0dbc3.lean.js",revision:null},{url:"assets/book_webpack_12.md.d103244e.js",revision:null},{url:"assets/book_webpack_12.md.d103244e.lean.js",revision:null},{url:"assets/book_webpack_13.md.a4787790.js",revision:null},{url:"assets/book_webpack_13.md.a4787790.lean.js",revision:null},{url:"assets/book_webpack_14.md.827b88cf.js",revision:null},{url:"assets/book_webpack_14.md.827b88cf.lean.js",revision:null},{url:"assets/book_webpack_15.md.9e8010a9.js",revision:null},{url:"assets/book_webpack_15.md.9e8010a9.lean.js",revision:null},{url:"assets/book_webpack_16.md.9a5874bb.js",revision:null},{url:"assets/book_webpack_16.md.9a5874bb.lean.js",revision:null},{url:"assets/book_webpack_17.md.8fb1605b.js",revision:null},{url:"assets/book_webpack_17.md.8fb1605b.lean.js",revision:null},{url:"assets/book_webpack_18.md.ceccaf34.js",revision:null},{url:"assets/book_webpack_18.md.ceccaf34.lean.js",revision:null},{url:"assets/book_webpack_2.md.54425663.js",revision:null},{url:"assets/book_webpack_2.md.54425663.lean.js",revision:null},{url:"assets/book_webpack_3.md.e25d048c.js",revision:null},{url:"assets/book_webpack_3.md.e25d048c.lean.js",revision:null},{url:"assets/book_webpack_index.md.75004b18.js",revision:null},{url:"assets/book_webpack_index.md.75004b18.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.a03c7be4.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.478efc10.js",revision:null},{url:"assets/chunks/mark.f25438cf.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.a5da129f.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.044ef7d9.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.bea4a316.js",revision:null},{url:"assets/core_events_index.md.bea4a316.lean.js",revision:null},{url:"assets/core_stream_index.md.dd9a811f.js",revision:null},{url:"assets/core_stream_index.md.dd9a811f.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.f488a07d.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.f488a07d.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.2a496f25.js",revision:null},{url:"assets/core_stream_stream-visualization.md.2a496f25.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.9c72eee5.js",revision:null},{url:"assets/framework_express_index.md.9c72eee5.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.5dc02532.js",revision:null},{url:"assets/framework_nestjs_index.md.5dc02532.lean.js",revision:null},{url:"assets/index.md.8efb60f4.js",revision:null},{url:"assets/index.md.8efb60f4.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.1e328eef.js",revision:null},{url:"assets/lib_fs-extra_copy.md.1e328eef.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.2882d35e.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.2882d35e.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.41fd7a7e.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.41fd7a7e.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.3ae26172.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.3ae26172.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.399ecba9.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.399ecba9.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.684dd294.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.684dd294.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.eebd1722.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.eebd1722.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.65058389.js",revision:null},{url:"assets/lib_fs-extra_index.md.65058389.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.279612c0.js",revision:null},{url:"assets/lib_fs-extra_move.md.279612c0.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.1bd02f80.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.1bd02f80.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.faae60fe.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.faae60fe.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.481ca23f.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.481ca23f.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.9acb9289.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.9acb9289.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.a82f2736.js",revision:null},{url:"assets/lib_fs-extra_remove.md.a82f2736.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.24798038.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.24798038.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.6d9147ca.js",revision:null},{url:"assets/manager_babel.md.6d9147ca.lean.js",revision:null},{url:"assets/manager_basic.md.c72b91d0.js",revision:null},{url:"assets/manager_basic.md.c72b91d0.lean.js",revision:null},{url:"assets/manager_recipe.md.27e47470.js",revision:null},{url:"assets/manager_recipe.md.27e47470.lean.js",revision:null},{url:"assets/manager_vite.md.cd159310.js",revision:null},{url:"assets/manager_vite.md.cd159310.lean.js",revision:null},{url:"assets/manager_webpack.md.c59f0274.js",revision:null},{url:"assets/manager_webpack.md.c59f0274.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.912f4b70.css",revision:null},{url:"assets/v18doc_File-System.md.a046fae9.js",revision:null},{url:"assets/v18doc_File-System.md.a046fae9.lean.js",revision:null},{url:"assets/v18doc_Path.md.f10c4672.js",revision:null},{url:"assets/v18doc_Path.md.f10c4672.lean.js",revision:null},{url:"blog/dive/index.html",revision:"b5417d6c0d5aaee30e7e14ec67eccd3a"},{url:"blog/first.html",revision:"cc491113d19af259ed5f88ce15c84c8c"},{url:"blog/misc/module.html",revision:"19fe83366b41b4a7bf6fbb2b0ad89917"},{url:"blog/misc/ts-and-express.html",revision:"86fa8d382ce3c3ab02c875e3299d1516"},{url:"blog/resource/advanced.html",revision:"fe0ac8699e4022ee3b963f19c7f6fe21"},{url:"blog/resource/basic.html",revision:"a62a40b59d2ee581ca18d5ec7169dceb"},{url:"blog/translate/file-system-paths.html",revision:"572cca7d4c822029ea75f64e838e3105"},{url:"blog/translate/fs-in-node.html",revision:"2604cb5a0706287351dcb3938af70292"},{url:"blog/translate/web-streams-on-node.html",revision:"b8e847c7f2867ed07132f16519533c03"},{url:"book/babel/1.html",revision:"ab0d77d1d80128497ae86399e2a6d926"},{url:"book/babel/2.html",revision:"1f02226fd6e44721d2dc2aef68818bf0"},{url:"book/babel/3.html",revision:"8942ea0e40e7bf53d31b6094517bc4f3"},{url:"book/babel/4.html",revision:"cc5b86c638d629b438c8da431c434823"},{url:"book/babel/5.html",revision:"63392bb15597a440c2855a7f4413f59b"},{url:"book/babel/6.html",revision:"b75f5f304a51bc20182016f1faef0845"},{url:"book/babel/index.html",revision:"0129db6bda09cb3944c95e484346031d"},{url:"book/patterns/callback-and-events.html",revision:"d8fb4c3ca3287b2a57d786eab616a3e6"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"090cdedd6655c472b1d951f75a9157c0"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"30f5f5ed726f2cffaf8e3ccd814f0525"},{url:"book/patterns/module-system/esm.html",revision:"d1cc794405b830e9160614e3726335ed"},{url:"book/patterns/module-system/index.html",revision:"d15e653d6deef382c0abbfa3a9a5b015"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"2a7b80a22e9c381b1676dfe45cd3ed42"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"e2dada4647dc8c63b3ce395ab288939e"},{url:"book/patterns/module-system/summary.html",revision:"648ae7adffdd64de129e4abae91363c2"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"7ba7efd85a19de39c5cd5efbbfc7fd4c"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"fe84c6b433c2e350a085945ecd51f16a"},{url:"book/patterns/the-module-system.html",revision:"17a3d23ead1112dcf295382ac02d416e"},{url:"book/patterns/the-node-platform.html",revision:"ecc9e8237845b1417a58c3e52fe1b10b"},{url:"book/vite/1.html",revision:"51ca068db834945fd57f95213b872c4a"},{url:"book/vite/10.html",revision:"61c9c283a3b23f24dc10ab43c2cc42de"},{url:"book/vite/11.html",revision:"65d1c646cc2f0626ca3c10ea242fa568"},{url:"book/vite/12.html",revision:"a0f49535c002b2471c97a46e0f57ff78"},{url:"book/vite/14.html",revision:"bc7ce895fa159f48230c82f2b2b49f38"},{url:"book/vite/15.html",revision:"aa1c35d953526861a7b7400784aa0518"},{url:"book/vite/16.html",revision:"89b4d1187c7d3bf543e46e9155703c70"},{url:"book/vite/17.html",revision:"e8a5ce9d581ab9ccaf36b442472ee4fd"},{url:"book/vite/18.html",revision:"d3a900ad6f8f1501cea229399db88654"},{url:"book/vite/19.html",revision:"51f68e27854b360d58d83e802218f58f"},{url:"book/vite/2.html",revision:"91f05d3f1d9c30c5974b8c9d4ea869a1"},{url:"book/vite/3.html",revision:"a577466fe19906a9102bd63791107892"},{url:"book/vite/4.html",revision:"ab4ec9a1fa7c52f25840716b5f6ce04d"},{url:"book/vite/7.html",revision:"8c0f16492e2cd11d611a92175bfd429b"},{url:"book/vite/8.html",revision:"57b916d43eda8044942c5c9e47ad81e4"},{url:"book/vite/9.html",revision:"e077679123ddb523c8f78e268c6487a3"},{url:"book/webpack/1.html",revision:"bea308e768a40b95799faa658d4a5d32"},{url:"book/webpack/10.html",revision:"5c669d65afa955e9aae9ea1a71a7eb67"},{url:"book/webpack/11.html",revision:"efa1627e457c1c98d10391deee47e7df"},{url:"book/webpack/12.html",revision:"360e65e68674eb1b0bee6f0019b673a3"},{url:"book/webpack/13.html",revision:"084ddca17c99ec0c15131131cdf2c9b1"},{url:"book/webpack/14.html",revision:"545e7a2fe8bfa4debb90a032ef5811ab"},{url:"book/webpack/15.html",revision:"cc4714b32775f3c05915f225045b593c"},{url:"book/webpack/16.html",revision:"b1381c902a9372ad476ea882765c3cd7"},{url:"book/webpack/17.html",revision:"0eac2ce644b18a4b432880336afa6e42"},{url:"book/webpack/18.html",revision:"9b9a19737e02dd7ebf7c1ef1a2e429b5"},{url:"book/webpack/2.html",revision:"1282e0039516d90a37a7c28187d391d3"},{url:"book/webpack/3.html",revision:"d8dcd4b304f8e813e862a72491bd5fdc"},{url:"book/webpack/index.html",revision:"4bcfd46e64ff7c5252479d123456390e"},{url:"core/events/index.html",revision:"41b7251d8a45267d1b565277a2947530"},{url:"core/stream/index.html",revision:"1534b443d4e4ecc09a45922e8de7ab05"},{url:"core/stream/stream-in-practice.html",revision:"a72c10aac0eb02640baaf076eb0b5137"},{url:"core/stream/stream-visualization.html",revision:"3a298fa013804ff89f7a87329922fa67"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"af3818281c7a3fd3de9705b04399ac7b"},{url:"framework/nestjs/index.html",revision:"5809ddfe70794a834ea9041d45f7e4bf"},{url:"index.html",revision:"8fa42d4947f051cbec93e3741010d8bc"},{url:"lib/fs-extra/copy.html",revision:"9973da481e43adb740e7f15723fe1c95"},{url:"lib/fs-extra/emptyDir.html",revision:"3089d2600b457c3615f8708cdd3afc09"},{url:"lib/fs-extra/ensureDir.html",revision:"d04be40e5679a492290c1307d3ec2808"},{url:"lib/fs-extra/ensureFile.html",revision:"cc8209814bb1d0e1e6bcf2e9daf7e039"},{url:"lib/fs-extra/ensureLink.html",revision:"0ce119a3476533d1ba8ca12ddddfee63"},{url:"lib/fs-extra/ensureSymlink.html",revision:"c78cf748220a634134d74a843fb4c8a5"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"dbaeffbdd16b513dab0c80cb9e32cebe"},{url:"lib/fs-extra/index.html",revision:"74112707676a97df44a7fe003ab82a11"},{url:"lib/fs-extra/move.html",revision:"096dd23ff5f76f5905a6ded2e0a5ab7c"},{url:"lib/fs-extra/outputFile.html",revision:"ba01adf560ed59cd225a0fc9080ec90b"},{url:"lib/fs-extra/outputJson.html",revision:"5933f6ab9ec904e95717df5d98dfa18d"},{url:"lib/fs-extra/pathExists.html",revision:"7cc49aa76fe4ad33e63512328ed5683a"},{url:"lib/fs-extra/readJson.html",revision:"5e42b111f76bacd9b4ad525dc002b31d"},{url:"lib/fs-extra/remove.html",revision:"2b0d4d21c151a531f82428e2fe2d8d27"},{url:"lib/fs-extra/writeJson.html",revision:"491ee32cec0cdf9c47287215f4107bdb"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"beb126f889be9d07ccba5ae320e31860"},{url:"manager/basic.html",revision:"b681481becc806f4c1367fb70e950ad2"},{url:"manager/recipe.html",revision:"ed089f7c6096ca210161e05f1b3c16e5"},{url:"manager/vite.html",revision:"c35a423625f714447e54183b918db9cb"},{url:"manager/webpack.html",revision:"64668defa5e04bb610f2709ab532914c"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"39f6cfe5cdecf87e51748f342bde8bf6"},{url:"v18doc/Path.html",revision:"8506b9280424308581677ab6d0009964"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
