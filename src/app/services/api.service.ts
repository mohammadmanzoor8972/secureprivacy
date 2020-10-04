import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://fast-lowlands-95849.herokuapp.com/api/common/getBanner"
  constructor(private http: HttpClient) { }

  public getBanner(): Observable<any> {
    return this.http.get(this.url);
  }


}
