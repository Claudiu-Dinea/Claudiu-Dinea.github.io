'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bdfc08b8d2e60aa3f0e270e265950efe",
"index.html": "2affd8c1e4807526f3c25c2a2d9ea95f",
"/": "2affd8c1e4807526f3c25c2a2d9ea95f",
"main.dart.js": "183e092c7ea0b5a5953510be9e1c40b9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73cda69756a93565c285e0ab01aa80b9",
".git/config": "2f7012121910156b6e3bc79e4147cae6",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/57/cfc5c2d3e0eef9ff0f8fd8a4ef807979be9160": "4e30797917a5e04859e7112cb04897f8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/6d8376f802158c32a0082efe465d9cc42a5f11": "edbbcc3af822bf8e7d4867504ca5679d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/d299cff7f2dd25ff35583154857b0114c5cad1": "f5d287df55cc6b024f7a1472c76bdd54",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/9a0df092b94417a156a30f8daaed3c28223f2d": "b9f9116e08d271890e0b0bbdcca0381d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/0e1c84a3d6193d67bf5d11b17c0ceb5a8267b8": "d565d604bc0f18874ce9b430124b180e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/d0fcb40ec761ccced488d783fc77a4276548db": "26d43f599cc9b63ac4c147bc750bc16a",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/a5/7db6b16cc1d3d26a5356970bba1ae14d6cd6f6": "39b3da1a78d8e17276f4dd26a19f8a22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7b0f8b6b8837564f9098dc81b26c5d9bda123c": "3f83233a5e253b91a92921bd3542fb89",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/9dc5b512b51bde493a93b3c1f820b9a2519ad5": "5da1e52035423dd6675187f817683d3c",
".git/objects/d8/a43a53b6a4b41c95c4d079d9ec114f50b93c4e": "0efb7049178a4799f96d62523f0583d9",
".git/objects/ab/460031bdd59d6b5ad14735f02c76d57f2b3a7a": "1fa6205ae6edde6be63d99fc28453981",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/a7a3d1f5eabe93d2cfc3a203aea26fe0688b3b": "6ca15295463810fb71c77e9414eff9b4",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/ed/df496036a183c4405c2b6a617872b656dd5f7f": "31159df2360233ff51533f87f39f6ecb",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/42/857b72d550bef013a8856a5efc4e335e657180": "7819429679289eeca254fbe7b8dbe557",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/87/4dce5ad9da1611dfd288848e16463ece4b140c": "b90763f1014bbf0c93405da4f1bc705e",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/bf11d2bf82a8eca3996a4e1516031f7d8cbfd5": "435ec1f869d06858529cc9a5c9812044",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/81731539aa811b4f0e69aa547cff7f7c2a3ecb": "0a0abb2d337b71e1e2d4271c4fd35cd5",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/119a3f3483800113c1bde6eaaaf73c38c4bf31": "2596356160a5cf5d5c994431664252cd",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/09c1cff42fac5b784a144de2243a6adec7759c": "c0589426ffe41992a1d38764904ae7ca",
".git/objects/75/951cfb5e92278e2b8bf9da44847fcf76ff73d0": "734f986193f0cfa9f6cb6995a8d52c30",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/43/1d0d49eadf5b6f13fe26cd7c060a6c53fc249d": "67ffb2c7ed469c051eb5970eaf8284e2",
".git/objects/43/0ae0fd8fdad51c6534673d1dab657994d28476": "0d1a5d8ed974b42cd41eb3e4ad653de1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e5b7b7cb7d5a3e8a37e759091d35bc2a95940c": "3bf30761ba1c56545e958fb8899c907c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/53c4140ec12b5543f5e515ec6d92ddc9c77fcd": "3598117beb23fe401783a95a71c81729",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/969428abaa843db9b2ebd84b10b5ffe4a32155": "2eae247c9d8fc60f4f9857b407098234",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/bab9774dddd2950b5053b2e50c0c2151e05240": "c9ae8a60e7c716393ac2a5e068f7aee6",
".git/objects/5e/6d4aff2df84469353090067686e308eedb1689": "9166044097227920412cd44d5c7a3ea2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/39/62ff18f6f68c4d4d80e60e8fc6bf5ca6d95635": "81199a37adaa69845f6329f65dbcf5f1",
".git/objects/99/7dde6dec97407b2557b5c258751ac17d8e7aa5": "0198182e8c6fd6aaca07a0acaa97375c",
".git/objects/97/93f029ada7df5bd126e8784b5d6afd2df0e311": "9be41cf470e7d5d55a720e053dacdae7",
".git/objects/0f/51bba9619ae650d4e60534849f0bc9522f6e9a": "03f028cd1c2422687245f31875035792",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/1b55fa564dd5dc71dbe5163860ed198d3b6e15": "d12ca2e2ecb8bdaf8f628da503bbae3d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/6fc0b85dc11916f51cccbfc76f80a3fa60ede9": "529429609ad963bc24badc940e6d079b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/d88c32a19beb0a5a15115fd0fcaafbcdedc3c2": "5e831b9950d6233606533c2364258dd6",
".git/objects/e6/65d2aa2e94f217c25623cac65b72297cac0b2e": "4d6e6f9a42028673032e79072812122f",
".git/objects/f9/881a0240f6498e3a5557562e25bf084cd9b069": "7ce519f4385cb2622263911bb40fa723",
".git/objects/f9/124b382f44212577985384cb8c7d3f759996a0": "499b163267dd353d15f75a07445250d3",
".git/objects/c2/ea6989782fa7af09c6c1cf190f79763038ec11": "5746d0a23bad7578bdbfa2bdf238a590",
".git/objects/c2/3ef4473e29e0df37a90a6a19f17698fcefb96d": "55e4ac4d57ad40418ec0247e1d31d7b8",
".git/objects/e7/9ea955b57f4c8ecb1ca1f939342bd9d0ab1def": "c9a6475ab6dbaa87ed950db8035622ad",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ce/c631f0563f98778d9072370b61808fc08b220b": "6bb6459c60e37fb519a05349d307c33c",
".git/objects/e0/950087559d9b66aca85d5dba993e0a1888077d": "7e2c0108a7182251df6d1b292701ab9e",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/07602e09417151e4f18f370f77fa6b4ebfd630": "65a7197319ca7b4f0ddaba8ad988e5ce",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/24/22c5a43e3efed293c9e9dae9dcd4e97b8d0e44": "7f6de2340e3517ec11b095fbb3276cdc",
".git/objects/24/0331eda5e9114830a0cfc9d1225f913fd96b5f": "790c431b4c51ee7c229339365b7e4407",
".git/objects/71/401d61078b4d10bfbe16e02b03626932b8088b": "15b5dcc3771fb8a71fcffb6c222c40e6",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/76/4575eb8fb133f6ca4873ae860d155875cfbf43": "90dc4ad853c7bccd4e9d001afa18cee7",
".git/objects/76/35615ba612572636d39cdf6aafa8d72a47c255": "6d2ea15030fa03d973072e7b51f6389d",
".git/objects/40/9aba4a595aa1785fb921c5e16e94a3d8358755": "da2381d498e6f20d6f1394cc794e9417",
".git/objects/40/6e73925afc5a4d0045f7d22b0dde3afa87f56d": "619138bdb4da914d3050de306141497a",
".git/objects/2e/939faf23fd82789b506370a5e2e9d9cd4462e4": "9190febec5eb44ec1b806c9eed6e1d51",
".git/objects/8b/87dfbe9f8f7e96b351d7fe1b9af2acf4b9148c": "fdbaf838f84453b98a39ad7bec05cc19",
".git/objects/7f/d00edbe65430b349d652728a520efe92cf06c9": "5326c2c288a39d3c4b619e8fb37ece9e",
".git/objects/14/be6b714929614423cc47853e3b7c4011423b36": "a6ad86b9a6df71d088d473c428408adc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7db5fc14fd00e58fe43542f1977b3fd6",
".git/logs/refs/heads/main": "7db5fc14fd00e58fe43542f1977b3fd6",
".git/logs/refs/remotes/origin/main": "66fa8a7adf4c909e6c76af6ab043510d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6cadd8e40fd46a0413a4eb91800c3fbb",
".git/refs/remotes/origin/main": "6cadd8e40fd46a0413a4eb91800c3fbb",
".git/index": "d8dca6974512322b06eb8fb6b574d9e2",
".git/COMMIT_EDITMSG": "b7269fa2508548e4032c455818f1e321",
"assets/AssetManifest.json": "4048fd5824896eb5231847baf8d8dd07",
"assets/NOTICES": "8d543c257ccbe4e4ee672fb9397ace2c",
"assets/FontManifest.json": "b2907a9a518a80c57cad8730653e321e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d42e74ac44d37590fa8e14b679da288f",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/dots.png": "1b58c1a488bd8f3f39209587ae9f6196",
"assets/assets/images/favorite_restaurant/booking_page.png": "2bc5a0f8d5b855d953a1848acb8fc273",
"assets/assets/images/favorite_restaurant/payment_page.png": "33933586c92258f095e6d1efb6e436fa",
"assets/assets/images/favorite_restaurant/home_page.png": "1b07d71bb9803fdbfb1e5abc9e014325",
"assets/assets/images/favorite_restaurant/restaurant_page.png": "ae618bb3c340a2c8417472ddc2af0099",
"assets/assets/images/favorite_restaurant/food_page.png": "607037358a867c6f669b59f3a7a5b7e6",
"assets/assets/images/favorite_restaurant/profile_page.png": "1184bf070ff85bc642071245126095ad",
"assets/assets/images/uvt_forms/section_1_2.png": "281414e86e398ae47533a4cb61c21d1e",
"assets/assets/images/uvt_forms/section_1_1.png": "749487dc201a698a348f754284151730",
"assets/assets/images/uvt_forms/section_2.png": "81ea517e469119a6d4f670e7f8d26760",
"assets/assets/images/uvt_forms/home_page.png": "fc261920d02004d0b82b72e4dc77927a",
"assets/assets/images/dots_app_bar.png": "e36c168a6e8268db98012e935ea06d9d",
"assets/assets/icons/menu_icon.png": "1f72b0292e4b8f02ca4068b126e83165",
"assets/assets/fonts/nunito/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/nunito/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/nunito/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/nunito/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/fonts/nunito/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/nunito/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/nunito/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/animations/arrow_lottie_animation.json": "240017e303534e762d2b68ddc472794a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
