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
)

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
  4,
  7
)

const whyCookingBlog = new Note(
  'why-cooking-blog',
  `
  <p>
    The cooking blog is where I test out different HTML, CSS, Javascript, and web design skills. I'm still a learner, so don't be too harsh to me pls.
  </p>
  `,
  6,
  2
)

const whyCookNote = new Note(
  'why-cook',
  `
    <p>
      I usually cook when I  see something cool on Instagram or generally just cook with my loved ones. It's also a good way to decompress from a mental block.
    </p>
  `,
  2,
  6
)

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
)

const instagramEnglishBreakfast = new InstagramNote (
  'instagram-english-breakfast',
  '',
  4,
  4,
  '../Photos/Instagram/englishBreakfast1.jpg',
  'https://www.instagram.com/p/C-TS1phSQq-/'
)

const instagramBasqueCheesecake = new InstagramNote (
  'instagram=basque-cheesecake',
  '',
  6,
  6,
  '../Photos/Instagram/basqueCheesecake.jpg',
  'https://www.instagram.com/p/C9vNTqYSgB8/'
)

const instagramBirriaTacos = new InstagramNote (
  'instagram-birria-tacos',
  '',
  3,
  3,
  '../Photos/Instagram/birriaTacos.jpg',
  'https://www.instagram.com/p/C91B19fvZg-/'
)

const newIdeas = new Note(
  'new-idea',
  `
  <p>
    If you have any feedback or new ideas for my cooking/website, don't hesitate to reach out to me (again heheeeh) <a target="_blank" href="https://www.instagram.com/yootheocoooks/">@yootheocoooks</a> on Instagram 
  </p>
  `,
  11,
  1
)

const instagramSteakSeries = new InstagramNote(
  'instagram-steakSeries',
  '',
  4,
  4,
  `../Photos/Instagram/steakSeries.jpg`,
  `https://instagram/p/C8scTxxyNea`
)

const instagramPumpkinSoup = new InstagramNote(
  'instagram-pumpkin-soup',
  '',
  5,
  5,
  `../Photos/Instagram/pumpkinSoup.jpg`,
  `https://www.instagram.com/p/C6SjutgLmMM/`
)

const instagramBanhXeo = new InstagramNote(
  'instagram-banh-xeo',
  '',
  5,
  5,
  `../Photos/Instagram/banhXeo.jpg`,
  `https://www.instagram.com/p/CyH9vvQO1kU/`
)

const instagramPorkKatsu = new InstagramNote(
  'instagram-pork-katsu',
  '',
  3,
  3,
  `../Photos/Instagram/porkKatsu.jpg`,
  `https://www.instagram.com/p/CxzVYkmr3NH/`
)

const instagramPhoBo = new InstagramNote(
  'instagram-pho-bo',
  '',
  3,
  3,
  `../Photos/Instagram/phoBo.jpg`,
  `https://www.instagram.com/p/CubZ_8vuU8F/`
)

const instagramComTam = new InstagramNote(
  'instagram-com-tam',
  '',
  5,
  5,
  `../Photos/Instagram/comTam.jpg`,
  `https://www.instagram.com/p/CuWLnDeuj_V/`
)

const otherNotes = [
  homePageInstructions,
  whyCookNote,
  instagramBasqueCheesecake,
  navNote,
  whyCookingBlog,
  instagramEnglishBreakfast,
  instagramBirriaTacos,
  instagramSteakSeries,
  instagramPumpkinSoup,
  instagramBanhXeo,
  instagramPhoBo,
  instagramPorkKatsu,
  instagramComTam
];

shuffle(otherNotes);

export const homeNote = new Notes(  
  [welcomeNote]
  .concat(otherNotes)
  .concat([newIdeas])
)
