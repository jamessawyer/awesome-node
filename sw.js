if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const o=e=>l(e,a),t={module:{uri:a},exports:n,require:o};s[a]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"448daa049e0a2404bb55a788f9dd23a4"},{url:"assets/app.a4f21f64.js",revision:null},{url:"assets/blog_dive_index.md.29902ff6.js",revision:null},{url:"assets/blog_dive_index.md.29902ff6.lean.js",revision:null},{url:"assets/blog_first.md.47b541aa.js",revision:null},{url:"assets/blog_first.md.47b541aa.lean.js",revision:null},{url:"assets/blog_misc_module.md.0ccaf0dc.js",revision:null},{url:"assets/blog_misc_module.md.0ccaf0dc.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.88fb2477.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.88fb2477.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.e48103c3.js",revision:null},{url:"assets/blog_resource_advanced.md.e48103c3.lean.js",revision:null},{url:"assets/blog_resource_basic.md.285c692d.js",revision:null},{url:"assets/blog_resource_basic.md.285c692d.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.479b095f.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.479b095f.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.05bac132.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.05bac132.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.036cceee.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.036cceee.lean.js",revision:null},{url:"assets/book_babel_1.md.bf8ebc3b.js",revision:null},{url:"assets/book_babel_1.md.bf8ebc3b.lean.js",revision:null},{url:"assets/book_babel_2.md.1700e97b.js",revision:null},{url:"assets/book_babel_2.md.1700e97b.lean.js",revision:null},{url:"assets/book_babel_3.md.e3dcf1ba.js",revision:null},{url:"assets/book_babel_3.md.e3dcf1ba.lean.js",revision:null},{url:"assets/book_babel_4.md.fc9a8279.js",revision:null},{url:"assets/book_babel_4.md.fc9a8279.lean.js",revision:null},{url:"assets/book_babel_5.md.86857b7d.js",revision:null},{url:"assets/book_babel_5.md.86857b7d.lean.js",revision:null},{url:"assets/book_babel_index.md.65f6f2b6.js",revision:null},{url:"assets/book_babel_index.md.65f6f2b6.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.b00b63cd.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.b00b63cd.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.d8fbc5df.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.d8fbc5df.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.732fe5ff.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.732fe5ff.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.d9104461.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.d9104461.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.1312f9cc.js",revision:null},{url:"assets/book_patterns_module-system_index.md.1312f9cc.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.3f6276d6.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.3f6276d6.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.877006b8.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.877006b8.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.d9fbcbf1.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.d9fbcbf1.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.d88ed807.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.d88ed807.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.c9f31993.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.c9f31993.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.29f95c79.js",revision:null},{url:"assets/book_patterns_the-module-system.md.29f95c79.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.ed1c5fe7.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.ed1c5fe7.lean.js",revision:null},{url:"assets/book_vite_1.md.9fc35a8f.js",revision:null},{url:"assets/book_vite_1.md.9fc35a8f.lean.js",revision:null},{url:"assets/book_vite_10.md.ab739d3b.js",revision:null},{url:"assets/book_vite_10.md.ab739d3b.lean.js",revision:null},{url:"assets/book_vite_11.md.2a52347f.js",revision:null},{url:"assets/book_vite_11.md.2a52347f.lean.js",revision:null},{url:"assets/book_vite_12.md.a002d54e.js",revision:null},{url:"assets/book_vite_12.md.a002d54e.lean.js",revision:null},{url:"assets/book_vite_14.md.51abb2ec.js",revision:null},{url:"assets/book_vite_14.md.51abb2ec.lean.js",revision:null},{url:"assets/book_vite_15.md.d6971dce.js",revision:null},{url:"assets/book_vite_15.md.d6971dce.lean.js",revision:null},{url:"assets/book_vite_16.md.74698fed.js",revision:null},{url:"assets/book_vite_16.md.74698fed.lean.js",revision:null},{url:"assets/book_vite_17.md.735885d5.js",revision:null},{url:"assets/book_vite_17.md.735885d5.lean.js",revision:null},{url:"assets/book_vite_18.md.aff8682d.js",revision:null},{url:"assets/book_vite_18.md.aff8682d.lean.js",revision:null},{url:"assets/book_vite_19.md.06f7e6e5.js",revision:null},{url:"assets/book_vite_19.md.06f7e6e5.lean.js",revision:null},{url:"assets/book_vite_2.md.607483ab.js",revision:null},{url:"assets/book_vite_2.md.607483ab.lean.js",revision:null},{url:"assets/book_vite_3.md.c6951cd8.js",revision:null},{url:"assets/book_vite_3.md.c6951cd8.lean.js",revision:null},{url:"assets/book_vite_4.md.3fa3f5b6.js",revision:null},{url:"assets/book_vite_4.md.3fa3f5b6.lean.js",revision:null},{url:"assets/book_vite_7.md.4f7571ee.js",revision:null},{url:"assets/book_vite_7.md.4f7571ee.lean.js",revision:null},{url:"assets/book_vite_8.md.1a467669.js",revision:null},{url:"assets/book_vite_8.md.1a467669.lean.js",revision:null},{url:"assets/book_vite_9.md.16408ea0.js",revision:null},{url:"assets/book_vite_9.md.16408ea0.lean.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.7812daa2.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.1af457ef.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.127a7765.js",revision:null},{url:"assets/core_events_index.md.127a7765.lean.js",revision:null},{url:"assets/core_stream_index.md.31d6fafe.js",revision:null},{url:"assets/core_stream_index.md.31d6fafe.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.f2d1dc3f.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.f2d1dc3f.lean.js",revision:null},{url:"assets/core_stream_stream-visulization.md.d5388329.js",revision:null},{url:"assets/core_stream_stream-visulization.md.d5388329.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.8c2e2bc4.js",revision:null},{url:"assets/framework_express_index.md.8c2e2bc4.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.d369894a.js",revision:null},{url:"assets/framework_nestjs_index.md.d369894a.lean.js",revision:null},{url:"assets/index.md.747320f3.js",revision:null},{url:"assets/index.md.747320f3.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.3a5f3963.js",revision:null},{url:"assets/lib_fs-extra_copy.md.3a5f3963.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.9a5d3d83.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.9a5d3d83.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.5299e7e5.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.5299e7e5.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.010bfb4b.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.010bfb4b.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.ad1ce276.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.ad1ce276.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.995dfea6.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.995dfea6.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.99742c4e.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.99742c4e.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.70ad673b.js",revision:null},{url:"assets/lib_fs-extra_index.md.70ad673b.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.b1aa585e.js",revision:null},{url:"assets/lib_fs-extra_move.md.b1aa585e.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.698a87dd.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.698a87dd.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.8bf9369b.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.8bf9369b.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.503db7a8.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.503db7a8.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.35bf1c2d.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.35bf1c2d.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.576d27cd.js",revision:null},{url:"assets/lib_fs-extra_remove.md.576d27cd.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.afe588ef.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.afe588ef.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.52dda5ff.js",revision:null},{url:"assets/manager_babel.md.52dda5ff.lean.js",revision:null},{url:"assets/manager_basic.md.3a90c28f.js",revision:null},{url:"assets/manager_basic.md.3a90c28f.lean.js",revision:null},{url:"assets/manager_recipe.md.239aeb44.js",revision:null},{url:"assets/manager_recipe.md.239aeb44.lean.js",revision:null},{url:"assets/manager_vite.md.6bf269b8.js",revision:null},{url:"assets/manager_vite.md.6bf269b8.lean.js",revision:null},{url:"assets/manager_webpack.md.7b3227ab.js",revision:null},{url:"assets/manager_webpack.md.7b3227ab.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.7fb35bd6.css",revision:null},{url:"assets/v18doc_File-System.md.b6c9b380.js",revision:null},{url:"assets/v18doc_File-System.md.b6c9b380.lean.js",revision:null},{url:"assets/v18doc_Path.md.1f1fac18.js",revision:null},{url:"assets/v18doc_Path.md.1f1fac18.lean.js",revision:null},{url:"blog/dive/index.html",revision:"fd8ceee6430df03d7bced69f6b964d58"},{url:"blog/first.html",revision:"e1493ef5f133fcb39deb385006695b9d"},{url:"blog/misc/module.html",revision:"1e4c59bd408c4b3b3f9e0aa097a5a682"},{url:"blog/misc/ts-and-express.html",revision:"20d5e32ea6acfab0b18ff825b2dfd8ed"},{url:"blog/resource/advanced.html",revision:"51f526432e44b37bf281b70e5e749dab"},{url:"blog/resource/basic.html",revision:"888e186ef72546dbfc3c2f18eb7b6666"},{url:"blog/translate/file-system-paths.html",revision:"56047a4f769f6eef33ef69e59a398242"},{url:"blog/translate/fs-in-node.html",revision:"b614ab776fe18bb4dca72d93b15f4ca1"},{url:"blog/translate/web-streams-on-node.html",revision:"4e51e826bc7969420dd1fc656a58bf4d"},{url:"book/babel/1.html",revision:"5bc026a5ce1843b4564ef387a8e787e7"},{url:"book/babel/2.html",revision:"57bfb27b5721055100dd84e5fafb345f"},{url:"book/babel/3.html",revision:"63cd9e8c26bba5b6ea9a4274c8ce5700"},{url:"book/babel/4.html",revision:"22b10eb406d84569f9954461e2923995"},{url:"book/babel/5.html",revision:"7b25a9ac5e8ddbeb3e3108606a62aa7b"},{url:"book/babel/index.html",revision:"6fde0dd049ede4bac6a50d1d74064c4b"},{url:"book/patterns/callback-and-events.html",revision:"540f074705a4765995adc026c5009d1c"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"17b95a85a9e094498de64746e98dcfa6"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"7d6a8cd99315caa6f49124e4d72bdf85"},{url:"book/patterns/module-system/esm.html",revision:"a08ba916289a19d6d195fea3ca348336"},{url:"book/patterns/module-system/index.html",revision:"08916efaefdc2c0ebff041b81def83fa"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"cdd04689115d2bf841322d90c607e024"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"d565086bad78e08b45742da406da5c26"},{url:"book/patterns/module-system/summary.html",revision:"61c65db78deb7890685b58a36cde3b90"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"999bd1a1019f8c5c2538e0ad4ccc34d9"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"b972e1b5ce7b0d9322725743d5f96188"},{url:"book/patterns/the-module-system.html",revision:"d8ca272212dc44d433a6c386af6bdb6c"},{url:"book/patterns/the-node-platform.html",revision:"09f6ea2e55399eb89f7348062a2789e9"},{url:"book/vite/1.html",revision:"de46da966ca26da0ebde1e940ffe2c06"},{url:"book/vite/10.html",revision:"4f29f49b4a0051b33b17a202f2936c6a"},{url:"book/vite/11.html",revision:"da74be4b8784b4c5f5ffd40b93e2dfd3"},{url:"book/vite/12.html",revision:"0b4da8df2e36f12d800d90c2dfc6f532"},{url:"book/vite/14.html",revision:"94fcd3ec85b4ad5e62e8bf47234bbad2"},{url:"book/vite/15.html",revision:"4dbf909d8e13853c47231b81730a2446"},{url:"book/vite/16.html",revision:"696e9893e7579a166bcbaa04761d314a"},{url:"book/vite/17.html",revision:"f15855365301fde8878bcc9aa2e6f7b3"},{url:"book/vite/18.html",revision:"a939d91ad24de12d0a16283b45e65ddc"},{url:"book/vite/19.html",revision:"19ea6942138654e4d7e18122e530c7c6"},{url:"book/vite/2.html",revision:"bd3b7b77b1ab6fac9527813eabc133f0"},{url:"book/vite/3.html",revision:"8dffd4093d3635c24b575ee2e6e77f0c"},{url:"book/vite/4.html",revision:"de044a9fbb5b807801d5519a96b7b203"},{url:"book/vite/7.html",revision:"7a307848179dea3111e97002057f2c5a"},{url:"book/vite/8.html",revision:"ab52297950ff5d9e8af513fdff3b5749"},{url:"book/vite/9.html",revision:"a850e837445f73b31e50e1cc6ff924c8"},{url:"core/events/index.html",revision:"e7fc562df64d123f19d8328745db2f1e"},{url:"core/stream/index.html",revision:"b42256a10d2d58b48af6b1db339befeb"},{url:"core/stream/stream-in-practice.html",revision:"60a004bd44a6d98f4a6714c900db2fc9"},{url:"core/stream/stream-visulization.html",revision:"76124d73179119c03010e8b4038a8c1d"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"e76c814b57da122f1d8e910e75ab9317"},{url:"framework/nestjs/index.html",revision:"324285296e86a11d44a153746fd0e32e"},{url:"index.html",revision:"cc9d4c7b2f3f27e3d6956a7fe976c40f"},{url:"lib/fs-extra/copy.html",revision:"aeeb989b93e2fba2710482f7d52dfca0"},{url:"lib/fs-extra/emptyDir.html",revision:"99d10ba0753a821963d268c147ca27b2"},{url:"lib/fs-extra/ensureDir.html",revision:"eea6ec9055b995c9f154e4b7257f5759"},{url:"lib/fs-extra/ensureFile.html",revision:"121a3261264ba13f91a729924787c09c"},{url:"lib/fs-extra/ensureLink.html",revision:"87da7094c29b2ccb210f439da17f6ddf"},{url:"lib/fs-extra/ensureSymlink.html",revision:"77e16b4130f264febec06a656dfea279"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"8f2b7264ddf50371c5b60fa2c9a99f19"},{url:"lib/fs-extra/index.html",revision:"d8acb3770ab06d272d9cb814c9df345a"},{url:"lib/fs-extra/move.html",revision:"1ca8b845e227dacebbdd7416c1c10e43"},{url:"lib/fs-extra/outputFile.html",revision:"353d5346792b4aea4dfc621a67d8f50d"},{url:"lib/fs-extra/outputJson.html",revision:"6744800ea5c35c5e6ea7fddd95aacf40"},{url:"lib/fs-extra/pathExists.html",revision:"76faa67216ad5818b0ec187892169680"},{url:"lib/fs-extra/readJson.html",revision:"d29ddd9acaace8b95b07da823d166333"},{url:"lib/fs-extra/remove.html",revision:"d798468932eabdfc0f51af418839ad9f"},{url:"lib/fs-extra/writeJson.html",revision:"f3d61bc291725a94c2cf7902f10a18c0"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"c5ef84087905bc764615634b96f4a717"},{url:"manager/basic.html",revision:"520d4093497c824a21658efcfea0675c"},{url:"manager/recipe.html",revision:"10ff9be9138b006010e9a943619fdd0d"},{url:"manager/vite.html",revision:"984a9542c5ec72f854a810ed8ffb2bb8"},{url:"manager/webpack.html",revision:"d617f55e095e917f7186ecb4b3cb8994"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"c4345d8c4c2c86aad058f53577ac3989"},{url:"v18doc/Path.html",revision:"15b502b77ab65eca738bf4cd0e4722ef"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
