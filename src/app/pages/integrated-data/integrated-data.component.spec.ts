import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedDataComponent } from './integrated-data.component';

describe('IntegratedDataComponent', () => {
  let component: IntegratedDataComponent;
  let fixture: ComponentFixture<IntegratedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
