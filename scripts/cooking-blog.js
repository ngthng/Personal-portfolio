import { homeNote, otherNotes, welcomeNote, newIdeas} from "../data/notesHome.js";
import { appearWhenScroll } from "./utils/appearWhenScroll.js";
import { shuffle } from "./utils/shuffleArray.js";
import { refreshIcon } from "./refreshButton.js";
import { instagramPopup } from './popupInstagram.js';

loadNotes();

document.querySelector('.js-reload-button').addEventListener('click', () => {
  homeNote.list =   [welcomeNote]
    .concat(shuffle(otherNotes))
    .concat([newIdeas])
  loadNotes();
  refreshIcon();
})

document.querySelectorAll('.js-popup-instagram-img').forEach((image) => {
  image.addEventListener('click', () => {
    instagramPopup(image.dataset.instagramId);
    appearWhenScroll();
  });
});

function loadNotes() {
  homeNote.renderNotes(document.querySelector('.js-note-container'));
  appearWhenScroll();
}

