import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'demoapp';
  
    names:any;

    // data:any[]=[];

    employees : Employee[];

    constructor(private testservice:TestService){}

    ngOnInit(): void {
      // this.names=this.testservice.testdata();

      this.testservice.getemployeedata().subscribe(
        (res:any)=>{
          alert("Success");
          this.employees = res;
        }
      );

    }

    
}
