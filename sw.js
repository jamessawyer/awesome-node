if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0597e0d8841e880ed2960e0e96fce458"},{url:"assets/app.6b017847.js",revision:null},{url:"assets/blog_dive_index.md.d656b1e5.js",revision:null},{url:"assets/blog_dive_index.md.d656b1e5.lean.js",revision:null},{url:"assets/blog_first.md.67dc5099.js",revision:null},{url:"assets/blog_first.md.67dc5099.lean.js",revision:null},{url:"assets/blog_misc_module.md.225b26e4.js",revision:null},{url:"assets/blog_misc_module.md.225b26e4.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.273e51ea.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.273e51ea.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.6463c9da.js",revision:null},{url:"assets/blog_resource_advanced.md.6463c9da.lean.js",revision:null},{url:"assets/blog_resource_basic.md.9755b3ba.js",revision:null},{url:"assets/blog_resource_basic.md.9755b3ba.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.02b82055.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.02b82055.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.40e2abc0.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.40e2abc0.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.07029274.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.07029274.lean.js",revision:null},{url:"assets/book_babel_1.md.9d602bab.js",revision:null},{url:"assets/book_babel_1.md.9d602bab.lean.js",revision:null},{url:"assets/book_babel_2.md.aac80c41.js",revision:null},{url:"assets/book_babel_2.md.aac80c41.lean.js",revision:null},{url:"assets/book_babel_3.md.4fc7434e.js",revision:null},{url:"assets/book_babel_3.md.4fc7434e.lean.js",revision:null},{url:"assets/book_babel_4.md.3e8a0903.js",revision:null},{url:"assets/book_babel_4.md.3e8a0903.lean.js",revision:null},{url:"assets/book_babel_5.md.a29df06b.js",revision:null},{url:"assets/book_babel_5.md.a29df06b.lean.js",revision:null},{url:"assets/book_babel_6.md.eb3b8005.js",revision:null},{url:"assets/book_babel_6.md.eb3b8005.lean.js",revision:null},{url:"assets/book_babel_index.md.5ffda430.js",revision:null},{url:"assets/book_babel_index.md.5ffda430.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.0fc01746.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.0fc01746.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.8c846fd7.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.8c846fd7.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.516783e9.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.516783e9.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.e9e04ec9.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.e9e04ec9.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.2607019a.js",revision:null},{url:"assets/book_patterns_module-system_index.md.2607019a.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.4da3e4cc.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.4da3e4cc.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.52ef1f0c.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.52ef1f0c.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.6336c5d7.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.6336c5d7.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.1af655c8.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.1af655c8.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.109ed403.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.109ed403.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.3ae577ca.js",revision:null},{url:"assets/book_patterns_the-module-system.md.3ae577ca.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.c8d80693.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.c8d80693.lean.js",revision:null},{url:"assets/book_vite_1.md.1acbc86b.js",revision:null},{url:"assets/book_vite_1.md.1acbc86b.lean.js",revision:null},{url:"assets/book_vite_10.md.341e0bcb.js",revision:null},{url:"assets/book_vite_10.md.341e0bcb.lean.js",revision:null},{url:"assets/book_vite_11.md.6fa8ae60.js",revision:null},{url:"assets/book_vite_11.md.6fa8ae60.lean.js",revision:null},{url:"assets/book_vite_12.md.86ea4553.js",revision:null},{url:"assets/book_vite_12.md.86ea4553.lean.js",revision:null},{url:"assets/book_vite_14.md.69fbb2fa.js",revision:null},{url:"assets/book_vite_14.md.69fbb2fa.lean.js",revision:null},{url:"assets/book_vite_15.md.5a86a67b.js",revision:null},{url:"assets/book_vite_15.md.5a86a67b.lean.js",revision:null},{url:"assets/book_vite_16.md.373c234e.js",revision:null},{url:"assets/book_vite_16.md.373c234e.lean.js",revision:null},{url:"assets/book_vite_17.md.a1458065.js",revision:null},{url:"assets/book_vite_17.md.a1458065.lean.js",revision:null},{url:"assets/book_vite_18.md.29b6ccab.js",revision:null},{url:"assets/book_vite_18.md.29b6ccab.lean.js",revision:null},{url:"assets/book_vite_19.md.3d14e038.js",revision:null},{url:"assets/book_vite_19.md.3d14e038.lean.js",revision:null},{url:"assets/book_vite_2.md.febaad55.js",revision:null},{url:"assets/book_vite_2.md.febaad55.lean.js",revision:null},{url:"assets/book_vite_3.md.eb567a12.js",revision:null},{url:"assets/book_vite_3.md.eb567a12.lean.js",revision:null},{url:"assets/book_vite_4.md.044dc57e.js",revision:null},{url:"assets/book_vite_4.md.044dc57e.lean.js",revision:null},{url:"assets/book_vite_7.md.3c38ca17.js",revision:null},{url:"assets/book_vite_7.md.3c38ca17.lean.js",revision:null},{url:"assets/book_vite_8.md.f13e7a95.js",revision:null},{url:"assets/book_vite_8.md.f13e7a95.lean.js",revision:null},{url:"assets/book_vite_9.md.5be9fa30.js",revision:null},{url:"assets/book_vite_9.md.5be9fa30.lean.js",revision:null},{url:"assets/book_webpack_1.md.2f3ef67d.js",revision:null},{url:"assets/book_webpack_1.md.2f3ef67d.lean.js",revision:null},{url:"assets/book_webpack_10.md.bcf8eb82.js",revision:null},{url:"assets/book_webpack_10.md.bcf8eb82.lean.js",revision:null},{url:"assets/book_webpack_11.md.edba69a0.js",revision:null},{url:"assets/book_webpack_11.md.edba69a0.lean.js",revision:null},{url:"assets/book_webpack_12.md.cd963911.js",revision:null},{url:"assets/book_webpack_12.md.cd963911.lean.js",revision:null},{url:"assets/book_webpack_13.md.c8298fd2.js",revision:null},{url:"assets/book_webpack_13.md.c8298fd2.lean.js",revision:null},{url:"assets/book_webpack_14.md.67d46908.js",revision:null},{url:"assets/book_webpack_14.md.67d46908.lean.js",revision:null},{url:"assets/book_webpack_15.md.978a2355.js",revision:null},{url:"assets/book_webpack_15.md.978a2355.lean.js",revision:null},{url:"assets/book_webpack_16.md.e35a89d4.js",revision:null},{url:"assets/book_webpack_16.md.e35a89d4.lean.js",revision:null},{url:"assets/book_webpack_17.md.6d918e5d.js",revision:null},{url:"assets/book_webpack_17.md.6d918e5d.lean.js",revision:null},{url:"assets/book_webpack_18.md.97053b06.js",revision:null},{url:"assets/book_webpack_18.md.97053b06.lean.js",revision:null},{url:"assets/book_webpack_2.md.c771d654.js",revision:null},{url:"assets/book_webpack_2.md.c771d654.lean.js",revision:null},{url:"assets/book_webpack_3.md.380fd2cf.js",revision:null},{url:"assets/book_webpack_3.md.380fd2cf.lean.js",revision:null},{url:"assets/book_webpack_index.md.2c328f53.js",revision:null},{url:"assets/book_webpack_index.md.2c328f53.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.ca990a92.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.478efc10.js",revision:null},{url:"assets/chunks/mark.f25438cf.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.ec33273d.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.3ab6f473.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.9509812f.js",revision:null},{url:"assets/core_events_index.md.9509812f.lean.js",revision:null},{url:"assets/core_stream_index.md.2d3f6f4c.js",revision:null},{url:"assets/core_stream_index.md.2d3f6f4c.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.da0204a2.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.da0204a2.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.07b90fb3.js",revision:null},{url:"assets/core_stream_stream-visualization.md.07b90fb3.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.7221819d.js",revision:null},{url:"assets/framework_express_index.md.7221819d.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.4f75a3d0.js",revision:null},{url:"assets/framework_nestjs_index.md.4f75a3d0.lean.js",revision:null},{url:"assets/index.md.8a8d8e0b.js",revision:null},{url:"assets/index.md.8a8d8e0b.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.9902e13a.js",revision:null},{url:"assets/lib_fs-extra_copy.md.9902e13a.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.22d5a07b.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.22d5a07b.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.faf2f3a2.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.faf2f3a2.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.79e25659.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.79e25659.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.bcf5d351.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.bcf5d351.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.ec3f11bc.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.ec3f11bc.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.550629e6.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.550629e6.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.0d96431d.js",revision:null},{url:"assets/lib_fs-extra_index.md.0d96431d.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.5079a862.js",revision:null},{url:"assets/lib_fs-extra_move.md.5079a862.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.30751dd5.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.30751dd5.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.bad7283f.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.bad7283f.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.b46919c0.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.b46919c0.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.48c09bfc.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.48c09bfc.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.a13c32ea.js",revision:null},{url:"assets/lib_fs-extra_remove.md.a13c32ea.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.de2e4d29.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.de2e4d29.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.c0b189b2.js",revision:null},{url:"assets/manager_babel.md.c0b189b2.lean.js",revision:null},{url:"assets/manager_basic.md.761ec001.js",revision:null},{url:"assets/manager_basic.md.761ec001.lean.js",revision:null},{url:"assets/manager_recipe.md.e9cb636d.js",revision:null},{url:"assets/manager_recipe.md.e9cb636d.lean.js",revision:null},{url:"assets/manager_vite.md.2ed3fb0f.js",revision:null},{url:"assets/manager_vite.md.2ed3fb0f.lean.js",revision:null},{url:"assets/manager_webpack.md.79a06f23.js",revision:null},{url:"assets/manager_webpack.md.79a06f23.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.912f4b70.css",revision:null},{url:"assets/v18doc_File-System.md.c4b8216a.js",revision:null},{url:"assets/v18doc_File-System.md.c4b8216a.lean.js",revision:null},{url:"assets/v18doc_Path.md.f2bec840.js",revision:null},{url:"assets/v18doc_Path.md.f2bec840.lean.js",revision:null},{url:"blog/dive/index.html",revision:"2b76a71b7a9fd3168e56b89fff68f924"},{url:"blog/first.html",revision:"a824bec88edee58dd80a39ed714758ae"},{url:"blog/misc/module.html",revision:"7de30616a8302b2b95a2085695d0c2ff"},{url:"blog/misc/ts-and-express.html",revision:"e5e0a99bdd10f8092d982c84d87f2440"},{url:"blog/resource/advanced.html",revision:"5fb8892eb0a3201a2c6c54ff80fbff29"},{url:"blog/resource/basic.html",revision:"684e257050a6083b95798ccb88f7dc14"},{url:"blog/translate/file-system-paths.html",revision:"faa8a81b939662cdd919ec9f18710683"},{url:"blog/translate/fs-in-node.html",revision:"e2b3b587e2c4c990eacbde7973bc0e05"},{url:"blog/translate/web-streams-on-node.html",revision:"8cb74d77c11e30fe9209fd47bf22dc99"},{url:"book/babel/1.html",revision:"55afe464b30595b69a788961bc9943d1"},{url:"book/babel/2.html",revision:"424bf3f15a2d658ea947391a1bfd77cd"},{url:"book/babel/3.html",revision:"08743dba73cdfc270d974333517d7456"},{url:"book/babel/4.html",revision:"e242ba2068aabda8af1b32f6cd78af9e"},{url:"book/babel/5.html",revision:"31a07e7258c3e22d1011351016ff2c97"},{url:"book/babel/6.html",revision:"2d51c2d7e78f0db4cc314a6f5ac9d44c"},{url:"book/babel/index.html",revision:"1bdcf0779dd3a0eb764c3ecf74645d3c"},{url:"book/patterns/callback-and-events.html",revision:"ee674399b212cc410ee14d43cdcd3bac"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"4c56ebbf2ad6cc2d9256b567a180c556"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"7ce563cb1bdf9f54c851115bdf15a03f"},{url:"book/patterns/module-system/esm.html",revision:"7b6c1331a197111b3ffdb5f8670bb130"},{url:"book/patterns/module-system/index.html",revision:"7317368bc011464867aae4dd2993af31"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"ce1e3fd7ebb18fd7c8319a4254c3b889"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"838d1289b249ec86e700d66eca80b0c3"},{url:"book/patterns/module-system/summary.html",revision:"9326e1722c9c1553160d9f4ddc21d21b"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"a019142b76f722b849af2f92f95e5923"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"b55b15762208f8eb230cd3ea932d189f"},{url:"book/patterns/the-module-system.html",revision:"dcaa710513484b75fc2848af3c00f661"},{url:"book/patterns/the-node-platform.html",revision:"f9658c660c0b3902c07b79308939ac34"},{url:"book/vite/1.html",revision:"ba2616b4a784dcdbf74a7d046e3fe31c"},{url:"book/vite/10.html",revision:"1eeed237ad9d4dee53839eb9068c78b4"},{url:"book/vite/11.html",revision:"3a63db09dfb2a732dc1bca927436dd51"},{url:"book/vite/12.html",revision:"a3089964947bc26f6ec78f85eebad521"},{url:"book/vite/14.html",revision:"e82e6cd1479485427370f5a0737b2a4f"},{url:"book/vite/15.html",revision:"9dc8164cd6316cdcea2529a2fc026328"},{url:"book/vite/16.html",revision:"b600cc27ba68bf45b37ab3e1bfc51d4b"},{url:"book/vite/17.html",revision:"3668e7e01f30ca10850b2a3c53f908b7"},{url:"book/vite/18.html",revision:"2f0f80d6c9814f4b9a52e8e9de637029"},{url:"book/vite/19.html",revision:"d92cec6b2662b59cf8e01e605928d143"},{url:"book/vite/2.html",revision:"1f9045b3b72a4e6e36ba8156c0ce64ec"},{url:"book/vite/3.html",revision:"b2d5aa31a4b5792322065523a9fd1ceb"},{url:"book/vite/4.html",revision:"0690f41218a46448be21a76db86b5dc0"},{url:"book/vite/7.html",revision:"e6b7fb8af65b86b321a276b2d2c897c6"},{url:"book/vite/8.html",revision:"3b9b6b0444e334495e35af96fb814983"},{url:"book/vite/9.html",revision:"56b04878d1cd70dc7da92baf6ee0ee52"},{url:"book/webpack/1.html",revision:"bae716e7504352d121b79a05a7ef7140"},{url:"book/webpack/10.html",revision:"5daecc1c9bb4417dd657fe69c98ea98d"},{url:"book/webpack/11.html",revision:"4e4a0da9847c63cc8bb853b13b1b27c6"},{url:"book/webpack/12.html",revision:"53d01e2fea96d2ff6d3548d054f339bb"},{url:"book/webpack/13.html",revision:"b678905e99234c19d8b1f8c81526ab06"},{url:"book/webpack/14.html",revision:"ef7be6b02e7b73d6ee4a11b3bcd8b4dd"},{url:"book/webpack/15.html",revision:"a377052f9eb807b8f7b5ad368efdee6a"},{url:"book/webpack/16.html",revision:"582e68db73ba0d8d847f1dc7cfc136c3"},{url:"book/webpack/17.html",revision:"f44f4380ae8b9473c5fac7d5ac616fe1"},{url:"book/webpack/18.html",revision:"5b58d2ead7985e83248109ace82eda32"},{url:"book/webpack/2.html",revision:"df631ebf2a061bf9074b257c2a175565"},{url:"book/webpack/3.html",revision:"76c63830154e8af8854ac41d92b33880"},{url:"book/webpack/index.html",revision:"16aae84f34de02e7e80b56fb2a9fc1dc"},{url:"core/events/index.html",revision:"33dc9b90182d484ca37e8d0bbe277340"},{url:"core/stream/index.html",revision:"0cdc9a4fd0fe90fbbce98167037fda61"},{url:"core/stream/stream-in-practice.html",revision:"2d7fca0b8702628310a91dfdf7ab63a2"},{url:"core/stream/stream-visualization.html",revision:"5ec26c3a0bb27c84e1f330f548b66caa"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"7fc75283d810fa121c8af3f3365caf98"},{url:"framework/nestjs/index.html",revision:"fa0fb7671272f3708a30651bae95ed04"},{url:"index.html",revision:"b902b3ce65ee9c2663155f3d0d265c94"},{url:"lib/fs-extra/copy.html",revision:"438c6867a8d8bc919d4b71ef780cb118"},{url:"lib/fs-extra/emptyDir.html",revision:"a9dedcb98f4e1162383e42682c07feb0"},{url:"lib/fs-extra/ensureDir.html",revision:"925115493d53247faacbf67a4b97ea66"},{url:"lib/fs-extra/ensureFile.html",revision:"ba7a91439327ff90635fbe515327e5d9"},{url:"lib/fs-extra/ensureLink.html",revision:"de1f91f7d23d38ccc1a416c7fd95ad12"},{url:"lib/fs-extra/ensureSymlink.html",revision:"a4605731e3f25fd9638d0d34c9f2074b"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"58c3fb6c9bc2de7e784a2de5e31dd87f"},{url:"lib/fs-extra/index.html",revision:"73757436e9d786a23bc8843ab55a1a87"},{url:"lib/fs-extra/move.html",revision:"069816dac745030b50f2c3c3ad38770b"},{url:"lib/fs-extra/outputFile.html",revision:"934c1fa05eec46e7046e24894929f5c9"},{url:"lib/fs-extra/outputJson.html",revision:"82816793ec73fb213ebcd8ad812e45ef"},{url:"lib/fs-extra/pathExists.html",revision:"fb418761c43638229f4e70648ebce717"},{url:"lib/fs-extra/readJson.html",revision:"a636afabed3989ae9ce1a66e065b9c91"},{url:"lib/fs-extra/remove.html",revision:"e393af3f162908393074dc9ecbd04b27"},{url:"lib/fs-extra/writeJson.html",revision:"a588e55e66da5e26abbe09e19e3da368"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"9d5144a56f03e9992cf6c5e5fa488729"},{url:"manager/basic.html",revision:"942d2ae1d346875d0da11a2ec59cae1e"},{url:"manager/recipe.html",revision:"3c83209d8c64fa3366c2c8ea5a5bc9da"},{url:"manager/vite.html",revision:"aae70bb07aeb9e6fd3d5b7df3bda4790"},{url:"manager/webpack.html",revision:"5ffc911f09573a791e6fade511f34924"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"debc15d2904a5817c81ef03128486447"},{url:"v18doc/Path.html",revision:"ae0c18a682e9bf950ec4bb6ff3b1c2ff"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
