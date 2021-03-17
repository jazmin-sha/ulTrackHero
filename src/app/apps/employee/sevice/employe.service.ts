import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private ROOT_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.ROOT_URL + '/employeelist');
  // }


  addEmployee(employee : any){
    return this.http.post<any>(`${this.ROOT_URL}/employee`, employee);
    console.log(employee);
    }

    getSingleEmp(id: string){
      return this.http.get<any>(`${this.ROOT_URL}/${id}`);
    }


}
