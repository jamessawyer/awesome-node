if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c2108707352268bd62d410cc0632d217"},{url:"assets/app.097bc919.js",revision:null},{url:"assets/blog_dive_index.md.acd77047.js",revision:null},{url:"assets/blog_dive_index.md.acd77047.lean.js",revision:null},{url:"assets/blog_first.md.2ba1c5d9.js",revision:null},{url:"assets/blog_first.md.2ba1c5d9.lean.js",revision:null},{url:"assets/blog_misc_module.md.9a777a9a.js",revision:null},{url:"assets/blog_misc_module.md.9a777a9a.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.5c6ac149.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.5c6ac149.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.75913afd.js",revision:null},{url:"assets/blog_resource_advanced.md.75913afd.lean.js",revision:null},{url:"assets/blog_resource_basic.md.2ae7b09d.js",revision:null},{url:"assets/blog_resource_basic.md.2ae7b09d.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.7cbe652e.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.7cbe652e.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ceb06e61.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.ceb06e61.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.1492a3da.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.1492a3da.lean.js",revision:null},{url:"assets/book_babel_1.md.614a2273.js",revision:null},{url:"assets/book_babel_1.md.614a2273.lean.js",revision:null},{url:"assets/book_babel_2.md.24f3d052.js",revision:null},{url:"assets/book_babel_2.md.24f3d052.lean.js",revision:null},{url:"assets/book_babel_3.md.6f80a12d.js",revision:null},{url:"assets/book_babel_3.md.6f80a12d.lean.js",revision:null},{url:"assets/book_babel_4.md.e10fcc0d.js",revision:null},{url:"assets/book_babel_4.md.e10fcc0d.lean.js",revision:null},{url:"assets/book_babel_5.md.52edfb16.js",revision:null},{url:"assets/book_babel_5.md.52edfb16.lean.js",revision:null},{url:"assets/book_babel_6.md.334ed6b7.js",revision:null},{url:"assets/book_babel_6.md.334ed6b7.lean.js",revision:null},{url:"assets/book_babel_index.md.d2c4d9f4.js",revision:null},{url:"assets/book_babel_index.md.d2c4d9f4.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.f0c80956.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.f0c80956.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.4ea2fdd8.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.4ea2fdd8.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.55da75cc.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.55da75cc.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.569119d2.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.569119d2.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.44d1f505.js",revision:null},{url:"assets/book_patterns_module-system_index.md.44d1f505.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.13f024f0.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.13f024f0.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.0c3b7f18.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.0c3b7f18.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.b587445b.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.b587445b.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.4bf89117.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.4bf89117.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.d36186f4.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.d36186f4.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.ca7017cc.js",revision:null},{url:"assets/book_patterns_the-module-system.md.ca7017cc.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.4ee5d324.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.4ee5d324.lean.js",revision:null},{url:"assets/book_vite_1.md.7ec7962a.js",revision:null},{url:"assets/book_vite_1.md.7ec7962a.lean.js",revision:null},{url:"assets/book_vite_10.md.0a898d61.js",revision:null},{url:"assets/book_vite_10.md.0a898d61.lean.js",revision:null},{url:"assets/book_vite_11.md.41898dc6.js",revision:null},{url:"assets/book_vite_11.md.41898dc6.lean.js",revision:null},{url:"assets/book_vite_12.md.f772f424.js",revision:null},{url:"assets/book_vite_12.md.f772f424.lean.js",revision:null},{url:"assets/book_vite_14.md.5655fb17.js",revision:null},{url:"assets/book_vite_14.md.5655fb17.lean.js",revision:null},{url:"assets/book_vite_15.md.1edf1a69.js",revision:null},{url:"assets/book_vite_15.md.1edf1a69.lean.js",revision:null},{url:"assets/book_vite_16.md.626db358.js",revision:null},{url:"assets/book_vite_16.md.626db358.lean.js",revision:null},{url:"assets/book_vite_17.md.62ec4383.js",revision:null},{url:"assets/book_vite_17.md.62ec4383.lean.js",revision:null},{url:"assets/book_vite_18.md.2e14547d.js",revision:null},{url:"assets/book_vite_18.md.2e14547d.lean.js",revision:null},{url:"assets/book_vite_19.md.4025a53e.js",revision:null},{url:"assets/book_vite_19.md.4025a53e.lean.js",revision:null},{url:"assets/book_vite_2.md.a43fb5e1.js",revision:null},{url:"assets/book_vite_2.md.a43fb5e1.lean.js",revision:null},{url:"assets/book_vite_3.md.c3917d8d.js",revision:null},{url:"assets/book_vite_3.md.c3917d8d.lean.js",revision:null},{url:"assets/book_vite_4.md.d0b44463.js",revision:null},{url:"assets/book_vite_4.md.d0b44463.lean.js",revision:null},{url:"assets/book_vite_7.md.01fefa1a.js",revision:null},{url:"assets/book_vite_7.md.01fefa1a.lean.js",revision:null},{url:"assets/book_vite_8.md.a4c3e7e5.js",revision:null},{url:"assets/book_vite_8.md.a4c3e7e5.lean.js",revision:null},{url:"assets/book_vite_9.md.64f622a1.js",revision:null},{url:"assets/book_vite_9.md.64f622a1.lean.js",revision:null},{url:"assets/book_webpack_1.md.067e68a8.js",revision:null},{url:"assets/book_webpack_1.md.067e68a8.lean.js",revision:null},{url:"assets/book_webpack_10.md.0f5f5e2e.js",revision:null},{url:"assets/book_webpack_10.md.0f5f5e2e.lean.js",revision:null},{url:"assets/book_webpack_11.md.4ba01894.js",revision:null},{url:"assets/book_webpack_11.md.4ba01894.lean.js",revision:null},{url:"assets/book_webpack_13.md.68982483.js",revision:null},{url:"assets/book_webpack_13.md.68982483.lean.js",revision:null},{url:"assets/book_webpack_14.md.64cec57e.js",revision:null},{url:"assets/book_webpack_14.md.64cec57e.lean.js",revision:null},{url:"assets/book_webpack_15.md.e7b3c048.js",revision:null},{url:"assets/book_webpack_15.md.e7b3c048.lean.js",revision:null},{url:"assets/book_webpack_16.md.c176308f.js",revision:null},{url:"assets/book_webpack_16.md.c176308f.lean.js",revision:null},{url:"assets/book_webpack_17.md.b4ef287c.js",revision:null},{url:"assets/book_webpack_17.md.b4ef287c.lean.js",revision:null},{url:"assets/book_webpack_18.md.294f057e.js",revision:null},{url:"assets/book_webpack_18.md.294f057e.lean.js",revision:null},{url:"assets/book_webpack_2.md.8c4bd596.js",revision:null},{url:"assets/book_webpack_2.md.8c4bd596.lean.js",revision:null},{url:"assets/book_webpack_3.md.abcbc90d.js",revision:null},{url:"assets/book_webpack_3.md.abcbc90d.lean.js",revision:null},{url:"assets/book_webpack_index.md.dffbbaa4.js",revision:null},{url:"assets/book_webpack_index.md.dffbbaa4.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.835bb6b1.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.92797c73.js",revision:null},{url:"assets/chunks/mark.f25438cf.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.65012aaf.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.9a07d7a2.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.734f9985.js",revision:null},{url:"assets/core_events_index.md.734f9985.lean.js",revision:null},{url:"assets/core_stream_index.md.b1dea668.js",revision:null},{url:"assets/core_stream_index.md.b1dea668.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.d0eb8153.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.d0eb8153.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.01002ead.js",revision:null},{url:"assets/core_stream_stream-visualization.md.01002ead.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.c6da06c6.js",revision:null},{url:"assets/framework_express_index.md.c6da06c6.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.4a945106.js",revision:null},{url:"assets/framework_nestjs_index.md.4a945106.lean.js",revision:null},{url:"assets/index.md.2154c43a.js",revision:null},{url:"assets/index.md.2154c43a.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.ef8764c5.js",revision:null},{url:"assets/lib_fs-extra_copy.md.ef8764c5.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.f31f0c10.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.f31f0c10.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.0096bc40.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.0096bc40.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.2470d26c.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.2470d26c.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.1f33b3aa.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.1f33b3aa.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.28bb3ba5.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.28bb3ba5.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.818fc09b.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.818fc09b.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.babe79cf.js",revision:null},{url:"assets/lib_fs-extra_index.md.babe79cf.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.43743c85.js",revision:null},{url:"assets/lib_fs-extra_move.md.43743c85.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.4cff38c4.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.4cff38c4.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.189f493c.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.189f493c.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.5f70fb67.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.5f70fb67.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.a3cce98e.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.a3cce98e.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.3805170c.js",revision:null},{url:"assets/lib_fs-extra_remove.md.3805170c.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.a3702f72.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.a3702f72.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.615107ef.js",revision:null},{url:"assets/manager_babel.md.615107ef.lean.js",revision:null},{url:"assets/manager_basic.md.8aaa9e9b.js",revision:null},{url:"assets/manager_basic.md.8aaa9e9b.lean.js",revision:null},{url:"assets/manager_recipe.md.300d7555.js",revision:null},{url:"assets/manager_recipe.md.300d7555.lean.js",revision:null},{url:"assets/manager_vite.md.74325f1c.js",revision:null},{url:"assets/manager_vite.md.74325f1c.lean.js",revision:null},{url:"assets/manager_webpack.md.90718b24.js",revision:null},{url:"assets/manager_webpack.md.90718b24.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.912f4b70.css",revision:null},{url:"assets/v18doc_File-System.md.aece2924.js",revision:null},{url:"assets/v18doc_File-System.md.aece2924.lean.js",revision:null},{url:"assets/v18doc_Path.md.5d15c720.js",revision:null},{url:"assets/v18doc_Path.md.5d15c720.lean.js",revision:null},{url:"blog/dive/index.html",revision:"4264c9a9f638f7c9233dd17b3fbf5e05"},{url:"blog/first.html",revision:"e49688ac2b245b9b3eeefbf132bc7beb"},{url:"blog/misc/module.html",revision:"a997c9be7e7a4df80b87d7ac94d0d512"},{url:"blog/misc/ts-and-express.html",revision:"f3fb2ed1ab30535479440942fbc9173e"},{url:"blog/resource/advanced.html",revision:"db1f3da17df3916a904e475e90fb389e"},{url:"blog/resource/basic.html",revision:"45de0783162e2f16d82fd0c7842510e1"},{url:"blog/translate/file-system-paths.html",revision:"5668689869caf70a06dc5e01142dc848"},{url:"blog/translate/fs-in-node.html",revision:"411445942151a5d3992e7bb652e3915d"},{url:"blog/translate/web-streams-on-node.html",revision:"4c387016fc5d7ce7f080146964e585c1"},{url:"book/babel/1.html",revision:"7f03263bd24b0d6361f68b0ce51d74ef"},{url:"book/babel/2.html",revision:"d5ba249aa21973b206755c20ae6ff839"},{url:"book/babel/3.html",revision:"5443b108d8975911eae00e940d633f04"},{url:"book/babel/4.html",revision:"2c85e090b87d9585171e204166e38278"},{url:"book/babel/5.html",revision:"c64cae0aa39f3eb07bf0cfdd346ac090"},{url:"book/babel/6.html",revision:"5754cedb4121f04f5ab40cc77a4ca4ee"},{url:"book/babel/index.html",revision:"05a08f5df130ee29ad7a93251c2febb6"},{url:"book/patterns/callback-and-events.html",revision:"5f54a4737bf32bc1eb753b3b92173446"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"9ae0c7982feeffd9f65a6695a9ebade8"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"6c3cb10bb171f12d2be766f38feab38e"},{url:"book/patterns/module-system/esm.html",revision:"b116a84021b1fb7fcffaacd216ba8096"},{url:"book/patterns/module-system/index.html",revision:"1d528f23bec7c6c4e4bb7e3eff3cab70"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"809ec76794392899589ca1a9a3f582bc"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"faac91a20ab5f230169d75ebfbb23125"},{url:"book/patterns/module-system/summary.html",revision:"f02804531570e309b5b00414c8004d58"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"ee946a29f14bc8ffa0daa8dabd7524ad"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"aeefcf0632e6cb3f55dfb57f861f3341"},{url:"book/patterns/the-module-system.html",revision:"8ae5589fa4dbb711a630dd3629e17afc"},{url:"book/patterns/the-node-platform.html",revision:"4dae9285b2385edc2f11ade0cd1d8707"},{url:"book/vite/1.html",revision:"2d2fc0024fe3d476bea92130a3e0fbbb"},{url:"book/vite/10.html",revision:"86d332640604522a93a5b80d555fcc0b"},{url:"book/vite/11.html",revision:"2e499642ff41a0f7af503e3bba51eb1b"},{url:"book/vite/12.html",revision:"ea20e870c698b154fc875d7cb1c5fe5e"},{url:"book/vite/14.html",revision:"d58731408f200c971f4839658371e214"},{url:"book/vite/15.html",revision:"54e6e2aa037f13c92a77c7de217691d4"},{url:"book/vite/16.html",revision:"003b4e1b1a25aec7368d8a4c31c96a48"},{url:"book/vite/17.html",revision:"7c769c8b1ddaa73bdaa4a73c33f6c24a"},{url:"book/vite/18.html",revision:"925e1bd3b9920b075bacfe180996f61f"},{url:"book/vite/19.html",revision:"52e30b15c0a49e2168935b2c3bcc37a5"},{url:"book/vite/2.html",revision:"71b08ed6f2fa099f0d6dc4909277b124"},{url:"book/vite/3.html",revision:"b6e4d0ac6b6ee73c969548a5a00c6d91"},{url:"book/vite/4.html",revision:"bf546b04f975760a3f5dd258398b0f3a"},{url:"book/vite/7.html",revision:"cc35b506608f7fc4fda735d884fe5a99"},{url:"book/vite/8.html",revision:"b5f41b6b8c4a79351deba999c2cb464e"},{url:"book/vite/9.html",revision:"96dc7411d290bfcf240a981edfbb7206"},{url:"book/webpack/1.html",revision:"0ecbee70b440659ec78294bd9382f7a7"},{url:"book/webpack/10.html",revision:"170edbd0176ae807f779a7a496c0a57a"},{url:"book/webpack/11.html",revision:"6fb0f75af0b688f64583861cf6c21d91"},{url:"book/webpack/13.html",revision:"5e80635fbff0cba2a352b3a710373261"},{url:"book/webpack/14.html",revision:"696c18d767343cfc7f904cb2614f7fdb"},{url:"book/webpack/15.html",revision:"cb40163940f896a6279693d42c96c7af"},{url:"book/webpack/16.html",revision:"5503676c23cc99c9fc4bfcfff87ecfc6"},{url:"book/webpack/17.html",revision:"84db53a6899c79e39169701ba3d3fd1e"},{url:"book/webpack/18.html",revision:"8fe60d762a2e3af87bbda5b348650193"},{url:"book/webpack/2.html",revision:"1d62a34075642fb6025ce04cc884e7f9"},{url:"book/webpack/3.html",revision:"4c7e34ab24a012b03ad8b9347aba1482"},{url:"book/webpack/index.html",revision:"71cda713b990d95a5f625cf3673bceac"},{url:"core/events/index.html",revision:"3551d8811b5c4a17a0ed1f9f060199be"},{url:"core/stream/index.html",revision:"bc29b44ac896f120bcec049615b446a0"},{url:"core/stream/stream-in-practice.html",revision:"41eda862b4eaa204dc207f7978e7be5e"},{url:"core/stream/stream-visualization.html",revision:"efdc87cd4ff25d95644168ed1a91feba"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"69c4bb313deb3151ea6726e9c59759f2"},{url:"framework/nestjs/index.html",revision:"686e592ed019898033a0777b942c84ec"},{url:"index.html",revision:"4c98f0db0e462a1a1c03f4c0ee173319"},{url:"lib/fs-extra/copy.html",revision:"9acea5fee1d4302fb2e25e6b14e3286d"},{url:"lib/fs-extra/emptyDir.html",revision:"ea3dc74bfb99810f76a33ce50ceacf09"},{url:"lib/fs-extra/ensureDir.html",revision:"3e610fe31bc06fad99d565a277f17566"},{url:"lib/fs-extra/ensureFile.html",revision:"6b4acf423ed47718fcd76e1c90020603"},{url:"lib/fs-extra/ensureLink.html",revision:"09dba3ddd63d0de7b1ace0a2022a901e"},{url:"lib/fs-extra/ensureSymlink.html",revision:"a4b15483ca58179aa3253511533cd2c0"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"4d79a70d59fc00ad5f5fe5e43dbee91e"},{url:"lib/fs-extra/index.html",revision:"f531205c30f2675b0d4b97692e2f3090"},{url:"lib/fs-extra/move.html",revision:"f20738d79a0a41ef97b92d8d9ad3370a"},{url:"lib/fs-extra/outputFile.html",revision:"7c6c530545d1d35db1958aaa0a76ac83"},{url:"lib/fs-extra/outputJson.html",revision:"0857f89ca4fc54a6c078d5de757e61b8"},{url:"lib/fs-extra/pathExists.html",revision:"76c4aa454551880ded02faad178f105b"},{url:"lib/fs-extra/readJson.html",revision:"4eaa3aeb8c9b63e5f77af742f005847a"},{url:"lib/fs-extra/remove.html",revision:"d36855aca51b2d86dc861c31dfbba37d"},{url:"lib/fs-extra/writeJson.html",revision:"01c2595135c9018cb0a6c7434b848a6d"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"50987e6b437ffb81e87343e5c81ab732"},{url:"manager/basic.html",revision:"800556ee2f901dce4cdafc2420fc781c"},{url:"manager/recipe.html",revision:"2eba70bcb287218a8e834e89f763d845"},{url:"manager/vite.html",revision:"68fc217ee94698c238651cc74d3bfb8a"},{url:"manager/webpack.html",revision:"ed7901d2b8961694cb154d8e290d3ebb"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"684fd60c6f2d6732b6fcaf388c90de63"},{url:"v18doc/Path.html",revision:"9699a18fc7c1a025b3401795a5efea04"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
