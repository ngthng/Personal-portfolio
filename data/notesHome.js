import {Notes, Note, InstagramNote} from '../scripts/noteContent.js'
import {shuffle} from '../scripts/utils/shuffleArray.js';

const welcomeNote = new Note(
  'welcome',
  ` 
    <p>
      Welcome to Theo's Kitchen, where (mostly) everthing is possible! Currently I am:
    </p>
    <ul>
      <li>Creating this webpage!</li>
      <li>Adding carousels from Instagram <a href="https://www.instagram.com/yootheocoooks/" target="_blank">@yootheocoooks</a></li>
      <li>Exploring baking with friends</li>
      <li>In the process of moving house/job so I would have less time to play around :(</li>
    </ul>
  `,
  9,
  3
);

const homePageInstructions = new Note(
  'home-instructions',
  `
    <p>
      This home page is where most of my cookings are. The squares you see are what I call "Notes". Click on the Notes to go to the post on my Instagram page!<br><br>
      Future features: 
    </p>
    <ul>
      <li>Instagram pop-up window when the Note is clicked</li>
      <li>Instagram likes and comments when the Note is hovered</li>
      <li>Each food Note automatically shows other shots of the featured dish</li>
      <li>Cooler transitions :)</li>
    </ul>
  `,
  5,
  7
);

const whyCookingBlog = new Note(
  'why-cooking-blog',
  `
  <p>
    The cooking blog is where I test out different HTML, CSS, Javascript, and web design skills. I'm still a learner, so don't be too harsh to me pls.
  </p>
  `,
  6,
  2
);

const whyCookNote = new Note(
  'why-cook',
  `
    <p>
      I usually cook when I  see something cool on Instagram or generally just cook with my loved ones. It's also a good way to decompress from a mental block.
    </p>
  `,
  2,
  6
);

const navNote = new Note(
  `navigation`,
  `
    <p>
      Click on one of these Menu items to explore recipes! (Coming soon)
    </p>
    <ul>
      <li><a href="./appetizers.html">Appetizer</a></li>
      <li><a href="./entrees.html">Entree</a></li>
      <li><a href="./desserts.html">Desserts</a></li>
    </ul>
  `,
  2,
  4
);

const instagramEnokiBeef = new InstagramNote (
  'instagram-enoki-beef',
  '',
  5,
  5,
  '../Photos/Instagram/enokiBeef.jpg',
  'https://www.instagram.com/p/C6Sj7GyrHEp/'
);

const instagramEnglishBreakfast = new InstagramNote (
  'instagram-english-breakfast',
  '',
  4,
  4,
  '../Photos/Instagram/englishBreakfast1.jpg',
  'https://www.instagram.com/p/C-TS1phSQq-/'
);

const instagramBasqueCheesecake = new InstagramNote (
  'instagram=basque-cheesecake',
  '',
  6,
  6,
  '../Photos/Instagram/basqueCheesecake.jpg',
  'https://www.instagram.com/p/C9vNTqYSgB8/'
);

const instagramBirriaTacos = new InstagramNote (
  'instagram-birria-tacos',
  '',
  3,
  3,
  '../Photos/Instagram/birriaTacos.jpg',
  'https://www.instagram.com/p/C91B19fvZg-/'
);

const newIdeas = new Note(
  'new-idea',
  `
  <p>
    If you have any feedback or new ideas for my cooking/website, don't hesitate to reach out to me (again heheeeh) <a target="_blank" href="https://www.instagram.com/yootheocoooks/">@yootheocoooks</a> on Instagram 
  </p>
  `,
  11,
  1
);

const whyRandom = new Note(
  'why-random',
  `
  <p>
    If you refresh the home page, you may notice that the order of my Notes are randomized. Why so? I want to convey the spontaneous mindeset that I approach with my dishes. Life is unpredictable, and so is my next meal lol.
  <p>
  `,
  5,
  3
)

const instagramSteakSeries = new InstagramNote(
  'instagram-steakSeries',
  '',
  4,
  4,
  `../Photos/Instagram/steakSeries.jpg`,
  `https://instagram/p/C8scTxxyNea`
);

const instagramPumpkinSoup = new InstagramNote(
  'instagram-pumpkin-soup',
  '',
  5,
  5,
  `../Photos/Instagram/pumpkinSoup.jpg`,
  `https://www.instagram.com/p/C6SjutgLmMM/`
);

const instagramBanhXeo = new InstagramNote(
  'instagram-banh-xeo',
  '',
  5,
  5,
  `../Photos/Instagram/banhXeo.jpg`,
  `https://www.instagram.com/p/CyH9vvQO1kU/`
);

const instagramPorkKatsu = new InstagramNote(
  'instagram-pork-katsu',
  '',
  3,
  3,
  `../Photos/Instagram/porkKatsu.jpg`,
  `https://www.instagram.com/p/CxzVYkmr3NH/`
);

const instagramPhoBo = new InstagramNote(
  'instagram-pho-bo',
  '',
  3,
  3,
  `../Photos/Instagram/phoBo.jpg`,
  `https://www.instagram.com/p/CubZ_8vuU8F/`
);

const instagramComTam = new InstagramNote(
  'instagram-com-tam',
  '',
  5,
  5,
  `../Photos/Instagram/comTam.jpg`,
  `https://www.instagram.com/p/CuWLnDeuj_V/`
);

const instagramTiramisu = new InstagramNote(
  'instagram-tiramisu',
  '',
  3,
  3,
  `../Photos/Instagram/tiramisu.jpg`,
  `https://www.instagram.com/p/C8JZikauIY1/`,
);


const instagramFocaccia = new InstagramNote(
  'instagram-focaccia',
  '',
  5,
  5,
  `../Photos/Instagram/focaccia.jpg`,
  `https://www.instagram.com/p/C78jcdEuoCV/`,
);

const instagramLemonPie = new InstagramNote(
  'instagram-lemon-pie',
  '',
  6,
  6,
  `../Photos/Instagram/lemonPie.jpg`,
  `https://www.instagram.com/p/C78kiwVO36O/`,
);

const instagramKimchiPancake = new InstagramNote(
  'instagram-kimchi-pancake',
  '',
  4,
  4,
  `../Photos/Instagram/kimchiPancake.jpg`,
  `https://www.instagram.com/p/Cuc20t3S3JL/`,
);

const instagramCharsiuRamen = new InstagramNote(
  'instagram-charsiu-ramen',
  '',
  3,
  3,
  `../Photos/Instagram/charsiuRamen.jpg`,
  `https://www.instagram.com/p/CuWLI2uuYby/`,
);

const pizzaNote = new InstagramNote(
  'instagram-pizza',
  '',
  3,
  3,
  `../Photos/Instagram/pizza.jpg`,
  `https://www.instagram.com/yootheocoooks/`,
);

const instagramTanghulu = new InstagramNote(
  'instagram-tanghulu',
  '',
  5,
  5,
  `../Photos/Instagram/tanghulu.jpg`,
  `https://www.instagram.com/p/C78kJBeOwtK/`,
);

const instagramEggDropSoup = new InstagramNote(
  'instagram-egg-drop-soup',
  '',
  3,
  3,
  `../Photos/Instagram/eggDropSoup.jpg`,
  `https://www.instagram.com/p/C4Cbmd5LQm1/`,
);

const otherNotes = [
  homePageInstructions,
  whyCookNote,
  instagramBasqueCheesecake.randomSquareSize(),
  navNote,
  whyRandom,
  whyCookingBlog,
  instagramEnglishBreakfast.randomSquareSize(),
  instagramBirriaTacos.randomSquareSize(),
  instagramSteakSeries.randomSquareSize(),
  instagramPumpkinSoup.randomSquareSize(),
  instagramBanhXeo.randomSquareSize(),
  instagramPhoBo.randomSquareSize(),
  instagramPorkKatsu.randomSquareSize(),
  instagramComTam.randomSquareSize(),
  instagramKimchiPancake.randomSquareSize(),
  instagramLemonPie.randomSquareSize(),
  instagramTiramisu.randomSquareSize(),
  instagramFocaccia.randomSquareSize(),
  instagramCharsiuRamen.randomSquareSize(),
  pizzaNote.randomSquareSize(),
  instagramTanghulu.randomSquareSize(),
  instagramEnokiBeef.randomSquareSize(),
  instagramEggDropSoup.randomSquareSize(),
];

shuffle(otherNotes);

export const homeNote = new Notes(  
  [welcomeNote]
  .concat(otherNotes)
  .concat([newIdeas])
)
