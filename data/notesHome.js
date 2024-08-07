import {Notes, Note} from '../scripts/noteContent.js'

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
  `
  <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://scontent.cdninstagram.com/v/t51.29350-15/454270185_1217746615825410_4394977177350173741_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&amp;_nc_ht=scontent.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=1p1-DPbu_CAQ7kNvgEqNmBo&amp;edm=APs17CUBAAAA&amp;ccb=7-5&amp;oh=00_AYBr8SDslCKfvLeysi8i0pkFCNmkp0xLbpgF8H6pMoL3Zw&amp;oe=66B8D21B&amp;_nc_sid=10d13b">`,
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