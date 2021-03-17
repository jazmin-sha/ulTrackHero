import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // user listing
  users: any;
  currentUser = null;
  currentIndex = -1;
  username:any;

  // user search
 searchString: string ='';

  constructor(
    private userService: AdminService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAllUsers()
    .subscribe(
      data => {
        this.users = data;
        // console.log(data);
        // console.log(this.users);
        
        // console.log(data.locations.user_id);
      },
      error => {
        console.log(error);
      }
    )
  }

  setActivatedUser(user:any, index:any): void{
    this.currentUser = user;
    this.currentIndex = index;
  }

  refreshList():void {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }


  // backend search
  searchUser(): void {
    this.userService.findByName(this.username)
    .subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }


}

///////////////////////////////////////////////////////////////////////////////////////

// local search
// search(){
//   if (this.username == "") {
//     this.retrieveUsers();
//   } else {
//     this.users = this.users.filter(data => {
//       return data.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase)
//     })
//   }
// }


// import { Userlist } from './../models/userlist';
// import { Component, AfterViewInit,OnInit, ViewChild } from '@angular/core';
// import { AdminService } from '../services/admin.service'
// import {MatPaginator} from '@angular/material/paginator';
// import { DataSource } from '@angular/cdk/collections';
// import { Observable } from 'rxjs/Observable';
// import { Router } from '@angular/router';
// import {PageEvent} from '@angular/material/paginator';
// import { MatTableDataSource, MatTable } from '@angular/material/table';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.scss']
// })
// export class UserListComponent implements OnInit,  AfterViewInit {

//   users: any;
//   currentUser = null;
//   currentIndex = -1;
//   username = '';

//   @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
//   searchText: any;

//   displayedColumns: string[] = [ 'id', 'username', 'activity', 'locations', 'actions'];

//   // usersd: Userlist[] = [];
//   dataSource = new TestDataSource(this.userService);
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

//   // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

//   // @ViewChild(MatPaginator) paginator: MatPaginator;

//   constructor(
//     private userService: AdminService,
//     private router: Router,
//     ) { }

//   ngOnInit(): void {
//     this.retrieveUsers();
//     console.log(this.dataSource);
//     // this.dataSource.paginator = this.paginator;
//   }

//   ngAfterViewInit(): void {
//     this.retrieveUsers();
//     // this.dataSource.paginator = this.paginator;
//   }

//   //Get All Users in Table
//   retrieveUsers(): void {
//     this.userService.getAllUsers()
//     .subscribe(
//       data => {
//         this.users = data;
//         console.log(data);
//       },
//       error => {
//         console.log(error);
//       }
//     )
//   }

//     setActivatedUser(user:any, index:any): void{
//     this.currentUser = user;
//     this.currentIndex = index;
//   }

//   refreshList():void {
//     this.retrieveUsers();
//     this.currentUser = null;
//     this.currentIndex = -1;
//   }


// }

// export class TestDataSource extends DataSource<any> {
//   constructor(private _testService: AdminService) {
//     super();
//   }

//   connect(): Observable<Userlist[]> {
//     return this._testService.getAllUsers();
//   }
//   disconnect() {}
// }
