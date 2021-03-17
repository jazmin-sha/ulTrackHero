import { Component, OnInit, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddComponent } from './add/add.component';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { EmployeService } from './sevice/employe.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './models/employedata'
import { EmployeeD } from './models/employee';


@Component({
    templateUrl: './employee.component.html'
})


export class EmployeeComponent implements OnInit, AfterViewInit {

    @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
    searchText: any;
    displayedColumns: string[] = ['#', 'name', 'email', 'mobile', 'date of joining', 'salary', 'projects', 'action'];
    dataSource = new MatTableDataSource(Employee);
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

    public addEmployeeForm: FormGroup = Object.create(null);

  public employee_list = []

    submitted = false;

    constructor(
        public dialog: MatDialog,
         public datePipe: DatePipe,
         private http: HttpClient,
         private router: Router,
         private formBuilder: FormBuilder,
        private employeeservice: EmployeService
         ) { }

    ngOnInit(): void {


        this.addEmployeeForm = this.formBuilder.group({
            employee_name:['', Validators.required],
            employee_email:['', Validators.required],
            employee_username:['', Validators.required]
             })
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(action: string, obj: any): void {
        obj.action = action;
        const dialogRef = this.dialog.open(EmployeeDialogContent, {
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event === 'Add') {
                this.addRowData(result.data);
            }
             else if (result.event === 'Update') {
                this.updateRowData(result.data);
            } else if (result.event === 'Delete') {
                this.deleteRowData(result.data);
            }
        });
    }

    // tslint:disable-next-line - Disables all
    addRowData(row_obj: EmployeeD): void {
        swal("Hello world!");
        this.submitted = true;
        const marketDetail = this.addEmployeeForm.value;
        console.log(marketDetail);

        if ("added" + this.addEmployeeForm.invalid) {
            return;
          }
          this.employeeservice.addEmployee(this.addEmployeeForm.value)
          .subscribe({
            next: () => {

            }
          })

        // this.dataSource.data.push({
        //     id: employees.length + 1,
        //     Name: row_obj.Name,
        //     Position: row_obj.Position,
        //     Email: row_obj.Email,
        //     Mobile: row_obj.Mobile,

        //     DateOfJoining: new Date(),
        //     Salary: row_obj.Salary,
        //     Projects: row_obj.Projects,
        //     imagePath: row_obj.imagePath
        // });
        this.dialog.open(AddComponent);
        this.table.renderRows();
    }

    viewSingleEmployee(): void{
    this.router.navigate(['/apps/singleemploy']);
    }

    // tslint:disable-next-line - Disables all
    updateRowData(row_obj: EmployeeD): boolean | any {
        this.dataSource.data = this.dataSource.data.filter((value: any) => {
            if (value.id === row_obj.id) {
                value.Name = row_obj.Name;
                value.Position = row_obj.Position;
                value.Email = row_obj.Email;
                value.Mobile = row_obj.Mobile;
                value.DateOfJoining = row_obj.DateOfJoining;
                value.Salary = row_obj.Salary;
                value.Projects = row_obj.Projects;
                value.imagePath = row_obj.imagePath;
            }
            return true;
        });
    }

    // tslint:disable-next-line - Disables all
    deleteRowData(row_obj: EmployeeD): boolean | any {
        this.dataSource.data = this.dataSource.data.filter((value: any) => {
            return value.id !== row_obj.id;
        });
    }
}


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'dialog-content',
    templateUrl: 'dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class EmployeeDialogContent {

    @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);

    action: string;
    // tslint:disable-next-line - Disables all
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';


    public addEmployeeForm: FormGroup = Object.create(null);

    submitted = false;


    constructor(
        public datePipe: DatePipe,
        public dialog: MatDialog,
        private http: HttpClient,
        private formBuilder: FormBuilder,
       private employeeservice: EmployeService,
        public dialogRef: MatDialogRef<EmployeeDialogContent>,
        // @Optional() is used to prevent error if no data is passed
        @Optional() @Inject(MAT_DIALOG_DATA) public data: EmployeeD) {
        this.local_data = { ...data };
        this.action = this.local_data.action;
        if (this.local_data.DateOfJoining !== undefined) {
            this.joiningDate = this.datePipe.transform(new Date(this.local_data.DateOfJoining), 'yyyy-MM-dd');
        }
        if (this.local_data.imagePath === undefined) {
            this.local_data.imagePath = 'assets/images/users/default.png';
        }
    }

    ngOnInit(): void {
        this.addEmployeeForm = this.formBuilder.group({
            employee_name:['', Validators.required],
            employee_email:['', Validators.required],
            employee_username:['', Validators.required],
            employee_position:['', Validators.required],
            employee_salary:['', Validators.required],
            employee_project:['', Validators.required]
             })
    }

    doAction(): void {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog(): void {
        this.dialogRef.close({ event: 'Cancel' });
    }

       // tslint:disable-next-line - Disables all
    addEmpData(row_obj: EmployeeD): void {
        this.submitted = true;
        const marketDetail = this.addEmployeeForm.value;
        console.log(marketDetail);

        if ("added" + this.addEmployeeForm.invalid) {
            return;
          }
          this.employeeservice.addEmployee(this.addEmployeeForm.value)
          .subscribe({
            next: () => {

            }
          })
          swal("Hello world!");
          this.dialogRef.close();
          this.dialog.open(AddComponent);
        //   this.table.renderRows();
     }

}
