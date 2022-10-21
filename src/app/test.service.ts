import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private employeegeturl = "http://localhost:8081/getemployeedata";
  private employeeinserturl = "http://localhost:8081/insertemployee";

  constructor(private http:HttpClient) { }

  testdata(){
    let teststr = "this is test data from service";
    return teststr;
  }

  getemployeedata():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeegeturl);
  }

  insertemployeedata(employee:Employee){
    const headers = {'Content-Type':'application/json'};
    this.http.post<Employee>(this.employeeinserturl,employee,{headers});
    
  }
  

  
}
