import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBase: string = environment.apiBase;

  productChange = new Subject<Product[]>();
  private messageChange = new Subject<string>();

  constructor(private http: HttpClient) { }

  registerProduct(product: Product) {
    return this.http.post(`${this.apiBase}/api/product/register`, product);
  }

  getAllProductsLow() {
    return this.http.get<any[]>(`${this.apiBase}/product/v1/products-stock-low`);
  }
  
  getProduct(id : number){
    return this.http.get<any>(`${this.apiBase}/product/v1/product/${id}`);
  }

  listPageable(p: number, s:number){
    return this.http.get<any>(`${this.apiBase}/api/product/pageable?page=${p}&size=${s}`);
  }

  setMessageChange(message: string){
    this.messageChange.next(message);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
