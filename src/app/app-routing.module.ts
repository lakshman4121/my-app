import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { CaculatorComponent } from './caculator/caculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventRegistationComponent } from './event-registation/event-registation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PersonComponent } from './person/person.component';
import { PipisComponent } from './pipis/pipis.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { SqureComponent } from './squre/squre.component';
import { StudentRegistationComponent } from './student-registation/student-registation.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[
    { path:'home',component:HomeComponent},
    { path:'calculator',component:CaculatorComponent},
    { path:'square',component:SqureComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'twowaybinding',component:TwowaybindingComponent},
    {path:'rectangular',component:RectangularComponent},
    {path:'event-registation',component:EventRegistationComponent},
    {path:'student-registation',component:StudentRegistationComponent},
    {path:'cart',component:CartComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'pipes',component:PipisComponent},
    {path:'cars',component:CarsComponent},
    {path:'gpay',component:GpayComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'item',component:ItemComponent},
    {path:'post',component:PostComponent},
    {path:'mail',component:MailComponent},
    {path:'person',component:PersonComponent},
    {path:'create-vehicle',component:CreateVehicleComponent,canDeactivate:[NotifyGuard] },
    {path:'create-user',component:CreateUserComponent},
    {path:'parent',component:ParentComponent},
    {path:'product',component:ProductComponent},
    {path:'nav',component:NavComponent},
    {path:'cartlist',component:CartlistComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'vehile-details/:id',component:VehicleDetailsComponent}
  ] },
  {path:'',component:LoginComponent },
  {path:'**',component:PagenotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
