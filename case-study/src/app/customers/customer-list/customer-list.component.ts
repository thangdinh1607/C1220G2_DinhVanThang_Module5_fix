import {Component, OnInit} from '@angular/core';
// @ts-ignore

import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {TypeCustomer} from '../../model/type-customer';
import {TypeCustomerService} from '../../service/type-customer.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer [];
  typeCustomers: TypeCustomer[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  idDelete: number;
  customer: Customer;
  nameDelete: string;
  nameSearch = '';
  emailSearch = '';


  constructor(private customerService: CustomerService,
              private typeCustomerService: TypeCustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
      this.getAllTypeCustomer();
      this.collectionSize = this.customers.length;
    });
  }

  getAllTypeCustomer() {
    this.typeCustomerService.getAll().subscribe(tc => {
      this.typeCustomers = tc;
    });
  }

  sendIdDelete(id: number) {
    this.idDelete = id;
    this.customerService.findById(id).subscribe(c => {
      this.customer = c;
      this.nameDelete = c.name;
    });
  }

  deleteCustomer() {
    console.log(this.idDelete);
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      this.getAll();
    });
  }

  search() {
    console.log(this.nameSearch);
    this.customerService.search(this.nameSearch , this.emailSearch).subscribe(c => {
      this.customers = c;
      this.page = 1;
    });
  }
}
