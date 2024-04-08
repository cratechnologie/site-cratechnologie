import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Customer } from '../models/customer.model';
import { environment } from 'src/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://cratechnologie.com:8443/ebax/customer';

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.myAppApiUrl+ "/customer/").pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of([]);
      })
    );
  }

  getCustomerById(id: string): Observable<Customer | undefined> {
    return this.http.get<Customer | undefined>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.table(error);
        return of(undefined);
      })
    );
  }

  createCustomer(customer: Customer): Observable<Customer | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(environment.myAppApiUrl+ "/customer/", customer, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateCustomer(customer: Customer): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(environment.myAppApiUrl+ "/customer/", customer, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteCustomer(customerId: number): Observable<null> {
    return this.http.delete(`${this.apiUrl}/${customerId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchCustomerByTerm(term: string): Observable<Customer[]> {
    if (term.length <= 1) {
      return of([]);
    }
    return this.http.get<Customer[]>(`${this.apiUrl}/?term=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
