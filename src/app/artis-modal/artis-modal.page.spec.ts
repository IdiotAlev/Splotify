import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtisModalPage } from './artis-modal.page';

describe('ArtisModalPage', () => {
  let component: ArtisModalPage;
  let fixture: ComponentFixture<ArtisModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
