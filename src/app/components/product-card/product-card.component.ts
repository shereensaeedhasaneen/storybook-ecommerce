import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe,HighlightDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';
  @Input() offerLabel?: string;  
  @Input() highlightColor: string = 'yellow';
  @Output() addToCart = new EventEmitter<void>();

  onAddToCart() {
    this.addToCart.emit();
  }
}
