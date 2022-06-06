import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
 {
   path: '',
   children: [
    {path : 'employees',component:ListEmployeesComponent},
    {path : '',redirectTo:'employees',pathMatch:'full'},
    {path : 'create-employee', component : CreateEmployeeComponent},
    {path : 'update-employee/:id', component : UpdateEmployeeComponent},
    {path : 'employee-details/:id', component : EmployeeDetailsComponent},
    {path: '**', redirectTo: 'employees'}
   ]

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
