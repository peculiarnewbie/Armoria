if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return a[e]||(r=new Promise((async r=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},r=(r,a)=>{Promise.all(r.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(r)};self.define=(r,s,c)=>{a[r]||(a[r]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return a;case"module":return i;default:return e(r)}}))).then((e=>{const r=c(...e);return a.default||(a.default=r),a}))})))}}define("./sw.js",["./workbox-5d8f33f5"],(function(e){"use strict";e.setCacheNameDetails({prefix:"armoria"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"charges/anchor.svg",revision:"79402a8b5e438f78096c70c3b3eb1841"},{url:"charges/armillarySphere.svg",revision:"16cc33fdd947202f97712ae5e14e099f"},{url:"charges/arrow.svg",revision:"41c8248087225de09fedc482efea947c"},{url:"charges/arrowsSheaf.svg",revision:"894a38dc78fb8b140f7c2d3607bc6aac"},{url:"charges/bearPassant.svg",revision:"5dc53bedf0d03b506fea8b53a7944dd4"},{url:"charges/bearRampant.svg",revision:"e7bd8467c27cae94c44cdab56262de3b"},{url:"charges/bell.svg",revision:"2c190ebf5067fad15737fac122ef6368"},{url:"charges/boarRampant.svg",revision:"6bb7410956f2bbe1cd21a94d27daf8dc"},{url:"charges/boat.svg",revision:"6c87793951f7919202f3acb191f454dd"},{url:"charges/bow.svg",revision:"404cb291f7fa8ba37095fc192e90deea"},{url:"charges/bowWithArrow.svg",revision:"7afafed59f0f6fac5390367e93cc805e"},{url:"charges/buckle.svg",revision:"4b0cac108607c1049d7e03db352f1383"},{url:"charges/bugleHorn.svg",revision:"c882ebd7e20006a0f03a3126bc28a738"},{url:"charges/bullHeadCaboshed.svg",revision:"276518731f83f6a596fa4c4822b3c907"},{url:"charges/bullPassant.svg",revision:"163bf42be9ca72e245232a742c56fb4f"},{url:"charges/cancer.svg",revision:"c5b0569b0fdac401b009708eb2827e2e"},{url:"charges/castle.svg",revision:"5d653699c83e14c2ab3336a4ea512361"},{url:"charges/chalice.svg",revision:"ef54fd7792b79446f9d7e840fa2d29fe"},{url:"charges/cinquefoil.svg",revision:"8c0bfc0fa524855f2bec9e0a502709c2"},{url:"charges/cock.svg",revision:"981b362f2f31bbbffcd24bceb78025e6"},{url:"charges/compassRose.svg",revision:"d5a770a628ad59c7c989d75256823f59"},{url:"charges/cowHorns.svg",revision:"2f95dc99a775ba854fd2cafcb7bc95e0"},{url:"charges/crescent.svg",revision:"aad21376c744243829ffd06d95e0ec00"},{url:"charges/crosier.svg",revision:"bf5a00a2f539b412cc3bcdd58ce88b9f"},{url:"charges/crown.svg",revision:"1c30b0da91d81aa9c78c7451336ee681"},{url:"charges/deerHeadCaboshed.svg",revision:"c35557be54d474f238510f288ebae8b6"},{url:"charges/dolphin.svg",revision:"37f1f3c806c8a7f355befb45a515b3a9"},{url:"charges/dragonPassant.svg",revision:"1deec69dd1d70c92b8389a20a90ce882"},{url:"charges/dragonRampant.svg",revision:"918450eb954e2be8548b2f86512df25a"},{url:"charges/eagle.svg",revision:"554191f190735e180238903366fe53c4"},{url:"charges/eagleTwoHeards.svg",revision:"dda5c843e132a9b56c2ced3e0908b403"},{url:"charges/elephant.svg",revision:"7a117ad2efe1100181bb45942c43c545"},{url:"charges/escallop.svg",revision:"d9c68891a3964842fb4cb0a80ad026c0"},{url:"charges/estoile.svg",revision:"0141d40db25911f80455a150fb8da10c"},{url:"charges/fleurDeLis.svg",revision:"ea2fec9ea8861d72f41c0fe643c86628"},{url:"charges/fountain.svg",revision:"c90815bb8063244a9d7d831e946457a4"},{url:"charges/garb.svg",revision:"99231af9f29dad5f04658458a9b165f2"},{url:"charges/goat.svg",revision:"ff40eb24ee64197a50f4cd061d80de25"},{url:"charges/greyhoundCourant.svg",revision:"182fb85157fc95a9588b1343381b0915"},{url:"charges/griffinPassant.svg",revision:"df00934cede69503ccf42248d06ed7d9"},{url:"charges/griffinRampant.svg",revision:"1c2d397a49060b779c333eb141e3161f"},{url:"charges/hand.svg",revision:"659da69cf8cef5806c0196cbb85c5a9c"},{url:"charges/harp.svg",revision:"d104375a11d343aeaa3a7adbd20d31da"},{url:"charges/hatchet.svg",revision:"de6b9efb82876f2c1189506bc1d9e81b"},{url:"charges/heron.svg",revision:"2eb6945137f3b7aff12220e06b149ee4"},{url:"charges/horseRampant.svg",revision:"d659c2a88406606468269ade8b542883"},{url:"charges/horseSalient.svg",revision:"42dab4b68af40f4febe092eb72579339"},{url:"charges/horseshoe.svg",revision:"c766ff2f3e2efc472a36367ae39a2015"},{url:"charges/key.svg",revision:"405a14068f5bf514bef878ba23567685"},{url:"charges/lamb.svg",revision:"8dd04cd472ac205e04147d6f8dbca623"},{url:"charges/lionPassant.svg",revision:"75f3c66601b5fb6f30e41e1eeb73ca60"},{url:"charges/lionRampant.svg",revision:"a29b110ed8085ae05bdd7b337dfce1a5"},{url:"charges/lochaberAxe.svg",revision:"f19f16410e36f97ad1734ef265752578"},{url:"charges/lute.svg",revision:"590bc3fc36a8ea4179a9a47c2f55f6f4"},{url:"charges/mallet.svg",revision:"559f59e16a605faa7d42ded2f73affc6"},{url:"charges/parrot.svg",revision:"a4cbcce2e9b8e5ead31a0f5b324283a0"},{url:"charges/pegasus.svg",revision:"3a7d42de2ddbeca421c87c0c825e0659"},{url:"charges/pike.svg",revision:"8749adf2fd4de9a5ca5f82b959a84587"},{url:"charges/raven.svg",revision:"a850c1ec058e241699dddb3644993249"},{url:"charges/rose.svg",revision:"bddf7d18e272a0533ab503139304aeba"},{url:"charges/sabre.svg",revision:"acef57e92eca624f26b4bab1d16083e3"},{url:"charges/sabresCrossed.svg",revision:"efc79cd5e2266fe2cb2e7a553ab914e0"},{url:"charges/serpent.svg",revision:"b34535bd137b1954b4cf270dadbb82db"},{url:"charges/stagsAttires.svg",revision:"11cff9692f6e4ea3779915d6c79fa33c"},{url:"charges/sunInSplendour.svg",revision:"e7fce0b752284f2609be08bdb2c6a4d7"},{url:"charges/swan.svg",revision:"ed9e5ec5ab78a2098e3892c082b9da39"},{url:"charges/swanErased.svg",revision:"082485f1b786f9260611cf7d0ef0d627"},{url:"charges/sword.svg",revision:"f985fa291a0af6fe5ba75c9d12feb7ed"},{url:"charges/template.svg",revision:"436cc6172a5b8a1de781a17d4e4eb36b"},{url:"charges/tower.svg",revision:"f79221af02f07fdb04fad2b6e52f380a"},{url:"charges/unicornRampant.svg",revision:"9648546242bfb490973ee6920d513772"},{url:"charges/wheel.svg",revision:"31127a1395e671a5279e209134b97823"},{url:"charges/wing.svg",revision:"9423a8915ea16c40c79a17f52910ba28"},{url:"charges/wingSword.svg",revision:"6f2ff9310404189fe0817549a1bbd00e"},{url:"charges/wolfHeadErased.svg",revision:"5a72582c49a2e5bd36772746e1ed02dc"},{url:"charges/wolfPassant.svg",revision:"c9590a756e3808e7950a373386992511"},{url:"charges/wolfRampant.svg",revision:"dd86f12e821ded8625ffcff6e74a8769"},{url:"charges/wolfStatant.svg",revision:"8f8109819ca1e85741ffbca754768577"},{url:"charges/wyvern.svg",revision:"71c1de3c85c737056eaa540222a32bb9"},{url:"charges/wyvernWithWingsDisplayed.svg",revision:"1e1b51905770ebcfc69e48209c444060"},{url:"logo.svg",revision:"016f30156e22b7be14b92ffaeb9d2c79"},{url:"manifest.json",revision:"454461966b36b5e28c3391cfbe839a85"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.*/,new e.NetworkFirst({cacheName:"armoria-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
