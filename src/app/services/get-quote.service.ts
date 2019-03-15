import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuoteService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  }

  public getQuotes() {
    return this.http.get(this.url);
  }
}
