import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {By} from '@angular/platform-browser';
import { UserNavigationComponent } from './user-navigation.component';
import { HomepageComponent } from './../../pages/homepage/homepage.component';
describe('UserNavigationComponent', () => {
  let component: UserNavigationComponent;
  let fixture: ComponentFixture<UserNavigationComponent>;
  let mockRouter:any;
  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      
      imports: [RouterTestingModule.withRoutes([{ path: 'home', component: HomepageComponent }]),],
      declarations: [ UserNavigationComponent ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should click user onClickUserDropDown', async(() => {
    component.onClickUserDropDown();
    component.showDropDownContainer = true;
    expect(component.showDropDownContainer).toBe(true);
    
  }));
  it('should click user onClickUserDropDown false', async(() => {
    component.onClickUserDropDown();
    component.showDropDownContainer = false;
    expect(component.showDropDownContainer).toBe(false);
    
  }));
  it('should navigate', () => {
    fixture.detectChanges();
    component.onClickLogout();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['home']);
  });
});
