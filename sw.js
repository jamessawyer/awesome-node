if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>l(e,r),t={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"972b57c82bc9d9bed3a9d99eaadf87e6"},{url:"assets/app.6585a414.js",revision:null},{url:"assets/blog_dive_index.md.3bda8046.js",revision:null},{url:"assets/blog_dive_index.md.3bda8046.lean.js",revision:null},{url:"assets/blog_first.md.89e0ce97.js",revision:null},{url:"assets/blog_first.md.89e0ce97.lean.js",revision:null},{url:"assets/blog_misc_module.md.54fbfba0.js",revision:null},{url:"assets/blog_misc_module.md.54fbfba0.lean.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.c79ab08d.js",revision:null},{url:"assets/blog_misc_ts-and-express.md.c79ab08d.lean.js",revision:null},{url:"assets/blog_resource_advanced.md.86ea590c.js",revision:null},{url:"assets/blog_resource_advanced.md.86ea590c.lean.js",revision:null},{url:"assets/blog_resource_basic.md.22e9b231.js",revision:null},{url:"assets/blog_resource_basic.md.22e9b231.lean.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.5b10cf6b.js",revision:null},{url:"assets/blog_translate_file-system-paths.md.5b10cf6b.lean.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.68e9553b.js",revision:null},{url:"assets/blog_translate_fs-in-node.md.68e9553b.lean.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.7ab23bea.js",revision:null},{url:"assets/blog_translate_web-streams-on-node.md.7ab23bea.lean.js",revision:null},{url:"assets/book_babel_1.md.708fbae9.js",revision:null},{url:"assets/book_babel_1.md.708fbae9.lean.js",revision:null},{url:"assets/book_babel_2.md.d5a79ee5.js",revision:null},{url:"assets/book_babel_2.md.d5a79ee5.lean.js",revision:null},{url:"assets/book_babel_3.md.139a1a4f.js",revision:null},{url:"assets/book_babel_3.md.139a1a4f.lean.js",revision:null},{url:"assets/book_babel_4.md.31cb7f8b.js",revision:null},{url:"assets/book_babel_4.md.31cb7f8b.lean.js",revision:null},{url:"assets/book_babel_5.md.dafc0894.js",revision:null},{url:"assets/book_babel_5.md.dafc0894.lean.js",revision:null},{url:"assets/book_babel_6.md.8c1657b7.js",revision:null},{url:"assets/book_babel_6.md.8c1657b7.lean.js",revision:null},{url:"assets/book_babel_index.md.ef8b60ff.js",revision:null},{url:"assets/book_babel_index.md.ef8b60ff.lean.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.469ce859.js",revision:null},{url:"assets/book_patterns_callback-and-events.md.469ce859.lean.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.a01f9015.js",revision:null},{url:"assets/book_patterns_module-system_commonjs-modules.md.a01f9015.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.13ed9ad6.js",revision:null},{url:"assets/book_patterns_module-system_esm-cjs-interoperability.md.13ed9ad6.lean.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.65dfd6e8.js",revision:null},{url:"assets/book_patterns_module-system_esm.md.65dfd6e8.lean.js",revision:null},{url:"assets/book_patterns_module-system_index.md.e66e7b64.js",revision:null},{url:"assets/book_patterns_module-system_index.md.e66e7b64.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.92aae05f.js",revision:null},{url:"assets/book_patterns_module-system_module-define-patterns.md.92aae05f.lean.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.71c12932.js",revision:null},{url:"assets/book_patterns_module-system_module-system-in-js-and-node.md.71c12932.lean.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.3d5f85cf.js",revision:null},{url:"assets/book_patterns_module-system_summary.md.3d5f85cf.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.10ec7708.js",revision:null},{url:"assets/book_patterns_module-system_the-module-system-and-its-patterns.md.10ec7708.lean.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.07f99b26.js",revision:null},{url:"assets/book_patterns_module-system_the-need-for-modules.md.07f99b26.lean.js",revision:null},{url:"assets/book_patterns_the-module-system.md.23bd6857.js",revision:null},{url:"assets/book_patterns_the-module-system.md.23bd6857.lean.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.10e05324.js",revision:null},{url:"assets/book_patterns_the-node-platform.md.10e05324.lean.js",revision:null},{url:"assets/book_vite_1.md.c9d725b4.js",revision:null},{url:"assets/book_vite_1.md.c9d725b4.lean.js",revision:null},{url:"assets/book_vite_10.md.1c34e5da.js",revision:null},{url:"assets/book_vite_10.md.1c34e5da.lean.js",revision:null},{url:"assets/book_vite_11.md.ff029db1.js",revision:null},{url:"assets/book_vite_11.md.ff029db1.lean.js",revision:null},{url:"assets/book_vite_12.md.0ef94c5f.js",revision:null},{url:"assets/book_vite_12.md.0ef94c5f.lean.js",revision:null},{url:"assets/book_vite_14.md.e9070204.js",revision:null},{url:"assets/book_vite_14.md.e9070204.lean.js",revision:null},{url:"assets/book_vite_15.md.be784503.js",revision:null},{url:"assets/book_vite_15.md.be784503.lean.js",revision:null},{url:"assets/book_vite_16.md.0e6ca53c.js",revision:null},{url:"assets/book_vite_16.md.0e6ca53c.lean.js",revision:null},{url:"assets/book_vite_17.md.4ebdea87.js",revision:null},{url:"assets/book_vite_17.md.4ebdea87.lean.js",revision:null},{url:"assets/book_vite_18.md.521f9861.js",revision:null},{url:"assets/book_vite_18.md.521f9861.lean.js",revision:null},{url:"assets/book_vite_19.md.91396c83.js",revision:null},{url:"assets/book_vite_19.md.91396c83.lean.js",revision:null},{url:"assets/book_vite_2.md.88da9bb2.js",revision:null},{url:"assets/book_vite_2.md.88da9bb2.lean.js",revision:null},{url:"assets/book_vite_3.md.3b5cadcd.js",revision:null},{url:"assets/book_vite_3.md.3b5cadcd.lean.js",revision:null},{url:"assets/book_vite_4.md.1fd196ab.js",revision:null},{url:"assets/book_vite_4.md.1fd196ab.lean.js",revision:null},{url:"assets/book_vite_7.md.2251d0c4.js",revision:null},{url:"assets/book_vite_7.md.2251d0c4.lean.js",revision:null},{url:"assets/book_vite_8.md.d6a1018d.js",revision:null},{url:"assets/book_vite_8.md.d6a1018d.lean.js",revision:null},{url:"assets/book_vite_9.md.d6694d26.js",revision:null},{url:"assets/book_vite_9.md.d6694d26.lean.js",revision:null},{url:"assets/book_webpack_1.md.c5138a8d.js",revision:null},{url:"assets/book_webpack_1.md.c5138a8d.lean.js",revision:null},{url:"assets/book_webpack_10.md.6588dddf.js",revision:null},{url:"assets/book_webpack_10.md.6588dddf.lean.js",revision:null},{url:"assets/book_webpack_11.md.0f55ca0c.js",revision:null},{url:"assets/book_webpack_11.md.0f55ca0c.lean.js",revision:null},{url:"assets/book_webpack_13.md.f6a17a85.js",revision:null},{url:"assets/book_webpack_13.md.f6a17a85.lean.js",revision:null},{url:"assets/book_webpack_16.md.b7ce20c2.js",revision:null},{url:"assets/book_webpack_16.md.b7ce20c2.lean.js",revision:null},{url:"assets/book_webpack_18.md.58a31a13.js",revision:null},{url:"assets/book_webpack_18.md.58a31a13.lean.js",revision:null},{url:"assets/book_webpack_2.md.bdd1ab2e.js",revision:null},{url:"assets/book_webpack_2.md.bdd1ab2e.lean.js",revision:null},{url:"assets/book_webpack_3.md.2b743b97.js",revision:null},{url:"assets/book_webpack_3.md.2b743b97.lean.js",revision:null},{url:"assets/book_webpack_index.md.6d654421.js",revision:null},{url:"assets/book_webpack_index.md.6d654421.lean.js",revision:null},{url:"assets/chunks/2-2.d082000c.js",revision:null},{url:"assets/chunks/8-1.5dd53b82.js",revision:null},{url:"assets/chunks/circular-dependencies.c2985898.js",revision:null},{url:"assets/chunks/framework.7812daa2.js",revision:null},{url:"assets/chunks/pipe-stream-example.11e35dd0.js",revision:null},{url:"assets/chunks/theme.f0f59a04.js",revision:null},{url:"assets/circular-dependencies.7be6df3b.png",revision:null},{url:"assets/core_events_index.md.72e450ab.js",revision:null},{url:"assets/core_events_index.md.72e450ab.lean.js",revision:null},{url:"assets/core_stream_index.md.edf273a1.js",revision:null},{url:"assets/core_stream_index.md.edf273a1.lean.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.e5580af3.js",revision:null},{url:"assets/core_stream_stream-in-practice.md.e5580af3.lean.js",revision:null},{url:"assets/core_stream_stream-visualization.md.f668cb3c.js",revision:null},{url:"assets/core_stream_stream-visualization.md.f668cb3c.lean.js",revision:null},{url:"assets/depenency-loop.a57756fe.png",revision:null},{url:"assets/evaluation.165bfc2d.png",revision:null},{url:"assets/framework_express_index.md.0666fa15.js",revision:null},{url:"assets/framework_express_index.md.0666fa15.lean.js",revision:null},{url:"assets/framework_nestjs_index.md.9049d183.js",revision:null},{url:"assets/framework_nestjs_index.md.9049d183.lean.js",revision:null},{url:"assets/index.md.801b707b.js",revision:null},{url:"assets/index.md.801b707b.lean.js",revision:null},{url:"assets/instantiation.076c5b08.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/lib_fs-extra_copy.md.e16072ff.js",revision:null},{url:"assets/lib_fs-extra_copy.md.e16072ff.lean.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.6580b4cc.js",revision:null},{url:"assets/lib_fs-extra_emptyDir.md.6580b4cc.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.227c46f3.js",revision:null},{url:"assets/lib_fs-extra_ensureDir.md.227c46f3.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.750f1843.js",revision:null},{url:"assets/lib_fs-extra_ensureFile.md.750f1843.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.92fd2c02.js",revision:null},{url:"assets/lib_fs-extra_ensureLink.md.92fd2c02.lean.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.8e838dc2.js",revision:null},{url:"assets/lib_fs-extra_ensureSymlink.md.8e838dc2.lean.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.41933434.js",revision:null},{url:"assets/lib_fs-extra_fs-write-read-writev.md.41933434.lean.js",revision:null},{url:"assets/lib_fs-extra_index.md.b83bffc4.js",revision:null},{url:"assets/lib_fs-extra_index.md.b83bffc4.lean.js",revision:null},{url:"assets/lib_fs-extra_move.md.4327c650.js",revision:null},{url:"assets/lib_fs-extra_move.md.4327c650.lean.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.146c8ead.js",revision:null},{url:"assets/lib_fs-extra_outputFile.md.146c8ead.lean.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.784927b5.js",revision:null},{url:"assets/lib_fs-extra_outputJson.md.784927b5.lean.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.e61745d8.js",revision:null},{url:"assets/lib_fs-extra_pathExists.md.e61745d8.lean.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.f4ac3dc6.js",revision:null},{url:"assets/lib_fs-extra_readJson.md.f4ac3dc6.lean.js",revision:null},{url:"assets/lib_fs-extra_remove.md.4c59874e.js",revision:null},{url:"assets/lib_fs-extra_remove.md.4c59874e.lean.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.0365fc58.js",revision:null},{url:"assets/lib_fs-extra_writeJson.md.0365fc58.lean.js",revision:null},{url:"assets/linear-graph.3a44d8ed.png",revision:null},{url:"assets/linking.b5d1baae.png",revision:null},{url:"assets/manager_babel.md.2c00733c.js",revision:null},{url:"assets/manager_babel.md.2c00733c.lean.js",revision:null},{url:"assets/manager_basic.md.3cd467e4.js",revision:null},{url:"assets/manager_basic.md.3cd467e4.lean.js",revision:null},{url:"assets/manager_recipe.md.b98877b2.js",revision:null},{url:"assets/manager_recipe.md.b98877b2.lean.js",revision:null},{url:"assets/manager_vite.md.e947143b.js",revision:null},{url:"assets/manager_vite.md.e947143b.lean.js",revision:null},{url:"assets/manager_webpack.md.60e05365.js",revision:null},{url:"assets/manager_webpack.md.60e05365.lean.js",revision:null},{url:"assets/parsing-cyclic-dep.a8ffb4f2.png",revision:null},{url:"assets/stream-cheatsheet-1.3fb926c3.png",revision:null},{url:"assets/stream-cheatsheet-2.e6221828.png",revision:null},{url:"assets/style.7aaf77d9.css",revision:null},{url:"assets/v18doc_File-System.md.daa69713.js",revision:null},{url:"assets/v18doc_File-System.md.daa69713.lean.js",revision:null},{url:"assets/v18doc_Path.md.5a5735ef.js",revision:null},{url:"assets/v18doc_Path.md.5a5735ef.lean.js",revision:null},{url:"blog/dive/index.html",revision:"bfee2ad4e240f164a8980c4394e6b981"},{url:"blog/first.html",revision:"0bf0fa0385f0e0c04785317be132950c"},{url:"blog/misc/module.html",revision:"8256ed2bf8af3b720fdcb607cd7202ed"},{url:"blog/misc/ts-and-express.html",revision:"e12851b4d5d46b0b007b3a9407a83cfc"},{url:"blog/resource/advanced.html",revision:"de3840688316b61cf5ec841e67fda0da"},{url:"blog/resource/basic.html",revision:"ebb57dcbfa34226798716b5ac7df1fe0"},{url:"blog/translate/file-system-paths.html",revision:"20b423941f077e3eeb1501cef29df90f"},{url:"blog/translate/fs-in-node.html",revision:"d369490257337fa1c8543dbb7f866eb2"},{url:"blog/translate/web-streams-on-node.html",revision:"2bdf4b2083799c7971611e8ec9273ddb"},{url:"book/babel/1.html",revision:"1e14a77206d37a3ac55386f7ced69715"},{url:"book/babel/2.html",revision:"4bec656121ef8f30f7e9e9ca771a0aa3"},{url:"book/babel/3.html",revision:"9b0307f7aadc922abf51b92a0551a5a1"},{url:"book/babel/4.html",revision:"7987cb6626aa8048a45308bd24f6c10e"},{url:"book/babel/5.html",revision:"062447f94524d5a95b9ab2302853cf4d"},{url:"book/babel/6.html",revision:"2aa28423154503f89d4d4fa72ce1ba6e"},{url:"book/babel/index.html",revision:"886da5c2111598821c2221d0bbde425f"},{url:"book/patterns/callback-and-events.html",revision:"eefdfdbd3844fa93f960d8fb57064b3e"},{url:"book/patterns/module-system/commonjs-modules.html",revision:"ec19cc63b932da11c038f64ecc49e2af"},{url:"book/patterns/module-system/esm-cjs-interoperability.html",revision:"12615f72604a88aa18cb8f8c6b4c066a"},{url:"book/patterns/module-system/esm.html",revision:"b50fa9bf4bad6916ef801f2736ab6898"},{url:"book/patterns/module-system/index.html",revision:"a82bb6ceaeeeed3b8ff480ec09e88976"},{url:"book/patterns/module-system/module-define-patterns.html",revision:"08e52abaa44ef2b15380f2c1abe82bae"},{url:"book/patterns/module-system/module-system-in-js-and-node.html",revision:"8339760371162e0787e58051b1018909"},{url:"book/patterns/module-system/summary.html",revision:"a440deeab27d921abb4b97cfba207a4e"},{url:"book/patterns/module-system/the-module-system-and-its-patterns.html",revision:"1d1f668077c005bea9fde1b2c6a69801"},{url:"book/patterns/module-system/the-need-for-modules.html",revision:"0dd1a2e29f43fcad9572e56347f366ce"},{url:"book/patterns/the-module-system.html",revision:"3760fd3ad7667d17b373d7e2fd98992f"},{url:"book/patterns/the-node-platform.html",revision:"37365e38775ecb5e6adcd698276d6872"},{url:"book/vite/1.html",revision:"88e962d25f21f92c79a0c2a69e01aae1"},{url:"book/vite/10.html",revision:"c4881a0bec54b90c26454762e7d8dc0c"},{url:"book/vite/11.html",revision:"a1466c3510ebdc2d3bd1311073ce1392"},{url:"book/vite/12.html",revision:"40e565219cff5920989b2b87126ee964"},{url:"book/vite/14.html",revision:"e727f574c1a7153d4e4e16a6867e4db9"},{url:"book/vite/15.html",revision:"62615c2450572787a44b6080872fe704"},{url:"book/vite/16.html",revision:"ed39e0b3227a0ab6500abb00d3808706"},{url:"book/vite/17.html",revision:"8b1cf94f206318e94bba3f239e6f3859"},{url:"book/vite/18.html",revision:"76aa34909af1b073c7aef2fdf34def0f"},{url:"book/vite/19.html",revision:"bb36fbea9ab16e66262c9241d5abfb67"},{url:"book/vite/2.html",revision:"9a0a496f43c5d96146d6c40460c2c3a9"},{url:"book/vite/3.html",revision:"65cc2c2e00a7d0cf6ce7f0b28bd3224c"},{url:"book/vite/4.html",revision:"872fc2feca216843b583bddef789e8d3"},{url:"book/vite/7.html",revision:"37391c57661385567e333a3ab017def0"},{url:"book/vite/8.html",revision:"005a707cdb024c975f7e27104bf07cc6"},{url:"book/vite/9.html",revision:"58ffeb808a0063f3a556de29c4af17a6"},{url:"book/webpack/1.html",revision:"5a9624331e1f09110973be4fed62004a"},{url:"book/webpack/10.html",revision:"d7c1e7d4ab6bdf1cdd32ad4a914ad35b"},{url:"book/webpack/11.html",revision:"7d5d3104bb999cb8c069af6d0c57b116"},{url:"book/webpack/13.html",revision:"86628ffea132f29ebdc6499566e9bf69"},{url:"book/webpack/16.html",revision:"499afa7ed2cfb29f057c0f525067a548"},{url:"book/webpack/18.html",revision:"9fde0377209d3e4a229419c2a6f65916"},{url:"book/webpack/2.html",revision:"929323f3ff26ae72d62332d3f2c2a499"},{url:"book/webpack/3.html",revision:"d65d0b3f4dede8947796ff2622fb3d85"},{url:"book/webpack/index.html",revision:"0d8548e2a50c732df37f5e1a09d2961a"},{url:"core/events/index.html",revision:"c53b66de6a09d75d6cefe6454b52561e"},{url:"core/stream/index.html",revision:"858ae914aad1a94f5d4b916ab29ef0f1"},{url:"core/stream/stream-in-practice.html",revision:"c4ccbf0ebc6086e62adc040570a78997"},{url:"core/stream/stream-visualization.html",revision:"03d22e84fbf56a36b2d7c047d6ddf473"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"framework/express/index.html",revision:"8f2939ff9a38712a1a384ebe654180fb"},{url:"framework/nestjs/index.html",revision:"edd9d41ded715b5752c2c70a986dbb73"},{url:"index.html",revision:"4217a8dfaef821f0a9b242051690d761"},{url:"lib/fs-extra/copy.html",revision:"d1d0ac1d895b3b9e54b386d2e5043367"},{url:"lib/fs-extra/emptyDir.html",revision:"54eda2ebf13f639b1304b86809aeab70"},{url:"lib/fs-extra/ensureDir.html",revision:"ceb51158c6e3dcd6daa8ff304f7badf4"},{url:"lib/fs-extra/ensureFile.html",revision:"ec82be176863fb52370efd94db1ead3c"},{url:"lib/fs-extra/ensureLink.html",revision:"096cee117d0e1950bafd33b8a31938b2"},{url:"lib/fs-extra/ensureSymlink.html",revision:"8cf31923defa6ed627928e4a3e5d733a"},{url:"lib/fs-extra/fs-write-read-writev.html",revision:"d0a87fb7c7bd4ab7ea71628dde9fe15f"},{url:"lib/fs-extra/index.html",revision:"c0a469ead807e5f956590fad16b0e60b"},{url:"lib/fs-extra/move.html",revision:"dddaee8c393ac3e93c7e7f5e21b3f948"},{url:"lib/fs-extra/outputFile.html",revision:"d890cb6d8498841a15dfe4aa9ae3b892"},{url:"lib/fs-extra/outputJson.html",revision:"9f2298809832b46df77a6e20325026a2"},{url:"lib/fs-extra/pathExists.html",revision:"7df644c95c7cff815da033ac0ecf8e69"},{url:"lib/fs-extra/readJson.html",revision:"1b59dc33b78de4347fb7a8801a07a9d0"},{url:"lib/fs-extra/remove.html",revision:"dafc5e0888b5f76667791a590e035a73"},{url:"lib/fs-extra/writeJson.html",revision:"042487bca361350718a576e37320dd22"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"manager/babel.html",revision:"dc0d2bad33e27eb769cd5327b293a276"},{url:"manager/basic.html",revision:"b2b33fb78ea506fab64f789138a319bd"},{url:"manager/recipe.html",revision:"6fdc00ff1dd67c04e2d57cdbbabf3309"},{url:"manager/vite.html",revision:"8d9e21ec5edc90863d8bd9250ebe2604"},{url:"manager/webpack.html",revision:"9a8b02339d4992806d89c188feefb7b6"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"registerSW.js",revision:"08e46a1898dfc99571b3a55eb5c84a3b"},{url:"v18doc/File-System.html",revision:"2a80f8a151798cd309a687ab99733892"},{url:"v18doc/Path.html",revision:"2f94e889fd1f281abbe832ed2b0d823e"},{url:"favicon.ico",revision:"04eaabfba88b8bccd261968e170b98ac"},{url:"logo.svg",revision:"e92f28fa94b89054e9b1211e8186cc02"},{url:"pwa-192x192.png",revision:"8843c0d4e5a7ae47c36249b58d97f245"},{url:"pwa-512x512.png",revision:"5f9c6e860a28190a3fe54b089f552da0"},{url:"manifest.webmanifest",revision:"33fe93e5f0b3a8fd759234ae10518314"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
