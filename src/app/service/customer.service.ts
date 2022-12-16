import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = `${environment.apiBase3}/customers`
  constructor(    private http: HttpClient,
    private router: Router ) { }

  public list(){
    return this.http.get<Customer[]>(this.url);
  }
}
