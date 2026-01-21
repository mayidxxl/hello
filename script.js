document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // 添加任务
    function addTodo() {
        const text = input.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text">${text}</span>
            <button class="delete-btn">删除</button>
        `;

        // 切换完成状态
        const todoText = li.querySelector('.todo-text');
        todoText.addEventListener('click', () => {
            todoText.classList.toggle('completed');
        });

        // 删除任务
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
        input.value = '';
        input.focus();
    }

    // 点击按钮添加
    addBtn.addEventListener('click', addTodo);

    // 回车键添加
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
