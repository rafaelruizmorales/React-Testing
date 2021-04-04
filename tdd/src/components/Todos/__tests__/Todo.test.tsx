import * as React from 'react';

import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

import TodoList from '../TodoList'
import Todo from '../Todo'

describe('Todos', () => {

  afterEach(() => {
    cleanup()
  });

  describe('TodoList Component', () => {

    it('should render TodoList Component', async () => {  
      render(<TodoList />);
      const mainDiv = await screen.findByTestId('todoList_component_wrapper')
      
      expect(mainDiv).toBeInTheDocument()
    });

  });

  describe('Todo Component', () => {

    it('should render NON-completed Todo Component', async () => {
      const todoItem = { id: 1, title: 'Be the best', completed: false }

      render(<Todo key={todoItem.id} todo={todoItem} />);
      const todo = await screen.findByTestId('todo-1')

      expect(todo).toBeInTheDocument()
      expect(todo).toHaveTextContent('Be the best')
      expect(todo).not.toContainHTML('<div data-testid="todo-2"><strong>Have lunch</strong></div>')
    })

    it('should render completed Todo Component', async () => {
      const todoItem = { id: 2, title: 'Have lunch', completed: true }

      render(<Todo key={todoItem.id} todo={todoItem} />);
      const todo = await screen.findByTestId('todo-2')

      expect(todo).toBeInTheDocument()
      expect(todo).toHaveTextContent('Have lunch')
      expect(todo).toContainHTML('<div data-testid="todo-2"><strong>Have lunch</strong></div>')
    })

    it('matches snapshot', () => {
      const todoItem = { id: 1, title: 'Go to bed', completed: true }
      const tree = renderer.create(<Todo key={todoItem.id} todo={todoItem} />).toJSON()

      expect(tree).toMatchSnapshot()

    });

  });
});
