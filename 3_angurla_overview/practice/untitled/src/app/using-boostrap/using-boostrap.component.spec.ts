import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingBoostrapComponent } from './using-boostrap.component';

describe('UsingBoostrapComponent', () => {
  let component: UsingBoostrapComponent;
  let fixture: ComponentFixture<UsingBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
