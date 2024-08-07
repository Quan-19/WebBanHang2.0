import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-total-cost',
  standalone: true,
  imports: [],
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.scss',
})
export class TotalCostComponent {
  constructor(
    public storeService: StoreService,
    public autjService: AuthService,
  ) {}
}
