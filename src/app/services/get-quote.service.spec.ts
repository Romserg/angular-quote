import { TestBed } from '@angular/core/testing';

import { GetQuoteService } from './get-quote.service';

describe('GetQuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuoteService = TestBed.get(GetQuoteService);
    expect(service).toBeTruthy();
  });
});
