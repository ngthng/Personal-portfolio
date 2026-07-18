import { welcomeNote, otherNotes, newIdeas, homeNote} from "../data/home-cookingBlog.js";
import { appearWhenScroll } from "./utils/appearWhenScroll.js";
import { shuffle } from "./utils/shuffleArray.js";
import { refreshIcon } from "./refreshButton-cookingBlog.js";
import { instagramPopupEvent} from './popupInstagram-cookingBlog.js';

loadNotes();
instagramPopupEvent();

// Reload button functionality
document.querySelector('.js-reload-button').addEventListener('click', () => {
  homeNote.list =   [welcomeNote]
    .concat(shuffle(otherNotes))
    .concat([newIdeas])
  loadNotes();
  instagramPopupEvent();
  refreshIcon();

  document.querySelectorAll('input[name="food-type"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
})

document.querySelector('.js-food-type-filter').addEventListener('change', handleFilterChange);

function loadNotes() {
  homeNote.renderNotes(document.querySelector('.js-note-container'));
  appearWhenScroll();
}


function handleFilterChange(){
    const checkedBoxes = document.querySelectorAll('input[name="food-type"]:checked');
    const checkedValues = Array.from(checkedBoxes).map((checkbox) => checkbox.value);
    const filteredNotes = homeNote.list.filter((note) => {
      if (note.keywords && checkedValues.length > 0) {
        return note.keywords.some((keyword) => checkedValues.includes(keyword));
      }
      else { 
        return note.keywords; // Show only food notes if no checkboxes are selected
      }
    });
    homeNote.list = [welcomeNote]
      .concat(filteredNotes)
      .concat([newIdeas]);
    loadNotes();
    homeNote.list =   [welcomeNote]
    .concat(otherNotes)
    .concat([newIdeas]);
}



