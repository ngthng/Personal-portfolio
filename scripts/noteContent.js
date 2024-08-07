export class Notes {
  list;
  constructor(list) {
    this.list = list;
  }

  renderNotes(element) {
    let elementHTML = ``;
    this.list.forEach((note)=> {
      elementHTML += `
      <div class="note note-${note.name}" 
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
  name
  html;
  noteLength;
  noteHeight;
  constructor(name, html, noteLength = 2, noteHeight = 2) {
    this.name = name;
    this.html = html;
    this.noteLength = noteLength;
    this.noteHeight = noteHeight;
  }
}

