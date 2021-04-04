import * as React from 'react'

import { todo } from './model'

interface OwnProps { 
  todo: todo
}

const Todo: React.FC<OwnProps> = (props: OwnProps) => {

  const { id, title, completed } = props.todo

  
  const text = completed 
    ? <><strong>{title}</strong></>
    : <>{title}</>

  return (
    <div data-testid={`todo-${id}`}>
      {text}
    </div>
  )
}

export default Todo