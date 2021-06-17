import {TypeCustomer} from './type-customer';

export interface Customer {
  id?: number;
  customerCode?: string;
  typeCustomer?: number;
  name?: string;
  birthday?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}
