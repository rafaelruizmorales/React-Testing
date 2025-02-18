import { useState } from "react"

const Toggle: React.FC = () => {

    const initialToggleState = false
    const [toggleState, setToggleState] = useState(initialToggleState)
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setToggleState(prevState => !prevState)
    }
  
    return (
      <div data-testid="toggle_component_wrapper">
        <button data-testid="toggle" onClick={handleClick}>
          {toggleState === true ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    )
  }
  
  export default Toggle