import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuGroupOptionComponent } from './add-menu-group-option.component';

describe('AddMenuGroupOptionComponent', () => {
  let component: AddMenuGroupOptionComponent;
  let fixture: ComponentFixture<AddMenuGroupOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuGroupOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuGroupOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
