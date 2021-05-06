import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoItemBookComponent } from './foto-item-book.component';

describe('FotoItemBookComponent', () => {
  let component: FotoItemBookComponent;
  let fixture: ComponentFixture<FotoItemBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoItemBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoItemBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
