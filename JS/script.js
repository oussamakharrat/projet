function addNote() {
    var note = document.getElementById('noteContent').value;
    var title = document.getElementById('noteTitle').value;
    var err = document.getElementById('noteError');
    
    if (note && title) {
        let newNote = document.createElement('li');
        let newTitle = document.createElement('span');
        let newContent = document.createElement('p');
        var but = document.createElement('button');

       
        newTitle.textContent = title + ': ';
        newTitle.style.fontWeight = 'bold';
        newContent.textContent = note;

        
        newNote.appendChild(newTitle);
        newNote.appendChild(newContent);
        newContent.style.overflow = 'auto';
        
        
        but.textContent = "Delete";
        but.style.fontWeight = 'semibold';
        but.style.fontSize = '18px';
        but.style.backgroundColor = 'red';
        but.style.padding = '5px 10px';
        but.style.border = 'none';
        but.style.marginLeft = '10px';
        but.style.cursor = 'pointer';
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
            let conf = confirm('Are you sure you want to delete this note?');
            if(conf){
                e.target.parentNode.remove();
            }
            
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

var darkMode = false;
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'black';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'gray';
        document.getElementById('title-login').style.color = 'black';
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = 'black';
        }
    } else {
        document.body.style.backgroundColor = 'lightblue';
        document.body.style.color = 'black';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'white';
        document.getElementsByTagName('h1')[0].style.color = 'black';
    }
}

