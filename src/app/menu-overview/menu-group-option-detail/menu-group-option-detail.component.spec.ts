import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupOptionDetailComponent } from './menu-group-option-detail.component';

describe('MenuGroupOptionDetailComponent', () => {
  let component: MenuGroupOptionDetailComponent;
  let fixture: ComponentFixture<MenuGroupOptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGroupOptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupOptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
