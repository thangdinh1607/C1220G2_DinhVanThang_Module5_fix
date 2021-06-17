import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  createForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(0)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl(0, [Validators.min(0), Validators.required]),
      description: new FormControl('', [Validators.minLength(10), Validators.required])
    }
  );

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveProduct() {
    const product = this.createForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.createForm.reset();
      this.router.navigateByUrl('/customer/list');
    });
  }
}
