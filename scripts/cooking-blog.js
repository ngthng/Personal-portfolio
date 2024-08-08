import { homeNote } from "../data/notesHome.js";
import { appearWhenScroll } from "./utils/appearWhenScroll.js";

homeNote.renderNotes(document.querySelector('.js-note-container'));
appearWhenScroll();