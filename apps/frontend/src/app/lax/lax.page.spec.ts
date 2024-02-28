import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaxPage } from './lax.page';

describe('LaxPage', () => {
  let component: LaxPage;
  let fixture: ComponentFixture<LaxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
