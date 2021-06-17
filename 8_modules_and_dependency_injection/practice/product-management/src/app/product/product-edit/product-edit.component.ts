import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  // id: number;
 editForm: FormGroup;


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProduct(this.getId());
  }

  getId() {
    return +this.activatedRoute.snapshot.params.id;
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(p => {
      this.editForm = new FormGroup({
          id: new FormControl(p.id, [Validators.required, Validators.min(0)]),
          name: new FormControl(p.name, [Validators.required, Validators.minLength(4)]),
          price: new FormControl(p.price, [Validators.min(0), Validators.required]),
          description: new FormControl(p.description, [Validators.minLength(10), Validators.required])
        }
      );
    }, error => {
      console.log('eroossss');
    });
  }


  update() {
    const product1 = this.editForm.value;
    this.productService.updateProduct(this.getId(), product1).subscribe(() => {
      this.router.navigateByUrl('product/list');
    }, error => {
      console.log('errossssss');
    });
  }
}
