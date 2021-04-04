import * as React from 'react'

import Todo from './Todo'

interface OwnProps { }

const TodoList: React.FC<OwnProps> = () => {

  const myTodoList = [
    { id: 1, title: 'Learn Testing', completed: false },
    { id: 2, title: 'Take on the World', completed: true }
  ]

  return (
    <div data-testid="todoList_component_wrapper">
      <h1>To Do List</h1>
      {
        myTodoList.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo}/>
          )
        })
      }
    </div>
  )
}

export default TodoList
