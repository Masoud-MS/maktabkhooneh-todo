import React from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry'
import AllTodoItems from './components/AllTodoItems'

function App() {
  return (
    <div className="todoapp" id="todoapp">
      <TodoEntry/>
      <AllTodoItems/>


    </div>
  );
}

export default App;
