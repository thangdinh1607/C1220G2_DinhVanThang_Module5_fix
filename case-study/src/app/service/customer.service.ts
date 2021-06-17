import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer [] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customer');
  }

  save(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customer/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customer/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/${id}`);
  }

  search(name: string, email: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customer?name_like=' + name + '&email_like=' + email);
  }
}
