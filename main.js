
    function showAlert(message) {
      alert(message);
    }

    function markCheck() {
      const todos = document.querySelectorAll('.todo-checkbox:checked');
      if (todos.length == 5) {
        showAlert(`Congrats 5 tasks have been successfully completed.`);
      }
    }

    
    function fetchTodos() {
      return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => {
            const todosContainer = document.getElementById('todos');
            data.forEach(todo => {
              const todoItem = document.createElement('li');
              todoItem.className = 'list-group-item';

              const todoCheckbox = document.createElement('input');
              todoCheckbox.type = 'checkbox';
              todoCheckbox.className = 'todo-checkbox';
              if (todo.completed) {
                todoCheckbox.checked = true;
              }
              todoCheckbox.addEventListener('change', markCheck); 
              todoItem.appendChild(todoCheckbox);

              const todoTitle = document.createElement('span');
              todoTitle.innerText = todo.title;
              todoItem.appendChild(todoTitle);

              todosContainer.appendChild(todoItem);
            });

            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }

  
    document.getElementById('logout').addEventListener('click', () => {

      window.location.href = 'index.html';
    });


    fetchTodos()
      .then(() => {
      
      })
      .catch(error => {
        console.error('Error:', error);
      });

