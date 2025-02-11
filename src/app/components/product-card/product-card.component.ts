import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';
  @Input() offerLabel?: string;  
  @Output() addToCart = new EventEmitter<void>();

  onAddToCart() {
    this.addToCart.emit();
  }
}
