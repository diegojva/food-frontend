import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Store } from '../model/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private url: string = `${environment.apiBase}`
  constructor(    private http: HttpClient,
    private router: Router ) { }

  public list(){
    return this.http.get<Store[]>(this.url);
  }

  simulateSale(shopId : number, products : number[]) {
    return this.http.post(`${this.url}/product/v1/validate-notification`, {shopId, products});
  }
}
