import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel, NavigationStart, NavigationError, NavigationEnd, Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    // Here we added an interceptor to router event for the loading bar that is running by default as Observable
    function AppComponent(loadingBar, router) {
        var _this = this;
        this.loadingBar = loadingBar;
        this.router = router;
        this.title = 'Crude';
        this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof NavigationStart) {
            this.loadingBar.start();
        }
        if (event instanceof NavigationEnd) {
            this.loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
            this.loadingBar.stop();
        }
        if (event instanceof NavigationError) {
            this.loadingBar.stop();
        }
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SlimLoadingBarService, Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map