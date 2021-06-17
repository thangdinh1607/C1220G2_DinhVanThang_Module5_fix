import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {TypeCustomerService} from '../../service/type-customer.service';
import {TypeCustomer} from '../../model/type-customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  typeCustomers: TypeCustomer[] = [];
  createFrom = new FormGroup({
    // id: new FormControl('', [Validators.required, Validators.min(0)]),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('(KH-)\\d{3}')]),
    typeCustomer: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(090)\\d{7}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });


  constructor(private customerService: CustomerService,
              private typeCustomerService: TypeCustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getALlTypeCustomer();
  }


  getALlTypeCustomer() {
    this.typeCustomerService.getAll().subscribe(tc => {
      this.typeCustomers = tc;
    });
  }

  saveCustomer() {
    const customer = this.createFrom.value;
    this.customerService.save(customer).subscribe(() => {
      this.createFrom.reset();
      this.router.navigateByUrl('/customer/list');
    }, error => {
      console.log(error);
    });
  }
}
