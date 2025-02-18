import Counter from '../Counter/Counter';
import Hello from '../Hello/Hello';
import Toggle from '../Toggle/Toggle';
import TodoList from '../Todo/TodoList';

function App() {

  const myTodos = [
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Learn TypeScript', completed: false },
    { id: 3, title: 'Learn NodeJS', completed: false },
  ]

  return (
    <>
      <h1>Welcome</h1>
      <Hello name="Raf" />
      <Counter />
      <Toggle />
      <TodoList todos={myTodos} />
    </>
  )
}

export default App
