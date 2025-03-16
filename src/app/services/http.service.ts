import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  url = "http://localhost:8080/";
  constructor(private http : HttpClient) { }

  getKanjiCards() {
    return this.http.get(this.url);
  }
  postKanjiCards(kanjiCard: any) {
    return this.http.post(this.url, kanjiCard);
  }
  deleteKanjiCard(id: number) {
    return this.http.delete(this.url + id);
  }
}
