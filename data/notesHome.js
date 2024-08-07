import {Notes, Note} from '../scripts/noteContent.js'

const welcomeNote = new Note(
  'welcome',
  ` 
    <p>
      Welcome to Theo's Kitchen, where (mostly) everthing is possible! Currently I am:
    </p>
    <ul>
      <li>Creating this webpage!</li>
      <li>Adding carousels from Instagram @yootheocoooks</li>
      <li>Exploring baking with friends</li>
    </ul>
  `,
  9,
  2
)

const whyCookNote = new Note(
  'why-cook',
  `
    <p>
      I usually cook when I run out of things to do, see something cool on Instagram, or generally just cook with my loved ones. It's also a good way to decompress from a mental block!
    </p>
  `,
  2,
  6
)

const instagramOne = new Note(
  'instagram1',
  ``,
  3,
  3
)

const navNote = new Note(
  `navigation`,
  `
    <p>
      Click around these Menu items to explore recipes!
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

const instagramTwo = new Note (
  'instagram2',
  ``,
  4,
  4
)

const instagramThree = new Note (
  'instagram3',
  ``,
  3,
  3
)

export const homeNote = new Notes([
  welcomeNote,
  whyCookNote,
  instagramOne,
  navNote,
  instagramTwo,
  instagramThree
]);