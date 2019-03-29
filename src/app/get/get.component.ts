import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../Business';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  businesses: Business[];
  constructor(private businessService: BusinessService, private router: Router) { }

  ngOnInit() {
    this.businessService.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }
  deleteBusiness(id) {
    this.businessService.deleteBusiness(id);
    this.refresh();
  }
  refresh() {
    window.location.reload();
  }
}
