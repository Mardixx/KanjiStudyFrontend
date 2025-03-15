import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http : HttpClient) { }

  getKanjiCards() {
    let url = "http://localhost:8080";
    return this.http.get(url);
  }
}
