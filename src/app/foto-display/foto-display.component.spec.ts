import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDisplayComponent } from './foto-display.component';

describe('FotoDisplayComponent', () => {
  let component: FotoDisplayComponent;
  let fixture: ComponentFixture<FotoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
