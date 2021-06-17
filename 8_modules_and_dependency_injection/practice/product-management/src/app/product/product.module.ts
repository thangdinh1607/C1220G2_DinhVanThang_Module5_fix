import {ProductListComponent} from './product-list/product-list.component';
import {NgModule} from '@angular/core';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductRoutingModule} from './product-routing.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class ProductModule {
}
