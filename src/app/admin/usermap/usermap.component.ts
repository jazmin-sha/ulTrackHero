import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.scss']
})
export class UsermapComponent implements OnInit {

  currentUser: any;
  meassege = '';
  closeResult = '';

  zoom :number = 2
  // map
  // latitude = 	11.2539351;
  // longitude = 75.8330672;
  // googleMapType = 'satellite';

  constructor(
    private route: ActivatedRoute,
    private userService: AdminService,
  ) { }

  ngOnInit(): void {
    this.meassege = '';
    this.getUserMap(this.route.snapshot.paramMap.get('id'));
  }

  getUserMap(id:any): void{
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

}
