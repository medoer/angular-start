import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDeriectivesComponent } from './structural-deriectives.component';

describe('StructuralDeriectivesComponent', () => {
  let component: StructuralDeriectivesComponent;
  let fixture: ComponentFixture<StructuralDeriectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDeriectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDeriectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
