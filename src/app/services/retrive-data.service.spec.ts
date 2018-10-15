import {inject, TestBed} from '@angular/core/testing';

import {RetriveDataService} from './retrive-data.service';

describe('RetriveDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetriveDataService]
    });
  });

  it('should be created', inject([RetriveDataService], (service: RetriveDataService) => {
    expect(service).toBeTruthy();
  }));
});
