import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  idDelete: number;
  productDeleteName: string;
  productDelete: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getId() {
    return +this.activatedRoute.snapshot.params.id;
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.collectionSize = this.products.length;
    });

  }

  deleteCustomer() {
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      console.log(this.idDelete);
    }, e => {
      console.log(e);
    }, () => {
      this.getAll();
    });
  }

  sendIdToComponent(id: number) {
    this.idDelete = id;
    this.productService.findById(id).subscribe(data => {
      this.productDelete = data;
      this.productDeleteName = this.productDelete.name;
    });
  }
}
