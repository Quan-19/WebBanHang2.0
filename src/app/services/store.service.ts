import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { elementAt } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  products: Product[] = [
    {
      id: 1,
      image: '../assets/iphone-12-pro-max-graphite-hero.png',
      name: 'Iphone 12 Pro Max',
      price: 32990000,
      inStock: 10,
      initialStock: 10,
      description: 'iPhone 12 Pro Max 128GB - Chính hãng VN/A',
      outstanding:
        'Thiết kế titan nhẹ và bền chắc, mặt sau bằng kính nhám và mặt trước Ceramic Shield chống tia nước, chống nước và chống bụi.',
      outstanding1:
        'Chip A17 Pro mạnh mẽ, tiết kiệm năng lượng, mang đến thời lượng pin cả ngày.',
      outstanding2:
        'Hệ thống camera chuyên nghiệp với 7 ống kính, camera chính 48MP và camera Telephoto 5x.',
    },
    {
      id: 2,
      image: '../assets/Samsung-Galaxy-S21-Ultra-5G-821.jpg',
      name: 'Samsung Galaxy S21 Ultra',
      price: 28990000,
      inStock: 10,
      initialStock: 10,
      description: 'Samsung Galaxy S21 Ultra 5G 128GB-Chính hãng',
      outstanding:
        'Thiết kế màn hình vô cực Dynamic AMOLED 2X 6.8 inch, tần số quét 120Hz, độ phân giải WQHD+.',
      outstanding1:
        'Hệ thống camera 4 ống kính với camera chính 108MP, camera Telephoto 10x, camera Ultra Wide và camera Macro.',
      outstanding2:
        'Chip Exynos 2100 mạnh mẽ, hiệu năng ổn định, tối ưu hóa tiết kiệm năng lượng.',
    },
    {
      id: 3,
      image: '../assets/google_ga01316_us_pixel_5_128gb_5g_1595335.jpg',
      name: 'Google Pixel 5 5G',
      price: 15990000,
      inStock: 10,
      initialStock: 10,
      description: 'Google Pixel 5 128GB - Chính hãng VN/A',
      outstanding:
        'Thiết kế màn hình OLED 6 inch, tần số quét 90Hz, độ phân giải Full HD+.',
      outstanding1:
        'Hệ thống camera chất lượng với camera chính 12.2MP và camera Ultra Wide 16MP.',
      outstanding2:
        'Chip Snapdragon 765G mạnh mẽ, hiệu năng ổn định, tối ưu hóa tiết kiệm năng lượng.',
    },
    {
      id: 4,
      image: '../assets/oneplus_5011101666_9_pro_256gb_5g_1629055.jpg',
      name: 'OnePlus 9 Pro 5G',
      price: 19990000,
      inStock: 10,
      initialStock: 10,
      description: 'OnePlus 9 Pro 5G 128GB - Chính hãng VN/A',
      outstanding:
        'Thiết kế màn hình Fluid AMOLED 6.7 inch, tần số quét 120Hz, độ phân giải Quad HD+.',
      outstanding1:
        'Hệ thống camera chất lượng với camera chính 48MP, camera Telephoto 3.3x, camera Ultra Wide và camera Macro.',
      outstanding2:
        'Chip Snapdragon 888 mạnh mẽ, hiệu năng ổn định, tối ưu hóa tiết kiệm năng lượng.',
    },
    {
      id: 5,
      image: '../assets/Xiaomi-Mi-11-2.jpg',
      name: 'Xiaomi Mi 11       ',
      price: 13990000,
      inStock: 10,
      initialStock: 10,
      description: 'Xiaomi Mi 11 128GB - Chính hãng VN/A',
      outstanding:
        'Thiết kế màn hình AMOLED 6.81 inch, tần số quét 120Hz, độ phân giải Quad HD+.',
      outstanding1:
        'Hệ thống camera chất lượng với camera chính 108MP, camera Ultra Wide 13MP và camera Macro 5MP.',
      outstanding2:
        'Chip Snapdragon 888 mạnh mẽ, hiệu năng ổn định, tối ưu hóa tiết kiệm năng lượng.',
    },
  ];
  cart: any[] = [];

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
        this.total += product.price; // Cập nhật tổng tiền
      } else {
        this.cart.push({ ...product, quantity: 1 });
        productInStock!.inStock--;
        this.total += product.price; // Cập nhật tổng tiền
      }
      this.totalcost(); // Gọi phương thức tính tổng tiền
    } else {
      alert('Hãy đăng nhập để thêm sản phẩm vào giỏ hàng');
    }
  }

  deletecart(product: any) {
    if (this.authService.currentUser) {
      // Kiểm tra xem người dùng đã đăng nhập hay chưa
      this.cart = []; // Đặt lại giỏ hàng về rỗng
      this.total = 0; // Đặt lại tổng tiền về 0
      this.products.forEach((product) => {
        product.inStock = product.initialStock; // Cập nhật lại số lượng sản phẩm trong kho
      });
      this.totalcost(); // Gọi phương thức tính tổng tiền
      alert('Giỏ hàng đã được xóa thành công!'); // Hiển thị thông báo cho người dùng
    } else {
      alert('Hãy đăng nhập để xóa sản phẩm khỏi giỏ hàng');
    }
  }

  total: number = 0;

  totalcost() {
    this.total = this.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return this.total;
  }

  checkout() {
    if (this.cart.length === 0) {
      alert(
        'Giỏ hàng của bạn đang trống. Vui lòng thêm một số sản phẩm vào giỏ hàng trước khi thanh toán',
      );
      return;
    }

    const confirmed = confirm(
      `Tổng số tiền của bạn là ${this.total} VND. Bạn có muốn tiến hành thanh toán không?`,
    );

    if (confirmed) {
      this.cart = [];
      this.total = 0; // Đặt tổng tiền về 0 sau khi thanh toán
      alert('Cám ơn đã mua hàng!');
    }
  }
}
