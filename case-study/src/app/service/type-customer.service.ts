import {Injectable} from '@angular/core';
import {TypeCustomer} from '../model/type-customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Customer} from '../model/customer';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TypeCustomerService {
  typeCustomer: TypeCustomer[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TypeCustomer[]> {
    return this.http.get<TypeCustomer[]>(API_URL + '/typeCustomer');
  }

  findById(id: number): Observable<TypeCustomer> {
    return this.http.get<TypeCustomer>(`${API_URL}/typeCustomer/${id}`);
  }
}
