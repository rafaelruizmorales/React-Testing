import * as React from 'react'

interface OwnProps {

}

const Toggle: React.FC<OwnProps> = (props: OwnProps) => {

  const [state, setState] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setState(prevState => !prevState)
  }

  return (
    <div data-testid="toggle_component_wrapper">
      <button data-testid="toggle" onClick={handleClick}>
        {state === true ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  )
}

export default Toggle
