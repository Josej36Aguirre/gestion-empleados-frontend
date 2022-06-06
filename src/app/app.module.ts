import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    FooterAppComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
