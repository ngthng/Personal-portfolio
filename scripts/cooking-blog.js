import { homeNote, otherNotes, welcomeNote, newIdeas} from "../data/notesHome.js";
import { appearWhenScroll } from "./utils/appearWhenScroll.js";
import { shuffle } from "./utils/shuffleArray.js";
import { refreshIcon } from "./refreshButton.js";

loadNotes();

document.querySelector('.js-reload-button').addEventListener('click', () => {
  homeNote.list =   [welcomeNote]
    .concat(shuffle(otherNotes))
    .concat([newIdeas])
  loadNotes();
  refreshIcon();
  
})

function loadNotes() {
  homeNote.renderNotes(document.querySelector('.js-note-container'));
  appearWhenScroll();
}