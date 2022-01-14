import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbneinshaComponent } from './ibneinsha.component';

describe('IbneinshaComponent', () => {
  let component: IbneinshaComponent;
  let fixture: ComponentFixture<IbneinshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbneinshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbneinshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
