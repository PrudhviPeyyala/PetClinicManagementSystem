import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent {

  testdata : string = "This is a test data";

  numbers : number[] = [1,2,3,4,5,6,7,7];

  names : string[] = ["ram", "rrr" ,"hgdsf"];

  isvalid : boolean = false;

  today : Date  = new Date();

  amount :number = 100;

  data:any;

  clickfunction(event:any){
    alert("This is a sample name");
    console.log(event);
    console.log("this event is occured");
  }

  clickmouse(event:any){
    alert("mouxe over ");
  }

  constructor() { }

 
}
