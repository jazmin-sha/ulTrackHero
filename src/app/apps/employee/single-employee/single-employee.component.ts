import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddComponent } from '../add/add.component';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { EmployeService } from '../sevice/employe.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
