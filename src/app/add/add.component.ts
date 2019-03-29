import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private businessService: BusinessService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.myForm = this.formBuilder.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_reg_num: ['', Validators.required]
    });
  }
 addBusiness(person_name,business_name,business_reg_num){
  this.businessService.addBusiness(person_name,business_name,business_reg_num);
 }

}
