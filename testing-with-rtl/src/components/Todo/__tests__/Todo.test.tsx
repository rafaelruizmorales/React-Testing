import { describe, it, expect, afterEach} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import TodoList from '../TodoList'
import TodoItem from '../TodoItem'

describe('Todos', () => {

  afterEach(() => {
    cleanup()
  });

  describe('TodoList Component', () => {

    it('should render TodoList Component, even if empty', async () => {  
      render(<TodoList todos={[]} />);
      
      const mainDiv = await screen.findByTestId('todoList_component_wrapper')
      
      expect(mainDiv).toBeInTheDocument()
    });

    it('should render TodoList Component, with one todo element', async () => {  
        render(<TodoList todos={[{ id: 1, title: 'Learn React', completed: true }]} />);
        
        const mainDiv  = await screen.findByTestId('todoList_component_wrapper')
        const fistTodo = await screen.findByTestId('todo-1')
        
        expect(mainDiv).toBeInTheDocument()
        expect(fistTodo).toBeInTheDocument()
      });

  });

  describe('TodoItem Component', () => {

    it('should render NON-completed TodoItem Component', async () => {
      const todoItemExample = { id: 1, title: 'Be the best', completed: false }

      render(<TodoItem todo={todoItemExample} />);
      
      const todoItem = await screen.findByTestId('todo-1')

      expect(todoItem).toBeInTheDocument()
      
      expect(todoItem).toHaveTextContent('Be the best')

      expect(todoItem).toContainHTML('<span>Be the best</span>')
      expect(todoItem).not.toContainHTML('<span className="line-through">Be the best</span>')
    })

    it('should render completed TodoItem Component', async () => {
      const todoItemExample = { id: 2, title: 'Be the best', completed: true }

      render(<TodoItem todo={todoItemExample} />);

      const todoItem = await screen.findByTestId('todo-2')

      expect(todoItem).toBeInTheDocument()

      expect(todoItem).toHaveTextContent('Be the best')

      expect(todoItem).toContainHTML('<li data-testid="todo-2"><span class="line-through">Be the best</span></li>')
      expect(todoItem).not.toContainHTML('<span>Be the best</span>')     
    })

    it('matches snapshot', () => {
      const todoItemExample = { id: 1, title: 'Go to bed', completed: true }
      const tree = render(<TodoItem todo={todoItemExample} />);

      expect(tree).toMatchSnapshot()
    });

  });
});