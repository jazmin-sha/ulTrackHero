import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  currentUser: any;
  meassege = '';
  closeResult = '';

  constructor(
    private userService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private ht: HttpClient
  ) { }

  ngOnInit(): void {
    this.meassege = '';
    this.getSingleUser(this.route.snapshot.paramMap.get('id'));
  }

  getSingleUser(id:any): void{
    // console.log(this.currentUser._id);

    this.userService.getSingleUser(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log("huff"+data);
        console.log("heloooooo"+this.currentUser.locations.latitude);
      },
      error => {
        console.log(error);
      }
    )
  }

  updateUser(id:any):void{
    console.log("very good");
    
    this.userService.updateSingleUser(this.currentUser._id, this.currentUser)
    .subscribe(
      response => {
        console.log(response);
        this.meassege = "updated";
        // this.router.navigate(['/admin/getOneDataOfUser/:_id']);
      },
      error => {
        console.log(error);
      }
    )
  }


  // deleteUser(): void{

  //   Swal.fire({
  //     text: 'Are you sure you want to delete it?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it',
  //   }).then((result) => {

  //     if (result.isConfirmed) {
  //       console.log(this.currentUser.id);
  //       console.log(this.currentUser);
    
  //       this.userService.deleteUser(this.currentUser._id)
  //       .subscribe(
  //         response => {
  //           console.log(response);
  //           this.router.navigate(['/admin/getAllUserData'])
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       )
  //       window.location.reload();
  //     }
  //     else if (result.isDismissed) {
  //       console.log('Clicked No, File is safe!');
  //     }
  //   });
    

  // }


  deleteUser(): void{
    console.log(this.currentUser.id);
    console.log(this.currentUser);

    this.userService.deleteUser(this.currentUser._id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/admin/getAllUserData'])
      },
      error => {
        console.log(error);
      }
    )
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  // tryDelete(id:string){
  //   this.ht.delete("https://flutter-nodejsapp.herokuapp.com/admin/deleteUser/:id")
  // }

}



// import { ActivatedRoute, Router } from '@angular/router';
// import { AdminService } from './../services/admin.service';
// import { Component,AfterViewInit,ViewChild ,OnInit } from '@angular/core';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { HttpClient } from '@angular/common/http';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import { DataSource } from '@angular/cdk/collections';
// import { Observable } from 'rxjs/Observable';
// import {PageEvent} from '@angular/material/paginator';
// import { Userlist } from './../models/userlist';

// @Component({
//   selector: 'app-view-user',
//   templateUrl: './view-user.component.html',
//   styleUrls: ['./view-user.component.scss']
// })
// export class ViewUserComponent implements OnInit , AfterViewInit{

//   currentUser: any;
//   meassege = '';
//   closeResult = '';

//   displayedColumns: string[] = [ 'Date andTime', 'Longitude', 'Latitude', 'Activity'];
//   dataSource = new TestDataSource(this.userService);

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

//   constructor(
//     private userService: AdminService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private modalService: NgbModal,
//     private ht: HttpClient
//   ) { }

//   ngOnInit(): void {
//     this.meassege = '';
//     this.getSingleUser(this.route.snapshot.paramMap.get('id'));
//   }

//   ngAfterViewInit(): void {
//     this.meassege = '';
//     this.getSingleUser(this.route.snapshot.paramMap.get('id'));
//     // this.retrieveUsers();
//     // this.dataSource.paginator = this.paginator;
//   }


//   getSingleUser(id:any): void{
//     this.userService.getSingleUser(id)
//     .subscribe(
//       data => {
//         this.currentUser = data;
//         console.log(data);
//         console.log("heloooooo"+this.currentUser);
//       },
//       error => {
//         console.log(error);
//       }
//     )
//   }

//   updateUser(id:any):void{
//     this.userService.updateSingleUser(this.currentUser.id, this.currentUser)
//     .subscribe(
//       response => {
//         // this.currentUser = response;
//         console.log(response);
//         this.router.navigate(['/getAllUserData'])
//       },
//       error => {
//         console.log(error);
//       }
//     )
//   }

//   deleteUser(): void{
//     console.log(this.currentUser.id);

//     this.userService.deleteUser(this.currentUser.id)
//     .subscribe(
//       response => {
//         console.log(response);
//         this.router.navigate(['/getAllUserData'])
//       },
//       error => {
//         console.log(error);
//       }
//     )
//   }

//   open(content:any) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {

//     });
//   }


//   tryDelete(id:string){
//     this.ht.delete("https://flutter-nodejsapp.herokuapp.com/admin/deleteUser/:id")
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
