import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateOrderService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  registerOrder(order: any) {
    let param = new HttpParams();
    console.log(localStorage.getItem('username'));
    param = param.set('username', localStorage.getItem('username'));
    return this.http.post(`${this.apiBase}/OrderProduct/v1/registar`, order, {params: param});
  }

  getAllProductsLow() {
    return this.http.get<any[]>(`${this.apiBase}/OrderProduct/v1/listar`);
  }
}
