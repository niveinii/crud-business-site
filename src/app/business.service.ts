import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/business';
  editUri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  addBusiness(person_name, business_name, business_reg_num) {
    const myObj = {
      person_name: person_name,
      business_name: business_name,
      business_reg_num: business_reg_num
    };
    this.http.post(`${this.uri}/add`, myObj).subscribe(res => console.log('Done!'));
  }
  getBusiness() {
    return this.http.get(`${this.uri}`);
  }
  editBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateBusiness(id, person_name, business_name, business_reg_num) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_reg_num: business_reg_num
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe((res) => {
      console.log('Updated');
    });
  }
  deleteBusiness(id){
     return this.http.get(`${this.uri}/delete/${id}`, id).subscribe((res)=>{
       console.log(res);
     })
  }
}
