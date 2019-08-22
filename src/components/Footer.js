import React, {Component} from 'react';
import {observe, observer} from "mobx-react";
import TodoStore from  '../stores/TodoStore'

@observer
class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <span className="todo-count">{TodoStore.leftTodos+`${TodoStore.leftTodos >1 ? ' items': ' item'}`}</span>
                <ul className="filters">
                    <li><a href="#" className={TodoStore.filter==='all'? 'selected': ''}
                           onClick={()=>TodoStore.filterTodo('all')}>All</a></li>
                    <li><a href="#" className={TodoStore.filter==='active'? 'selected': ''}
                           onClick={()=>TodoStore.filterTodo('active')}>Active</a></li>
                    <li><a href="#" className={TodoStore.filter==='completed'? 'selected': ''}
                           onClick={()=>TodoStore.filterTodo('completed')}>Completed</a></li>
                </ul>
                <span className="clear-completed" onClick={()=> TodoStore.clearCompleted()}>Clear completed</span>
            </div>
        )
    }
}
export default Footer