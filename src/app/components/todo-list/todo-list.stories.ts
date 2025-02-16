import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TodoListComponent } from './todo-list.component';

export default {
  title: 'Components/ToDo List',
  component: TodoListComponent,
  tags: ['autodocs']
} as Meta;


type Story = StoryObj<TodoListComponent>;

export const DefaultTodoStyle: Story = {
  args: {
    tasks: [
      { id: 1, title: 'study angular', completed: false },
      { id: 2, title: 'have lunch', completed: true },
      { id: 3, title: 'Read a book', completed: false },
    ],
  },
};

export const AllTasksIncomplete: Story = {
  args: {
    tasks: [
      { id: 1, title: 'Clean the house', completed: false },
      { id: 2, title: 'Finish project', completed: false }
    ],
  },
};

export const AllTasksCompleted: Story = {
  args: {
    tasks: [
      { id: 1, title: 'Go to gym', completed: true },
      { id: 2, title: 'go shopping', completed: true },
      { id: 3, title: 'study', completed: true },
    ],
  },
};

export const EmptyList: Story = {
  args: {
    tasks: [],
  },
};

export const SingleTask: Story = {
  args: {
    tasks: [{ id: 1, title: 'Meditate for 10 minutes', completed: false }],
  },
};

export const LongTaskTitle: Story = {
  args: {
    tasks: [
      {
        id: 1,
        title:
          'This is a very long task title that should be truncated or wrapped properly to fit in the layout',
        completed: false,
      },
    ],
  },
};