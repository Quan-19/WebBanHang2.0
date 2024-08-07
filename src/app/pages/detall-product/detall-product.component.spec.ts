import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallProductComponent } from './detall-product.component';

describe('DetallProductComponent', () => {
  let component: DetallProductComponent;
  let fixture: ComponentFixture<DetallProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
