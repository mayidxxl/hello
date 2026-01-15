document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // 添加新任务
    function addTodo() {
        const text = todoInput.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.classList.add('todo-text');
        span.textContent = text;
        span.onclick = () => {
            li.classList.toggle('completed');
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '删除';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
        todoInput.focus();
    }

    // 点击按钮添加
    addBtn.addEventListener('click', addTodo);

    // 回车键添加
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});

