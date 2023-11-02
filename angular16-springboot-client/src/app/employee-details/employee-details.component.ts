import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute, RouterState } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers:[EmployeeService]
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { 
      this.employee = new Employee(0,'','','',true);
      this.id=0;
    }

  ngOnInit() {
    this.employee = new Employee(0,'','','',true);

    this.id = this.activatedRoute.snapshot.params['id'];
    console.info("this.activatedRoute.snapshot.url : "+this.activatedRoute.snapshot.url.toString());

    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
