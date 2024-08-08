import { getRandomInt } from "./utils/getRandomInt.js";

export class Notes {
  list;
  constructor(list) {
    this.list = list;
  }

  renderNotes(element) {
    let elementHTML = ``;
    this.list.forEach((note)=> {
      elementHTML += `
      <div class="note note-${note.name} js-hidden" 
        style="
          grid-row: span ${note.noteHeight};
          grid-column: span ${note.noteLength}">
        ${note.html}
      </div>
      `;
    });

    element.innerHTML = elementHTML;
  }
}

export class Note {
  name;
  html;
  noteLength;
  noteHeight;
  
  constructor(name, html = '', noteLength = 2, noteHeight = 2) {
    this.name = name;
    this.html = html;
    this.noteLength = noteLength;
    this.noteHeight = noteHeight;
  }

  randomSquareSize(min = 3, max = 6) {
    const sideLength = getRandomInt(min, max);
    this.noteHeight = sideLength;
    this.noteLength = sideLength;
    return this;
  }
}

export class InstagramNote extends Note{
  customStyle = `object-fit: cover; width: 100%; height: 100%;`;
  #imgPath;
  #instagramPath;

  constructor(name, html, noteLength, noteHeight, imgPath, instagramPath, keywords = []) {
    super(name, html, noteLength, noteHeight);
    this.#imgPath = imgPath;
    this.#instagramPath = instagramPath;
    this.keywords = keywords;
    this.html = this.makeInstagramCoverHTML();
  }

  
  makeInstagramCoverHTML() {
    return `
    <a href="${this.#instagramPath}" target="_blank">
      <img src="${this.#imgPath}" style="${this.customStyle}" alt="${this.name}"> 
    </a>
    `;
  }
  
}
