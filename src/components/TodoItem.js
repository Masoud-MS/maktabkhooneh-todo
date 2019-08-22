import React, {Component} from 'react';
import {observe, observer} from "mobx-react";
import TodoStore from  '../stores/TodoStore'

@observer
class TodoItem extends Component {
    onToggle() {
        this.props.todo.toggle()
        TodoStore.counterLeftTodos();
    }

    render() {
        const {todo}=this.props
        return (
            <li className={todo.completed ? 'completed' :''}>
                <div className="view">
                    <input type="checkbox" className="toggle" value="on" checked={todo.completed}
                    onClick={()=> this.onToggle()}/>
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={()=> TodoStore.removeTodo(todo.id)}/>
                </div>
            </li>
        )
    }
}
export default TodoItem