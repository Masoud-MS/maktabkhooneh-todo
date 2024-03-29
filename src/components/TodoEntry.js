import React, {Component} from 'react';
import TodoStore from  '../stores/TodoStore'

class TodoEntry extends Component {
    state = {
        value:''
    }
    handleKeyDown(event){
        if (event.keyCode === 13) {
            event.preventDefault()
            TodoStore.addTodo(this.state.value)
            this.setState({value : ''})
            // TodoStore.counterLeftTodos();
        }
    }
    render() {

        return (
            <header className="header">
                <h1>todos</h1>
                <input type="text" className="new-todo" placeholder="What needs to be done?"
                value={this.state.value}
                onChange={event=> this.setState({value : event.target.value})}
                onKeyDown={event=> this.handleKeyDown(event)}/>
            </header>
        )
    }
}
export default TodoEntry