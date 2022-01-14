import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmadfarazComponent } from './ahmadfaraz.component';

describe('AhmadfarazComponent', () => {
  let component: AhmadfarazComponent;
  let fixture: ComponentFixture<AhmadfarazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhmadfarazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmadfarazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
