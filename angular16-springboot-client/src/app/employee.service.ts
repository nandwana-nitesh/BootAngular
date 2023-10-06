import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable(
  // {
  //  providedIn: 'root'
  // }
)
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees';
  private static count:number=0;
  constructor(private http: HttpClient) { 
    console.log("count: "+ EmployeeService.count++);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
}
