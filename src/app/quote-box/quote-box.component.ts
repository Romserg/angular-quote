import { Component, OnInit } from '@angular/core';
import { GetQuoteService } from '../services/get-quote.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  public  quote = new Quote('','');
  constructor(public quoteService: GetQuoteService) {
    this.quoteService.getQuotes().subscribe((data:any[])=> {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
