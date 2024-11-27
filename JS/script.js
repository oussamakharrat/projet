function addNote() {
    var note = document.getElementById('noteContent').value;
    var title = document.getElementById('noteTitle').value;
    var err = document.getElementById('noteError');
    
    if (note && title) {
        let newNote = document.createElement('li');
        let newTitle = document.createElement('span');
        let newContent = document.createElement('p');
        var but = document.createElement('button');

        // Set up the title and content
        newTitle.textContent = title + ': ';
        newTitle.style.fontWeight = 'bold';
        newContent.textContent = note;

        // Append title and content to the note
        newNote.appendChild(newTitle);
        newNote.appendChild(newContent);
        
        // Configure the delete button
        but.textContent = "Delete";
        but.style.fontWeight = 'semibold';
        but.style.fontSize = '18px';
        but.style.backgroundColor = 'red';
        but.style.padding = '5px 10px';
        but.style.border = 'none';
        but.style.marginLeft = '10px'; // Add some space between content and button
        but.style.cursor = 'pointer'; // Change cursor to pointer on hover
        but.onmouseover = function() {
            but.style.backgroundColor = 'darkred';
        }
        but.onmouseout = function() {
            but.style.backgroundColor ='red';
        }

        // Append the button to the note
        newNote.appendChild(but);

        // Add a click event listener to the delete button
        but.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            count();
        });

        
        err.textContent = '';
        document.getElementById('notesUl').appendChild(newNote);
        count();
        
    } else {
        
        if (!note && title) {
            err.textContent = 'Please enter a note.';
        } else if (!title && note) {
            err.textContent = 'Please enter a title.';
        } else {
            err.textContent = 'Please Enter both of them !!!';
        }
    }
}

function count() {
    const notes = document.getElementById('notesUl').getElementsByTagName('li');
    document.getElementById('count').textContent = `Total Notes: ${notes.length}`;
}




