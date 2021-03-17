import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AdminService } from '../../admin/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    admin_username: '',
    admin_password: ''
  };

  public form: FormGroup = Object.create(null);
  constructor(
      private fb: FormBuilder, 
      private router: Router,
      private auth: AdminService
      ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      admin_username: [null, Validators.compose([Validators.required])],
      admin_password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(): void {
    this.auth.adminLogin(this.credentials)
    .subscribe(() => {
      this.router.navigate(['/admin/getAllUserData']);
    },
    (err) => {
      console.error(err);
    });
  }
}
