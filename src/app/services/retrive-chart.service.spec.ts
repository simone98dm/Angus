import {inject, TestBed} from '@angular/core/testing';

import {RetriveChartService} from './retrive-chart.service';

describe('RetriveChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetriveChartService]
    });
  });

  it('should be created', inject([RetriveChartService], (service: RetriveChartService) => {
    expect(service).toBeTruthy();
  }));
});
