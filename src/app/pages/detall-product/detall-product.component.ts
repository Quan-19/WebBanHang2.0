import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { CurrencyPipe } from '@angular/common';
import { TotalCostComponent } from '../../components/total-cost/total-cost.component';

@Component({
  selector: 'app-detall-product',
  standalone: true,
  imports: [CurrencyPipe, TotalCostComponent],
  templateUrl: './detall-product.component.html',
  styleUrl: './detall-product.component.scss',
})
export class DetallProductComponent {
  detailProduct!: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(
      (element) => element.id === parseInt(id),
    );
    console.log(this.detailProduct);
  }
}
