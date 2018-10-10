import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressMaskComponent} from './progress-mask.component';

describe('ProgressMaskComponent', () => {
  let component: ProgressMaskComponent;
  let fixture: ComponentFixture<ProgressMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressMaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
