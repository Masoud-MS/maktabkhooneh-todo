import {observable, action} from 'mobx'
import TodoModel from './TodoModel'

class TodoStore {
    lastID = 0;

    @observable todos = [];
    @observable leftTodos = 0;
    @observable filter = 'all';

    @action
    addTodo(title) {
        if (title==='') return
        this.todos.push(new TodoModel(this, title, false, this.lastID++))
    }

    @action
    removeTodo(id){
        this.todos.replace(this.todos.filter(todo=> todo.id !== id))
    }


    @action
    counterLeftTodos() {
        this.leftTodos = 0;
        this.todos.map(todo => {
            if (!todo.completed) this.leftTodos++;
        });
    }

    @action
    filterTodo(filter) {
        this.filter = filter;
    }

    @action
    clearCompleted() {
        this.todos.replace(this.todos.filter(todo=> todo.completed === false))
    }
}

const store = new TodoStore()
export default store