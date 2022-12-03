const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");
let addnotes = document.querySelector('notestest');

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

// addNoteButton.addEventListener("click", () => addNote());
rxjs.fromEvent(addNoteButton, 'click').subscribe(() => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNoteElement(id, content, color) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Type notes here";

  // rxjs.fromEvent(element,'onNext  ()').subscribe(() => updateNote(id, element.value));
  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  rxjs.fromEvent(element,'dblclick').subscribe(() => deleteNote(id, element));

  // element.addEventListener("dblclick", () => {
  //   const doDelete = confirm(
  //     "Are you sure you wish to delete this note?"
  //   );

  //   if (doDelete) {
  //     deleteNote(id, element);
  //   }
  // });

  if (element.addEventListener) {
    element.addEventListener('contextmenu', function(e) {
      alert("change color");
      element.style.backgroundColor=randomColor()
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }

  return element;
}

function randomColor() {
  var myArray = ['red', 'green', 'blue'];
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  return randomElement
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 1),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}