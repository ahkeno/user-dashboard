import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './../../share/user.service';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DashboardComponent ],
      providers: [ UserService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
