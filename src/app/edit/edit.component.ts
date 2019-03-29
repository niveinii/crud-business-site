import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  business: any = {};
  angularForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private businessService: BusinessService, private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.angularForm = this.formBuilder.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_reg_num: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.businessService.editBusiness(params['id']).subscribe((res) => {
        this.business = res;
      });
    });
  }
  updateBusiness(person_name, business_name, business_reg_num) {
    this.route.params.subscribe((params) => {
      this.businessService.updateBusiness(params['id'], person_name, business_name, business_reg_num);
      this.router.navigate(['business']);
    });
  }
  
}
