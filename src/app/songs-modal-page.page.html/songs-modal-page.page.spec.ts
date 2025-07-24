import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongsModalPagePage } from './songs-modal-page.page';

describe('SongsModalPagePage', () => {
  let component: SongsModalPagePage;
  let fixture: ComponentFixture<SongsModalPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
