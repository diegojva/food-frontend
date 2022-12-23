import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateOrderService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  registerOrder(order: any) {
    return this.http.post(`${this.apiBase}/OrderProduct/v1/registar`, order);
  }

  getAllProductsLow() {
    return this.http.get<any[]>(`${this.apiBase}/OrderProduct/v1/listar`);
  }
}
