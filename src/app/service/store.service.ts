import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Store } from '../model/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private url: string = `${environment.apiBase3}/stores`
  constructor(    private http: HttpClient,
    private router: Router ) { }

  public list(){
    return this.http.get<Store[]>(this.url);
  }
}
