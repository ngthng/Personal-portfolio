import { homeNote } from "../data/notesHome.js";

console.log(homeNote);

homeNote.renderNotes(document.querySelector('.js-note-container'))