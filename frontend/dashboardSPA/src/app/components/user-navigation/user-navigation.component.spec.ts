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
    spyOn(component, 'onClickUserDropDown');
    let button = fixture.debugElement.query(By.css('.user-nav-container'));
    button.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(component.onClickUserDropDown).toHaveBeenCalled();
    });
  }));
  it('should navigate', () => {
    fixture.detectChanges();
    component.onClickLogout();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['home']);
  });
});
