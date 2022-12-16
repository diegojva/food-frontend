import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiBase: string = environment.apiBase;

  constructor(protected http: HttpClient) { }

  listPageable(p: number, s:number){
    return this.http.get<any>(`${this.apiBase}/notifications/v1/pageable?page=${p}&size=${s}`);
  }
}
