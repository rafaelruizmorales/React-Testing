import { todoModel } from "./model";

type todoProps = {
    todo: todoModel;
}

const TodoItem: React.FC<todoProps> = ({todo : {id, title, completed}}) => {

    const text = completed ? <span className="line-through">{title}</span> : <span>{title}</span>

    return (
      <li data-testid={`todo-${id}`}>
        {text}
      </li>
    )
};

export default TodoItem;