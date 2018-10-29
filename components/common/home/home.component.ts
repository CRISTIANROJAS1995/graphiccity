import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateRoutesService } from '../../../services/common/validate-routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _validateRoute: ValidateRoutesService) { }

  permissions;
  userData;
  isPermissions: boolean;

  getPermissions() {
    this.permissions = JSON.parse(sessionStorage.getItem('access'));
    this.userData = JSON.parse(sessionStorage.getItem('userData'));
  }

   // tslint:disable-next-line:member-ordering
   barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   // tslint:disable-next-line:member-ordering
   barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   // tslint:disable-next-line:member-ordering
   barChartType = 'bar';
   // tslint:disable-next-line:member-ordering
   barChartLegend = true;
 
   // tslint:disable-next-line:member-ordering
   barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 


  ngOnInit() {
    this.getPermissions();
    this.isPermissions = this._validateRoute.validateRoutes(this.permissions, this.router.url);

    if (this.isPermissions === false || this.isPermissions === undefined || this.isPermissions === null) {
      this.router.navigateByUrl('');
    }

    
  }

}
