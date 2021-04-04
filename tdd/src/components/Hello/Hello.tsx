import * as React from "react";

interface OwnProps {
  name?: string
}

const Hello: React.FC<OwnProps> = (props: OwnProps) => {

  const helloResult = (props.name)
    ? <p>Hello, {props.name}!</p>
    : <p>Hey, stranger</p>

  return (
    <div data-testid="hello_component_wrapper">
      {helloResult}
    </div>
  )
}

export default Hello
