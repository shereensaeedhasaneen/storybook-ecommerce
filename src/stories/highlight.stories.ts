import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HighlightDirective } from '../app/directives/highlight.directive';

export default {
  title: 'Directives/Highlight',
  tags: ['autodocs'],
  decorators: [
      moduleMetadata({
        imports: [HighlightDirective], 
      }),
    ],
} as Meta;

export const Default: StoryObj = {
  render: (args) => ({
    props: {
        title: 'This text should be highlighted!',    
        price:60
    },
    template: `<div appHighlight [highlightColor]="'pink'" style="padding: 20px; border: 1px solid black;">
                {{title}}
                {{ price | currency:'EGP' }}
               </div>
               `, 
  }),
};
export const builtInDirectives: StoryObj = {
  render: (args) => ({
    props: {
        title: 'This text should be highlighted!',    
        price:60,
        test_BuiltIn_directive:true
    },
    template: `<div appHighlight [highlightColor]="'pink'" style="padding: 20px; border: 1px solid black;">
                {{title}}
                {{ price | currency:'EGP' }}
               </div>
               <div *ngIf="test_BuiltIn_directive">
                    this is built in directive , no need to import CommonModule in moduleMetadata
                    because it's build in storybook👌😀
               </div>
               `, 
  }),
};
