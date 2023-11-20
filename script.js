let addTodo = document.getElementById('add-todo');
let value = document.getElementById('todo-value');
const list = document.getElementById('todos');
const deleteButton = document.querySelector('#todos')

addTodo.addEventListener('click', () => {
    if (value.value !== '') {
        let item = document.createElement('div');
        item.classList.add('item');
        let p = document.createElement('p');
        p.innerText = value.value;
        let delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.innerHTML = '&#x2713;';
        item.append(p, delBtn);
        list.appendChild(item);
        value.value = '';
        saveData();
    } else {
        return;
    }
});

deleteButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('delBtn')) {
        const item = e.target;
        const todo = item.parentElement;
        console.log('item is ', item)
        todo.remove();
        saveData();
    }
});

const showData = () => {
    todos.innerHTML = localStorage.getItem('todos')
}

const saveData = () => {
    localStorage.setItem('todos', list.innerHTML)
}

showData()