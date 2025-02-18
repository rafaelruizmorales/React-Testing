import { todoModel } from "./model";

import TodoItem from "./TodoItem";

type todoListProps = {
    todos: todoModel[];
}

const TodoList: React.FC<todoListProps> = ({todos}) => {
    return (
        <div data-testid='todoList_component_wrapper'>
            <ul>
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </ul>
        </div>
    );
};

export default TodoList;