if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"098b1fe73ef2bef63b53dbc152400f52"},{url:"assets/app.8baa6b9f.js",revision:null},{url:"assets/blog_dive_index.md.8939b9a3.js",revision:null},{url:"assets/blog_dive_index.md.8939b9a3.lean.js",revision:null},{url:"assets/blog_first.md.02e33c38.js",revision:null},{url:"assets/blog_first.md.02e33c38.lean.js",revision:null},{url:"assets/blog_misc_module.md.678b9fd3.js",revision:null},{url:"assets/blog_misc_module.md.678b9fd3.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.7e661e5a.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.7e661e5a.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.b2e41147.js",revision:null},{url:"assets/blog_resource_advanced.md.b2e41147.lean.js",revision:null},{url:"assets/blog_resource_basic.md.e220eec7.js",revision:null},{url:"assets/blog_resource_basic.md.e220eec7.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.bc823671.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.bc823671.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ece222fd.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ece222fd.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.728d2162.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.728d2162.lean.js",revision:null},{url:"assets/book_babel_1.md.f98a729f.js",revision:null},{url:"assets/book_babel_1.md.f98a729f.lean.js",revision:null},{url:"assets/book_babel_2.md.79cb572a.js",revision:null},{url:"assets/book_babel_2.md.79cb572a.lean.js",revision:null},{url:"assets/book_babel_3.md.df182189.js",revision:null},{url:"assets/book_babel_3.md.df182189.lean.js",revision:null},{url:"assets/book_babel_4.md.413075c1.js",revision:null},{url:"assets/book_babel_4.md.413075c1.lean.js",revision:null},{url:"assets/book_babel_5.md.39742818.js",revision:null},{url:"assets/book_babel_5.md.39742818.lean.js",revision:null},{url:"assets/book_babel_6.md.202d174f.js",revision:null},{url:"assets/book_babel_6.md.202d174f.lean.js",revision:null},{url:"assets/book_babel_index.md.df424099.js",revision:null},{url:"assets/book_babel_index.md.df424099.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.bbe2f6b7.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.bbe2f6b7.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.7d278480.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.7d278480.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.00678704.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.00678704.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.3c35587f.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.3c35587f.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.1c364948.js",revision:null},{url:"assets/book_patterns_module-system_index.md.1c364948.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.59aca84e.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.59aca84e.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.eadebd1c.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.eadebd1c.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.502bb4ba.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.502bb4ba.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.a1785bf7.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.a1785bf7.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.4185b80c.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.4185b80c.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.9df84688.js",revision:null},{url:"assets/book_patterns_the-module-system.md.9df84688.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.564ab1c2.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.564ab1c2.lean.js",revision:null},{url:"assets/book_vite_1.md.9674a8f5.js",revision:null},{url:"assets/book_vite_1.md.9674a8f5.lean.js",revision:null},{url:"assets/book_vite_10.md.44a4f09f.js",revision:null},{url:"assets/book_vite_10.md.44a4f09f.lean.js",revision:null},{url:"assets/book_vite_11.md.9e1af73a.js",revision:null},{url:"assets/book_vite_11.md.9e1af73a.lean.js",revision:null},{url:"assets/book_vite_12.md.1d06bd9e.js",revision:null},{url:"assets/book_vite_12.md.1d06bd9e.lean.js",revision:null},{url:"assets/book_vite_14.md.c4c96959.js",revision:null},{url:"assets/book_vite_14.md.c4c96959.lean.js",revision:null},{url:"assets/book_vite_15.md.dd2da4cc.js",revision:null},{url:"assets/book_vite_15.md.dd2da4cc.lean.js",revision:null},{url:"assets/book_vite_16.md.bcd55ae5.js",revision:null},{url:"assets/book_vite_16.md.bcd55ae5.lean.js",revision:null},{url:"assets/book_vite_17.md.657cd3fd.js",revision:null},{url:"assets/book_vite_17.md.657cd3fd.lean.js",revision:null},{url:"assets/book_vite_18.md.c05e5305.js",revision:null},{url:"assets/book_vite_18.md.c05e5305.lean.js",revision:null},{url:"assets/book_vite_19.md.c58d40a1.js",revision:null},{url:"assets/book_vite_19.md.c58d40a1.lean.js",revision:null},{url:"assets/book_vite_2.md.4795017d.js",revision:null},{url:"assets/book_vite_2.md.4795017d.lean.js",revision:null},{url:"assets/book_vite_3.md.285627f2.js",revision:null},{url:"assets/book_vite_3.md.285627f2.lean.js",revision:null},{url:"assets/book_vite_4.md.ec4be048.js",revision:null},{url:"assets/book_vite_4.md.ec4be048.lean.js",revision:null},{url:"assets/book_vite_7.md.1940a055.js",revision:null},{url:"assets/book_vite_7.md.1940a055.lean.js",revision:null},{url:"assets/book_vite_8.md.5e3d1191.js",revision:null},{url:"assets/book_vite_8.md.5e3d1191.lean.js",revision:null},{url:"assets/book_vite_9.md.b3600671.js",revision:null},{url:"assets/book_vite_9.md.b3600671.lean.js",revision:null},{url:"assets/book_webpack_1.md.079ab11e.js",revision:null},{url:"assets/book_webpack_1.md.079ab11e.lean.js",revision:null},{url:"assets/book_webpack_10.md.a8e7a24d.js",revision:null},{url:"assets/book_webpack_10.md.a8e7a24d.lean.js",revision:null},{url:"assets/book_webpack_11.md.a0d3adda.js",revision:null},{url:"assets/book_webpack_11.md.a0d3adda.lean.js",revision:null},{url:"assets/book_webpack_12.md.ce116209.js",revision:null},{url:"assets/book_webpack_12.md.ce116209.lean.js",revision:null},{url:"assets/book_webpack_13.md.ff2d958a.js",revision:null},{url:"assets/book_webpack_13.md.ff2d958a.lean.js",revision:null},{url:"assets/book_webpack_14.md.219abec7.js",revision:null},{url:"assets/book_webpack_14.md.219abec7.lean.js",revision:null},{url:"assets/book_webpack_15.md.5b934d64.js",revision:null},{url:"assets/book_webpack_15.md.5b934d64.lean.js",revision:null},{url:"assets/book_webpack_16.md.5d8b3c99.js",revision:null},{url:"assets/book_webpack_16.md.5d8b3c99.lean.js",revision:null},{url:"assets/book_webpack_17.md.fd9fd31f.js",revision:null},{url:"assets/book_webpack_17.md.fd9fd31f.lean.js",revision:null},{url:"assets/book_webpack_18.md.c990a523.js",revision:null},{url:"assets/book_webpack_18.md.c990a523.lean.js",revision:null},{url:"assets/book_webpack_2.md.ad41e3aa.js",revision:null},{url:"assets/book_webpack_2.md.ad41e3aa.lean.js",revision:null},{url:"assets/book_webpack_3.md.c7759312.js",revision:null},{url:"assets/book_webpack_3.md.c7759312.lean.js",revision:null},{url:"assets/book_webpack_index.md.91c25f75.js",revision:null},{url:"assets/book_webpack_index.md.91c25f75.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.067aa410.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.478efc10.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.455236a9.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.c538f101.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.4447401d.js",revision:null},{url:"assets/core_events_index.md.4447401d.lean.js",revision:null},{url:"assets/core_stream_index.md.fcec8ad5.js",revision:null},{url:"assets/core_stream_index.md.fcec8ad5.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.42b1c335.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.42b1c335.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.40246902.js",revision:null},{url:"assets/core_stream_stream-visualization.md.40246902.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.485dd70e.js",revision:null},{url:"assets/framework_express_index.md.485dd70e.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.3759c7f8.js",revision:null},{url:"assets/framework_nestjs_index.md.3759c7f8.lean.js",revision:null},{url:"assets/index.md.c83c2634.js",revision:null},{url:"assets/index.md.c83c2634.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.2bdbebef.js",revision:null},{url:"assets/lib_fs-extra_copy.md.2bdbebef.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.152afe66.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.152afe66.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.75694b37.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.75694b37.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.e9d741f4.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.e9d741f4.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.1aa666a5.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.1aa666a5.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.1c350a09.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.1c350a09.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.5bd79ba2.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.5bd79ba2.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.1a803718.js",revision:null},{url:"assets/lib_fs-extra_index.md.1a803718.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.ad3d9f8c.js",revision:null},{url:"assets/lib_fs-extra_move.md.ad3d9f8c.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.43f686e0.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.43f686e0.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.842db066.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.842db066.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.dad0c2ba.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.dad0c2ba.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.43bced85.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.43bced85.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.f0845cdb.js",revision:null},{url:"assets/lib_fs-extra_remove.md.f0845cdb.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.99d0bc0e.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.99d0bc0e.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.53d6d15c.js",revision:null},{url:"assets/manager_babel.md.53d6d15c.lean.js",revision:null},{url:"assets/manager_basic.md.3769b818.js",revision:null},{url:"assets/manager_basic.md.3769b818.lean.js",revision:null},{url:"assets/manager_recipe.md.2a16720c.js",revision:null},{url:"assets/manager_recipe.md.2a16720c.lean.js",revision:null},{url:"assets/manager_vite.md.38093015.js",revision:null},{url:"assets/manager_vite.md.38093015.lean.js",revision:null},{url:"assets/manager_webpack.md.63b9d410.js",revision:null},{url:"assets/manager_webpack.md.63b9d410.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.c3d03669.css",revision:null},{url:"assets/v18doc_File-System.md.e9d6634b.js",revision:null},{url:"assets/v18doc_File-System.md.e9d6634b.lean.js",revision:null},{url:"assets/v18doc_Path.md.607df8b3.js",revision:null},{url:"assets/v18doc_Path.md.607df8b3.lean.js",revision:null},{url:"blog/dive/index.html",revision:"6774727910a40b0ce6d37fa3184403f4"},{url:"blog/first.html",revision:"c654b665353b7d8b48f6c31862b997ac"},{url:"blog/misc/module.html",revision:"f64809ce1cbdc5fe33d7a1c38bf25651"},{url:"blog/misc/ts-and-express.html",revision:"bc285d12493df0c414b93331781397d6"},{url:"blog/resource/advanced.html",revision:"ae711043d5147a8d3a0cdc3d8f1375b1"},{url:"blog/resource/basic.html",revision:"a83836b4d8d6eaeee80dfff09f4f6803"},{url:"blog/translate/file-system-paths.html",revision:"54af40412b200e75be327ec1560c7000"},{url:"blog/translate/fs-in-node.html",revision:"f99604dd20906d6c2d158f854085105e"},{url:"blog/translate/web-streams-on-node.html",revision:"54b2b025bdd401dab10be65d57b96e18"},{url:"book/babel/1.html",revision:"ec05168c17d03d6fecda2b10161526f4"},{url:"book/babel/2.html",revision:"1945aa357b7d65e09a74e97c4644ed37"},{url:"book/babel/3.html",revision:"5ec25e46652c4bf4169e39a0f9e88002"},{url:"book/babel/4.html",revision:"90e02d47c6b782a3e80c4a4e2892bd68"},{url:"book/babel/5.html",revision:"6d04b9e76cfa31a1bdcfbca2d9a2b7f4"},{url:"book/babel/6.html",revision:"594fd657cdeb667a40f631e873a12cef"},{url:"book/babel/index.html",revision:"7cda0c630a890092edc96afda046124b"},{url:"book/patterns/callback-and-events.html",revision:"e704f9e31543d384c2be96b5eecd0df9"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"918175e147daa7e27fb4d066e23e0563"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"a2323c3c5849772bd160a1af0c30b508"},{url:"book/patterns/module-system/esm.html",revision:"d448a7656d671f00e44b9405c424e5dd"},{url:"book/patterns/module-system/index.html",revision:"b2765955e2c6ccf0ff89425f5a7c4654"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"4e60fa6c76daea584e7afe391941b002"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"ee8ad7b57981ac35b14c12a4ca231b17"},{url:"book/patterns/module-system/summary.html",revision:"2e405064d33e27d36338d1bcf0c398a2"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"c1cfcbb0dec36fc2fe94791feef61896"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"cf4335a7fa22e06e3cf317799c024651"},{url:"book/patterns/the-module-system.html",revision:"328466b2db2aba41450c190fe0acb315"},{url:"book/patterns/the-node-platform.html",revision:"c957350f72eaa691381d4c9275f4e457"},{url:"book/vite/1.html",revision:"74e99d2233ddf352d2466ab7c7e9673b"},{url:"book/vite/10.html",revision:"234cb294043af0be1984178372552d6f"},{url:"book/vite/11.html",revision:"693020248589d2d54a3d078528110300"},{url:"book/vite/12.html",revision:"0013c08fe810deb885ee6d4f5a14dccc"},{url:"book/vite/14.html",revision:"f21f036bd38d07ef9b8455f95ce1f895"},{url:"book/vite/15.html",revision:"80a358205821bd99fe4b518c51a91c89"},{url:"book/vite/16.html",revision:"73fd33b93103af696c106e530ff31533"},{url:"book/vite/17.html",revision:"3143ab39bedba882c97de38fa1c6b03e"},{url:"book/vite/18.html",revision:"f86b649134b732394356c88a6463da6e"},{url:"book/vite/19.html",revision:"3529a7632e91c893d7b0ee601dcd48d5"},{url:"book/vite/2.html",revision:"55dabf3d1f5cf141a9a71b30f4ad9de1"},{url:"book/vite/3.html",revision:"c366538f19402cc298d5d8dbccb2edbf"},{url:"book/vite/4.html",revision:"025dea89ce79de971c987b488c43d550"},{url:"book/vite/7.html",revision:"cfc65b9997fb727f62b51d422fc11d82"},{url:"book/vite/8.html",revision:"3885f99c805d9286de4b2eac658af36f"},{url:"book/vite/9.html",revision:"21dca2fb195a4952e4bccf31ba837c88"},{url:"book/webpack/1.html",revision:"a048ecb329e669b1ced44717770164d3"},{url:"book/webpack/10.html",revision:"26a1ee427875560658b814c9abfda254"},{url:"book/webpack/11.html",revision:"c4aa719fac11457990aa10321c011089"},{url:"book/webpack/12.html",revision:"76f442869c53e2e5504575f6742bb6eb"},{url:"book/webpack/13.html",revision:"9f5ef094596c001e4474bf6baaf99caa"},{url:"book/webpack/14.html",revision:"36fee82a4435c5c1fcb76329ec0572ec"},{url:"book/webpack/15.html",revision:"187c0e2cf519cb1bd8aa789215136e8d"},{url:"book/webpack/16.html",revision:"557f5042f5be26b93221dfd96011a92c"},{url:"book/webpack/17.html",revision:"51749334b260aa3f4cf99e55e20426d6"},{url:"book/webpack/18.html",revision:"4af75bb4c28ff25c3ef0f2607e109392"},{url:"book/webpack/2.html",revision:"c6cc624e6b2ef127a6862ccd84a6f761"},{url:"book/webpack/3.html",revision:"76bbffde428ee50f3d9e94ca0499e8cd"},{url:"book/webpack/index.html",revision:"cc8c09d2d33beb61de0fd1a27ef2c6dc"},{url:"core/events/index.html",revision:"490896811380fee18d0441a30a8f01e9"},{url:"core/stream/index.html",revision:"4c1502adb8e2b5fb66ba9732e4e1b074"},{url:"core/stream/stream-in-practice.html",revision:"0120b713a73c73058d707bb7ff781672"},{url:"core/stream/stream-visualization.html",revision:"18abef6979a2238584faf3e46c741240"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"f344f5640fd3c61196b9457d183bde6f"},{url:"framework/nestjs/index.html",revision:"e0b7d5983178193512955e94a3cb0eb2"},{url:"index.html",revision:"ea1fae51b453a91d5a1ce4bf5fd84851"},{url:"lib/fs-extra/copy.html",revision:"f2d0594f9972f1e7023841609ea8174b"},{url:"lib/fs-extra/emptyDir.html",revision:"78419e2fc7a6bf2f30f38e8500a446db"},{url:"lib/fs-extra/ensureDir.html",revision:"f40a37afac00d226a55e5450a71ca9a9"},{url:"lib/fs-extra/ensureFile.html",revision:"2abd50867cbfeb731063a2defad74163"},{url:"lib/fs-extra/ensureLink.html",revision:"42b460d4facb0a274ec3b450f676579c"},{url:"lib/fs-extra/ensureSymlink.html",revision:"2d2d2120a1baed7e055e85f6089ed0a4"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"8fbe69efa5eb34835c97bca9977a6f3e"},{url:"lib/fs-extra/index.html",revision:"e8e541891db484be63efe0d266091543"},{url:"lib/fs-extra/move.html",revision:"5a590605ac4fbd2f6c82a142938457aa"},{url:"lib/fs-extra/outputFile.html",revision:"654eaee92c3e39edc71e7e94fabb9bb7"},{url:"lib/fs-extra/outputJson.html",revision:"ceddd3ba021ce1f1e6d2c6d1285aa626"},{url:"lib/fs-extra/pathExists.html",revision:"33a5c1cb3e922fc968f8bfaa999cda4e"},{url:"lib/fs-extra/readJson.html",revision:"4db618b8bf83ff2342383580eef6a2bb"},{url:"lib/fs-extra/remove.html",revision:"5041db037c7ef2fbfde936e7e81975e9"},{url:"lib/fs-extra/writeJson.html",revision:"ff6e40dd0b6c7e86bee6dc41a79c7564"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"c40bd2916a02703a720666c451e52c20"},{url:"manager/basic.html",revision:"55d001f9ea87b773807500e287c82ce2"},{url:"manager/recipe.html",revision:"88464019b1b7eef6575e868adb157235"},{url:"manager/vite.html",revision:"3f4f291cc5750ac580dbd52592e8eb2c"},{url:"manager/webpack.html",revision:"311e49ee6218d27ae873c35ca15c70d7"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"9346b68798f93c2874aa83583b15f1df"},{url:"v18doc/Path.html",revision:"fe7fcf45465a354d646fb80967216dc5"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
