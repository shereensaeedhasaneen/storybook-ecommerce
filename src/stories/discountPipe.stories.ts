import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DiscountPipe } from '../app/pipes/discount.pipe';

export default {
  title: 'Pipes/Discount Pipe',
  tags: ['autodocs'],
  decorators: [
      moduleMetadata({
        imports: [DiscountPipe], 
      }),
    ],
} as Meta;

export const priceWithCurrency: StoryObj = {
  render: (args) => ({
    props: {
        title: 'This text should be highlighted!',    
        price:60
    },
    template: `<div appHighlight [highlightColor]="'pink'" style="padding: 20px; border: 1px solid black;">
                {{title}}
                <br>
                {{ price | currency:'EGP' }}
               </div>`, 
  }),
};
export const priceWithDiscount: StoryObj = {
  render: (args) => ({
    props: {
        price:100
    },
    template: `<div style="padding: 20px; border: 1px solid black;">
                <p>Original Price: {{ price | currency:'EGP' }}</p>
                <p>Discounted Price: {{ price | discount:20 | currency:'EGP' }}</p>
               </div>`, 
  }),
};

