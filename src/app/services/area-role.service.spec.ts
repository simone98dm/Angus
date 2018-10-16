import {inject, TestBed} from '@angular/core/testing';

import {AreaRoleService} from './area-role.service';

describe('AreaRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaRoleService]
    });
  });

  it('should be created', inject([AreaRoleService], (service: AreaRoleService) => {
    expect(service).toBeTruthy();
  }));
});
