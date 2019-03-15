import { Component, OnInit } from '@angular/core';
import { GetQuoteService } from '../services/get-quote.service';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  public  quote;
  public  author;
  constructor(public quoteService: GetQuoteService) {

  }
  public getQuotes = () => {
    this.quoteService.getQuotes().subscribe((data:any)=> {
        let quotes = data.quotes;
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        this.quote =  randomQuote.quote;
        this.author = randomQuote.author;
      },
      err => console.log(err))
  };
  ngOnInit() {
    this.getQuotes()
  }

}
