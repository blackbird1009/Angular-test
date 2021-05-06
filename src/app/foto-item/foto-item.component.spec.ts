import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoItemComponent } from './foto-item.component';

describe('FotoItemComponent', () => {
  let component: FotoItemComponent;
  let fixture: ComponentFixture<FotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
