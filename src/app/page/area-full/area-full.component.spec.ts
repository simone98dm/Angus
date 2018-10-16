import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AreaFullComponent} from './area-full.component';

describe('AreaFullComponent', () => {
  let component: AreaFullComponent;
  let fixture: ComponentFixture<AreaFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaFullComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
