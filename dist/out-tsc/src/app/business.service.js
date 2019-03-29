import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BusinessService = /** @class */ (function () {
    function BusinessService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000/business';
    }
    BusinessService.prototype.addBusiness = function (person_name, business_name, business_reg_num) {
        var myObj = {
            person_name: person_name,
            business_name: business_name,
            business_reg_num: business_reg_num
        };
        console.log(myObj);
        this.http.post(this.uri + "/add", myObj).subscribe(function (res) { return console.log('Done!'); });
    };
    BusinessService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BusinessService);
    return BusinessService;
}());
export { BusinessService };
//# sourceMappingURL=business.service.js.map