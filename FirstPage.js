

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var commentForm = document.getElementById('comment-form');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Oprirea comportamentului implicit de trimitere a formularului
  
      if (!commentForm.checkValidity()) {
        return; // Ieșire din funcție dacă formularul nu este valid
      }
  
      var nameInput = document.getElementById('name');
      var commentInput = document.getElementById('comment');
  
      var name = nameInput.value;
      var comment = commentInput.value;
  
      // Salvarea comentariului în localStorage
      var comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push({ name: name, comment: comment });
      localStorage.setItem('comments', JSON.stringify(comments));
  
      // Resetarea valorilor input-urilor
      nameInput.value = '';
      commentInput.value = '';
  
      // Afisarea comentariului imediat în listă
      displayComment(name, comment);
    });
  
    // Restaurarea comentariilor la încărcarea paginii
    restoreComments();
  
    // Funcție pentru afișarea unui comentariu în listă
    function displayComment(name, comment) {
      var commentList = document.getElementById('comment-list');
  
      var commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');
  
      var nameElement = document.createElement('h3');
      nameElement.textContent = name;
  
      var commentContent = document.createElement('p');
      commentContent.textContent = comment;
  
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', function() {
        // Apelul funcției de editare a comentariului
        editComment(commentItem, name, comment);
      });
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', function() {
        // Apelul funcției de ștergere a comentariului
        deleteComment(commentItem, name, comment);
      });
  
      commentItem.appendChild(nameElement);
      commentItem.appendChild(commentContent);
      commentItem.appendChild(editButton);
      commentItem.appendChild(deleteButton);
  
      commentList.appendChild(commentItem);
    }
  
    // Funcție pentru editarea unui comentariu
    function editComment(commentItem, name, comment) {
      var editedName = prompt('Introduceți noul nume:', name);
      var editedComment = prompt('Introduceți noul comentariu:', comment);
  
      if (editedName && editedComment) {
        // Actualizarea informațiilor comentariului
        var nameElement = commentItem.querySelector('h3');
        var commentContent = commentItem.querySelector('p');
        nameElement.textContent = editedName;
        commentContent.textContent = editedComment;
  
        // Actualizarea comentariului în localStorage
        var comments = JSON.parse(localStorage.getItem('comments'));
        var commentIndex = findCommentIndex(comments, name, comment);
        if (commentIndex !== -1) {
          comments[commentIndex].name = editedName;
          comments[commentIndex].comment = editedComment;
          localStorage.setItem('comments', JSON.stringify(comments));
        }
      }
    }
  
    // Funcție pentru ștergerea unui comentariu
    function deleteComment(commentItem, name, comment) {
      if (confirm('Sunteți sigur că doriți să ștergeți acest comentariu?')) {
        // Eliminarea comentariului din interfață
        commentItem.remove();
  
        // Eliminarea comentariului din localStorage
        var comments = JSON.parse(localStorage.getItem('comments'));
        var commentIndex = findCommentIndex(comments, name, comment);
        if (commentIndex !== -1) {
          comments.splice(commentIndex, 1);
          localStorage.setItem('comments', JSON.stringify(comments));
        }
      }
    }


    // Funcție pentru restaurarea comentariilor la încărcarea paginii
    function restoreComments() {
      var comments = JSON.parse(localStorage.getItem('comments')) || [];
  
      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        displayComment(comment.name, comment.comment);
      }
    }
  });
  


var elements = document.querySelectorAll(".dropdown-content a");
Array.from(elements).forEach(function(element) {
  var originalColor = getComputedStyle(element).backgroundColor;
  
  element.addEventListener("mouseover", function() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
  
  element.addEventListener("mouseout", function() {
    this.style.backgroundColor = originalColor;
  });
});

// Folosirea target și currentTarget
var linkuri = document.getElementsByTagName("a");
for (var i = 0; i < linkuri.length; i++) {
  linkuri[i].addEventListener("click", function(event) {
    console.log("Link apăsat: " + event.target.textContent);
    console.log("Elementul curent: " + event.currentTarget.textContent);
  });
}


