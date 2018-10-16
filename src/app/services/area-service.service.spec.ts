import {inject, TestBed} from '@angular/core/testing';

import {AreaServiceService} from './area-service.service';

describe('AreaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaServiceService]
    });
  });

  it('should be created', inject([AreaServiceService], (service: AreaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
