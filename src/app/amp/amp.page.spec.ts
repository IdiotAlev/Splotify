import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmpPage } from './amp.page';

describe('AmpPage', () => {
  let component: AmpPage;
  let fixture: ComponentFixture<AmpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
