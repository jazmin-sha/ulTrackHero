import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Users } from './users'
import { usersLists } from './users-data'
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private ROOT_URL = 'http://localhost:3000/';


  private usersLists: Users[] = [];

  private getUsersList(): any {
    return from(usersLists);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.getUsersList().subscribe((data: any) =>
    this.usersLists.push(data)
    );
   }


   public getUsersListing(): Users[] {
    return this.usersLists;
    }
    public deleteInvoice(id: number): void {
        this.usersLists = this.usersLists.filter(CId => CId.id !== id);
    }
    // public addUser(invoice: Users): void {
    //     this.usersLists.splice(0, 0, invoice);
    // }
    public updateInvoice(id: number, invoice: Users): void {
        const element = this.usersLists.filter(x => x.id === id);
        const index: number = this.usersLists.indexOf(element[0]);
        this.usersLists[index] = invoice;
    }


    addUser(users : any){
    return this.http.post<any>(`${this.ROOT_URL}/users`, users);
    console.log(users);

    }

}
