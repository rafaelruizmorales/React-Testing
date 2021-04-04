import * as React from 'react';

import Hello from '../Hello/Hello'
import Toggle from '../Toggle/Toggle'
import TodoList from '../Todos/TodoList'

import '../../styles/App.css';

function App() {
  return (
    <div data-testid="app_component_wrapper">
      Welcome to Learning Tests!
      <Hello />
      <Hello name="Rafa"/>
      <Toggle />
      <TodoList />
    </div>
  );
}

export default App;
