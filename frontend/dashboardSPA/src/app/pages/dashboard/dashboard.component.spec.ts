import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DashboardComponent ],
      providers: [],
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
  it("should call loadUser and return A user", async(() => {
    // mock data
    let response: any = { id: 1, name: 'John Smith', email: 'john.smith@example.com', profile_picture_url: 'https://placehold.co/600x400.png', email_verified_at: '2022-01-01 15:38:33.0 Asia/Singapore (+08:00)', identification_number: 'S9****567A', current_organisation: Object({ id: 2, name: 'Sample Bank ABC', logo_url: 'https://placehold.co/600x400.png', is_personal: false }) };
    component.loadUser();
    
    component.isPersonal = true;
    expect(component.isPersonal).toBe(true);
    component.loadUserGoal()
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(component.user).toEqual(response);
    });
    
  }));
  it("should call loadDocument and return list of documentList", async(() => {
    // mock data
    let response: any = [{
      "id": 1,
      "status": "issued",
      "document_name": "SWAB Test Result",
      "issuer_name": "ISSUER NAME",
      "issuer_logo_url": "https://placehold.co/600x400.png",
      "recipient_name": "John Frusciante",
      "received_on": "2022-01-12T17:58:25.000000Z",
      "expire_at": "2023-01-12T00:00:00.000000Z",
      "created_at": "2022-01-12T10:45:10.000000Z",
      "updated_at": "2022-01-12T17:58:25.000000Z",
      "archived_at": null,
      "deleted_at": null
    },{
      "id": 2,
      "status": "approved",
      "document_name": "SWAB Test Result",
      "issuer_name": "ISSUER NAME",
      "issuer_logo_url": "https://placehold.co/600x400.png",
      "recipient_name": "John Frusciante",
      "received_on": null,
      "expire_at": null,
      "created_at": "2022-01-12T10:45:10.000000Z",
      "updated_at": "2022-01-12T17:58:25.000000Z",
      "archived_at": null,
      "deleted_at": null
    }];
    component.loadDocument();
    fixture.detectChanges();
    component.isError = true;
    expect(component.isError).toBe(true);
    fixture.whenStable().then(() => {
        expect(component.documentList).toEqual(response);
    });
  }));
  it("should call loadUserGoal and return A use Goal", async(() => {
    // mock data
    let response: any = {
      "id": 1,
      "name": "Account Manager",
      "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
      "category": "Sales and Marketing",
      "type": "technical",
      "progress": 35
    };
    component.loadUserGoal();
    component.userGoal = response;
    component.isError = true;
    expect(component.isError).toBe(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.userGoal).toEqual(response);
    });
    
  }));
});
