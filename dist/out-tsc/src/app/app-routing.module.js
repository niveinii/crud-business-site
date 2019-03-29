import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
var routes = [
    { path: "business/create", component: AddComponent },
    { path: "business", component: GetComponent },
    { path: "business/edit/:id", component: EditComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map