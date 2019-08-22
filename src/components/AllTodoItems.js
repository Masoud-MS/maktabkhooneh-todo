import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import TodoStore from '../stores/TodoStore'
import {observe, observer} from "mobx-react";

@observer
class AllTodoItems extends Component {

    render() {

        return (
            <section className="main">
                <ul className="todo-list">
                    {
                        TodoStore.todos.map(todo => {
                            if (TodoStore.filter === 'active') {
                                return (!todo.completed ? <TodoItem todo={todo}/> : '')
                            } else if (TodoStore.filter === 'completed') {
                                return (todo.completed ? <TodoItem todo={todo}/> : '')
                            } else {
                                return <TodoItem todo={todo}/>
                            }

                        })
                    }
                    {TodoStore.counterLeftTodos()}
                </ul>
                {TodoStore.todos.length ? <Footer/> : ''}
            </section>
        )
    }
}

export default AllTodoItems