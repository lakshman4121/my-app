import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SqureComponent } from './squre/squre.component';
import { HomeComponent } from './home/home.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangularComponent } from './rectangular/rectangular.component';
import { EventRegistationComponent } from './event-registation/event-registation.component';
import { StudentRegistationComponent } from './student-registation/student-registation.component';
import { CartComponent } from './cart/cart.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipisComponent } from './pipis/pipis.component';
import { PricePipe } from './price.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { ItemComponent } from './item/item.component';
import { PostComponent } from './post/post.component';
import { MailComponent } from './mail/mail.component';
import { PersonComponent } from './person/person.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    SqureComponent,
    CaculatorComponent,
    HomeComponent,
    CaculatorComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangularComponent,
    EventRegistationComponent,
    StudentRegistationComponent,
    CartComponent,
    EmployeeComponent,
    PipisComponent,
    PricePipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    AccountComponent,
    ItemComponent,
    PostComponent,
    MailComponent,
    PersonComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    NavComponent,
    CartlistComponent,
    CreateStudentComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
