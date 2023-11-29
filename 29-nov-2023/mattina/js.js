

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {

                const todoList = document.getElementById('todo-list');

                
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    
                    li.textContent = todo.title;

                    todoList.appendChild(li);
                });
            });