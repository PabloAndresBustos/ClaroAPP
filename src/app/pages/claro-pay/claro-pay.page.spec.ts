import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaroPayPage } from './claro-pay.page';

describe('ClaroPayPage', () => {
  let component: ClaroPayPage;
  let fixture: ComponentFixture<ClaroPayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaroPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
