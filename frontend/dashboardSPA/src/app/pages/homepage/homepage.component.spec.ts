import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let mockRouter : any;
  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'dashboard', component: DashboardComponent }]),],
      declarations: [ HomepageComponent ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Welcome Home Page');
  });
  it('should navigate dashboard', () => {
    fixture.detectChanges();
    component.onClickDashboard();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['dashboard']);
  });
});
