import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Esta Url obtiene el listado de todo los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httClient: HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtainEmployeesList(): Observable<Employee[]> {
    return this.httClient.get<Employee[]>(`${this.baseURL}`);
  }
  //Este metodo se encarga de guradar un empleado
  createEmployee(employee: Employee): Observable<object> {
    return this.httClient.post(`${this.baseURL}`, employee);
  }
  //Este metodo se encarga de actualizar un empleado
  updateEmployee(id: number, employee: Employee): Observable<object> {
    return this.httClient.put(`${this.baseURL}/${id}`, employee);
  }
//Este metodo se encarga de buscar un empleado
obtainEmployeeById(id:number) : Observable<Employee>{
  return this.httClient.get<Employee>(`${this.baseURL}/${id}`);
  }
 //Este metodo se encarga de buscar un empleado
 deleteEmployeeById(id:number) : Observable<Object>{
  return this.httClient.delete(`${this.baseURL}/${id}`);
  } 



}
