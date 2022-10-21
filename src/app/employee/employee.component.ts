import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { TestService } from '../test.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.service.getemployeedata().subscribe(emp=>{
      this.employees=emp;
    });
  }

}
