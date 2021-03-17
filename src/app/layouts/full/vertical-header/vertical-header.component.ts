import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { AdminService } from '../../../admin/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-header',
  templateUrl: './vertical-header.component.html',
  styleUrls: []
})

export class VerticalAppHeaderComponent {
  public config: PerfectScrollbarConfigInterface = {};



  constructor(
    private translate: TranslateService,
    private service: AdminService,
    private router: Router
      ) {
    translate.setDefaultLang('en');
  }

  changeLanguage(lang: any): void {

  }

  logoutAdmin(){
    console.log("Get Out");    
    this.service.deleteToken()
    this.router.navigate(['/authentication/adminLogin']);
  }
}
