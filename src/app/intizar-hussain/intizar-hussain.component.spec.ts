import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntizarHussainComponent } from './intizar-hussain.component';

describe('IntizarHussainComponent', () => {
  let component: IntizarHussainComponent;
  let fixture: ComponentFixture<IntizarHussainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntizarHussainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntizarHussainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
