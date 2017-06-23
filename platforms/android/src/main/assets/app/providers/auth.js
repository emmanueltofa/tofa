"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
/*
  Generated class for the Restapi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Auth = (function () {
    function Auth(http) {
        this.http = http;
        console.log('Hello Restapi Provider');
    }
    return Auth;
}());
Auth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQjs7Ozs7RUFLRTtBQUVGLElBQWEsSUFBSTtJQUVmLGNBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSUgsV0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksSUFBSTtJQURoQixpQkFBVSxFQUFFO3FDQUdjLFdBQUk7R0FGbEIsSUFBSSxDQVFoQjtBQVJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBSZXN0YXBpIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24uaHRtbFxuICBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVycyBhbmQgQW5ndWxhciAyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBSZXN0YXBpIFByb3ZpZGVyJyk7XG4gIH1cblxuXG5cbn0iXX0=