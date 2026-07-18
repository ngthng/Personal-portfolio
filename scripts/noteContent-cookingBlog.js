import { getRandomInt } from "./utils/getRandomInt.js";

export class Notes {
  list;
  constructor(list) {
    this.list = list;
  }

  renderNotes(element) {
      let elementHTML = ``;
      
      // 1. Detect current layout columns based on our CSS Media Query breakpoint (1024px)
      const currentMaxColumns = window.innerWidth >= 1024 ? 4 : 3;

      const instagramNotes = this.list.filter(note => note.constructor.name === 'InstagramNote');
      const targetLargeCount = Math.round(instagramNotes.length * 0.40);
      
      const largeInstagramIndexes = new Set(
        Array.from({ length: instagramNotes.length }, (_, i) => i)
          .sort(() => Math.random() - 0.5)
          .slice(0, targetLargeCount)
      );

      let instagramCounter = 0;

      this.list.forEach((note) => {
        let length = 1;
        let height = 1;
        
        const isInstagram = note.constructor.name === 'InstagramNote';

        if (isInstagram) {
          length = 1;
          height = 1;

          if (largeInstagramIndexes.has(instagramCounter)) {
            const variations = [
              { l: 2, h: 1 }, 
              { l: 1, h: 2 }, 
              { l: 2, h: 2 }, 
              { l: 3, h: 2 }  
            ];
            const chosen = variations[Math.floor(Math.random() * variations.length)];
            length = chosen.l;
            height = chosen.h;
          }
          instagramCounter++;
        } else {
          length = parseInt(note.noteLength) || 1;
          height = parseInt(note.noteHeight) || 1;
        }

        // 2. SAFETY CHECK: Clamp the column length to the actual grid width
        // This stops a span 4 item from breaking a 3-column view
        if (length > currentMaxColumns) {
          length = currentMaxColumns;
        }

        let classes = `note note-${note.name} js-hidden`;

        const inlineStyle = `style="grid-column: span ${length}; grid-row: span ${height};"`;

        elementHTML += `
        <div class="${classes}" ${inlineStyle}>
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
  #instagramId;

  constructor(name, html, noteLength, noteHeight, imgPath, instagramPath, instagramId,keywords = []) {
    super(name, html, noteLength, noteHeight);
    this.#imgPath = imgPath;
    this.#instagramPath = instagramPath;
    this.#instagramId = instagramId;
    this.keywords = keywords;
    this.html = this.makeInstagramCoverHTML();
  }

  
  makeInstagramCoverHTML() {
    return `
    
    <img class="js-popup-instagram-img" src="${this.#imgPath}" style="cursor: pointer; ${this.customStyle}; " alt="${this.name}" data-instagram-id="${this.#instagramId}"> 
    
    `;
  }
  
}
