import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';
import { HighlightDirective } from '../../directives/highlight.directive';

export default {
  title: 'Components/productCard',
  component: ProductCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [HighlightDirective], // ✅ إضافة الـ Directive هنا
    }),
  ],
} as Meta;


type Story = StoryObj<ProductCardComponent>;

export const defaultStyle :Story ={
    args : {
        title: 'Sample Product',
        price: 100,
        image:'image.png',
        addToCart: () => alert('Product card clicked!'),    
    }
}

export const cardWithOffer :Story ={
    args : {
        offerLabel:'-50%',
        title: 'Sample Product',
        price: 100,
        image:'image.png'
    }
}
export const cardWithHeighlightDirective :Story ={
    args : {
        offerLabel:'-50%',
        title: 'Sample Product',
        price: 100,
        image:'image.png',
        highlightColor: 'pink'
    
    }
}
export const separateStory: StoryObj = {
    render: (args) => ({
      props: args,
      template: `<div appHighlight [highlightColor]="'pink'" style="padding: 20px; border: 1px solid black;">
                   This text should be highlighted!
                 </div>`,
    }),
  };