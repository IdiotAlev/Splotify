import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmpPage } from './smp.page';

describe('SmpPage', () => {
  let component: SmpPage;
  let fixture: ComponentFixture<SmpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
