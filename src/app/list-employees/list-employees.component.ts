import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.obtainEmployees();
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }
  deleteEmployeeById(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      console.log(data);
      this.obtainEmployees();
    });
  }
  private obtainEmployees() {
    this.employeeService.obtainEmployeesList().subscribe(dato => {
      this.employees = dato;
    });
  }
  
}
