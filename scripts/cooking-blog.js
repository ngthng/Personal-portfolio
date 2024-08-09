import { homeNote, otherNotes, welcomeNote, newIdeas} from "../data/notesHome.js";
import { appearWhenScroll } from "./utils/appearWhenScroll.js";
import { shuffle } from "./utils/shuffleArray.js";
import { refreshIcon } from "./refreshButton.js";
import { instagramPopupEvent} from './popupInstagram.js';

loadNotes();
instagramPopupEvent();

document.querySelector('.js-reload-button').addEventListener('click', () => {
  homeNote.list =   [welcomeNote]
    .concat(shuffle(otherNotes))
    .concat([newIdeas])
  loadNotes();
  instagramPopupEvent();
  refreshIcon();
})


function loadNotes() {
  homeNote.renderNotes(document.querySelector('.js-note-container'));
  appearWhenScroll();
}

