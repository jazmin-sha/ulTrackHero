import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import swal from 'sweetalert';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements AfterViewInit {

  allComplete: boolean = false;

  usersList: MatTableDataSource<Users>;
  displayedColumns: string[] = [ 'id', 'billFrom', 'billTo', 'totalCost', 'status', 'action'];

  @ViewChild(MatSort) sort: MatSort = Object.create(null);
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);

  constructor(
    private userService: UsersService
  ) {
    const usersListData = this.userService.getUsersListing();
    this.usersList = new MatTableDataSource(usersListData)
   }

   ngAfterViewInit(): void {
    this.usersList.paginator = this.paginator;
    this.usersList.sort = this.sort;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  updateAllComplete(): void {
    this.allComplete = this.usersList != null && this.usersList.data.every(t => t.completed);
  }
  someComplete(): any {
    return this.usersList.data.filter(t => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed: boolean): void {
    this.allComplete = completed;
    this.usersList.data.forEach(t => t.completed = completed);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  filter(filterValue: string): void {
    this.usersList.filter = filterValue.trim().toLowerCase();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  deleteInvoice(row: number): void {

    if (('Are you sure you want to delete this record ?')) {
      swal("Are you sure you want to do this?", {
        buttons: ["Oh noez!", true],

      });

    }
  }
  // deleteUser(id) {
  //   Swal.fire({
  //     text: 'Are you sure you want to delete it?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it',
  //   }).then((result) => {

  //     if (result.isConfirmed) {
  //       this.adminservice.deleteUser(id).subscribe(res => { console.log(res); });
  //       window.location.reload();
  //     }
  //     else if (result.isDismissed) {
  //       console.log('Clicked No, File is safe!');
  //     }
  //   });
  // }


  ngOnInit(): void {
  }


}
