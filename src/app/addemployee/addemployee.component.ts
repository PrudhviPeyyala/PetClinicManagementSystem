import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { TestService } from '../test.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee:Employee;

  constructor(private service:TestService) { }

  ngOnInit(): void {
  }

  onsubmit(data:any){

    this.employee = new Employee();
    this.employee.id = data.employeeid;
    this.employee.emp_First_name = data.employeefirstname;
    this.employee.emp_last_name = data.employeelastemployee;
    this.employee.address = data.address;


    this.service.insertemployeedata(this.employee);
  }
}
