import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TotalCostComponent } from '../../components/total-cost/total-cost.component';
import { CheckOutComponent } from '../../components/check-out/check-out.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent, TotalCostComponent, CheckOutComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(public storeService: StoreService) {}
}
