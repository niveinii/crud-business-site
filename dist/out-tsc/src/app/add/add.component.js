import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
var AddComponent = /** @class */ (function () {
    function AddComponent(formBuilder, businessService) {
        this.formBuilder = formBuilder;
        this.businessService = businessService;
        this.createForm();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.createForm = function () {
        this.myForm = this.formBuilder.group({
            person_name: ['', Validators.required],
            business_name: ['', Validators.required],
            business_reg_num: ['', Validators.required]
        });
    };
    AddComponent.prototype.addBusiness = function (person_name, business_name, business_reg_num) {
        return this.businessService.addBusiness(person_name, business_name, business_reg_num);
    };
    AddComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, BusinessService])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=add.component.js.map