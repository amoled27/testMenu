import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupDishDetailComponent } from './menu-group-dish-detail.component';

describe('MenuGroupDishDetailComponent', () => {
  let component: MenuGroupDishDetailComponent;
  let fixture: ComponentFixture<MenuGroupDishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGroupDishDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupDishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
