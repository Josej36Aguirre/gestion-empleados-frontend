import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  
  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {   
  }

  createEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
this.goToLIstEmployees();
    }, error => console.log(error)
    );
  }

  goToLIstEmployees(){
    this.router.navigate(['/employees'])
  }
  onSubmit(){
    this.createEmployee();
  }

}
