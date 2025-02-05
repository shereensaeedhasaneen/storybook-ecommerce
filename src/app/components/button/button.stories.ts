import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs']
} as Meta;


type Story = StoryObj<ButtonComponent>;

export const Primary :Story ={
    args : {
      label: 'Primary button !',
      primary: true
    }
}
export const Secondary :Story ={
    args : {
      label: 'Secondary button !',
      primary: false
    }
}
