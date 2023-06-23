import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiModalComponent } from './imei-modal.component';

describe('ImeiModalComponent', () => {
  let component: ImeiModalComponent;
  let fixture: ComponentFixture<ImeiModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImeiModalComponent]
    });
    fixture = TestBed.createComponent(ImeiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
