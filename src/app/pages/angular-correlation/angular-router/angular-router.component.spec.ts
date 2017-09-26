import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRouterComponent } from './angular-router.component';

describe('AngularRouterComponent', () => {
  let component: AngularRouterComponent;
  let fixture: ComponentFixture<AngularRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
