const notes = document.getElementById('notes');
const form = document.getElementById('form');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const body = document.querySelector('body');

form.addEventListener('submit', saveNote);
notes.addEventListener('click', deleteNote);
notes.addEventListener('click', editNote);
notes.addEventListener('click', save);

//SAVE NOTE

function saveNote(e) {

  createAndAddNoteToList(input.value);
  e.preventDefault();
};

//CREATE AND ADD NOTGE TO THE LIST

function createAndAddNoteToList(input) {
  if (input) {
    //CREATE LI ELEMENT FOR NOTE
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.style.display = 'inline'
    p.innerHTML = input;
    li.appendChild(p);

   
    //CREATE SPAN ELEMENT FOR EDIT
    const spanEdit = document.createElement('span');
    spanEdit.classList.add('edit');
    spanEdit.textContent = 'Edit';
    spanEdit.style.color = 'blue';
    spanEdit.style.paddingLeft = '10px';
    spanEdit.style.cursor = 'pointer';

     //CREATE SPAN ELEMENT FOR DELETE
    const spanDelete = document.createElement('span');
    spanDelete.textContent = 'Delete';
    spanDelete.classList.add('delete');
    spanDelete.style.color = 'red';
    spanDelete.style.paddingLeft = '10px';
    spanDelete.style.cursor = 'pointer';

    li.appendChild(spanEdit);
    li.appendChild(spanDelete);
    notes.appendChild(li);
    showAlert('Note added', 'green');
  } else {
    showAlert('Enter note before saving', 'red');
  }
}

//EDITE NOTE

function editNote(e) {
  if (e.target.classList.contains('edit')) {
    let fieldValue = e.target.parentElement.children[0].textContent;
    e.target.parentElement.children[0].remove();
   
    let inputEdit = document.createElement('input');
    inputEdit.classList.add('inputForEditing');
    inputEdit.value = fieldValue;

    const spanSave = document.createElement('span');
    spanSave.textContent = 'Save';
    spanSave.classList.add('save');
    spanSave.style.color = 'green';
    spanSave.style.paddingLeft = '10px';
    spanSave.style.cursor = 'pointer';
  
   
    e.target.parentElement.insertBefore(inputEdit, e.target);
    e.target.parentElement.insertBefore(spanSave, e.target);
  }
}

//SAVE AFTER EDITING

function save(e) {
  if (e.target.classList.contains('save')) {
    let changedValue = e.target.parentElement.children[0].value;
   
    const p = document.createElement('p');
    p.style.display = 'inline'
    p.innerHTML = changedValue;
    e.target.parentElement.insertBefore(p, e.target.parentElement.children[1]);

    e.target.parentElement.children[0].remove();
    e.target.remove();

  }
  
}


//DELETE NOTE FROM LIST OF NOTES

function deleteNote(e) {
  if (e.target.classList.contains('delete')) {
     e.target.parentElement.remove();
  }
}

function showAlert(message, color) {

  //REMOVE ALERT IF ALREADY EXIST
  const DOMAlert = document.querySelector('.alert');
  if (DOMAlert) {
    DOMAlert.remove();
  }

  //CREATE DOM ELEMENT FOR ALERT
  let alert = document.createElement('p');
  alert.classList.add('alert');
  alert.textContent = message;
  alert.style.color = color;

  body.insertBefore(alert, notes);

  //REMOVE ALERT AFTER 2 SECONDS
  setTimeout(function() {
    const DOMAlert = document.querySelector('.alert');
    if (DOMAlert) {
      DOMAlert.remove();
    }
   
  }, 2000)
}