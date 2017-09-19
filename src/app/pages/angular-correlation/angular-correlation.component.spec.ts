import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCorrelationComponent } from './angular-correlation.component';

describe('AngularCorrelationComponent', () => {
  let component: AngularCorrelationComponent;
  let fixture: ComponentFixture<AngularCorrelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCorrelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
