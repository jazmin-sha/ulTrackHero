import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { order, Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddedAlertComponent } from './added-alert/added-alert.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  submitted = false;

  public addForm: FormGroup = Object.create(null);

  // rows: FormArray;
  users: Users = new Users();

  constructor(
      private http: HttpClient,
      private fb: FormBuilder,
      private userService: UsersService,
      private router: Router,
      public dialog: MatDialog) {
    // tslint:disable-next-line - Disables all
    this.users.id = Math.max.apply(Math, this.userService.getUsersListing().map(function (o: any) { return o.id; })) + 1;

    ///////////////////////////////////////////////////////////


  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      user_name:['',Validators.required],
      user_email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  onAddRow(): void {
    console.log("added");
    const marketDetail = this.addForm.value;
    console.log(marketDetail);

    if ("added" + this.addForm.invalid) {
      return;
    }
    this.userService.addUser(this.addForm.value)
    .subscribe({
      next: () => {

      }
    })
    // this.rows.push(this.createItemFormGroup());
  }

}

