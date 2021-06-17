import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  deleteForm = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl()
    }
  );
product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.infoRemove();
  }

  // remove() {
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.productService.removeProduct(id);
  //   this.router.navigateByUrl('');
  // }
  // infoRemove(){
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.product =  this.productService.findById(id);
  // }
}
