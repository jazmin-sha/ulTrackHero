import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user = {
    username:'',
    password:'',
  }
  public addForm: FormGroup = Object.create(null);

  submitted = false;

  constructor(
    private userService : AdminService,
    private formBuilder : FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      username:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  addUser(){
    console.log('Yes You are trapped!');

    const data ={
      username:this.user.username,
      password: this.user.password
    };

    this.userService.addNewUser(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/admin/getAllUserData'])
      },
      error => {
        console.log(error);
      }
    )
  }
}
