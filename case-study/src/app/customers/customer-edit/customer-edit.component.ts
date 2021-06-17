import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {TypeCustomerService} from '../../service/type-customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editForm: FormGroup;
  typeCustomers: Customer[];

  constructor(private customerService: CustomerService,
              private typeCustomerService: TypeCustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerEdit();
    this.getALlTypeCustomer();
  }

  getALlTypeCustomer() {
    this.typeCustomerService.getAll().subscribe(tc => {
      this.typeCustomers = tc;
    });
  }

  getId() {
    return this.activatedRoute.snapshot.params.id;
  }

  getCustomerEdit() {
    return this.customerService.findById(this.getId()).subscribe(customer => {
      this.editForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.min(0)]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('(KH-)\\d{3}')]),
        typeCustomer: new FormControl(customer.typeCustomer, Validators.required),
        name: new FormControl(customer.name, [Validators.required, Validators.minLength(5)]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('\\d{9}')]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern('(090)\\d{7}')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required, Validators.minLength(5)]),
      });
    });
  }

  updateCustomer() {
    const customer = this.editForm.value;
    this.customerService.updateCustomer(this.getId(), customer).subscribe(() => {
    this.editForm.reset();
    this.router.navigateByUrl('customer/list');
    });
  }
}
