"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var Login = (function () {
    function Login(route, page, router) {
        this.route = route;
        this.page = page;
        this.router = router;
        page.actionBarHidden = true;
        /* var login = 'false'
         if (login = 'true'){
         this.router.navigate(["/home"]);
         } else{
             this.router.navigate(["/login"]);
         }*/
    }
    Login.prototype.ngOnInit = function () {
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./login.html",
        styleUrls: ["./login.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page, router_1.Router])
], Login);
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUV4RCxnQ0FBNkI7QUFZN0IsSUFBYSxLQUFLO0lBR2QsZUFBcUIsS0FBcUIsRUFBUyxJQUFVLEVBQVMsTUFBYztRQUEvRCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzdCOzs7OztZQUtJO0lBR04sQ0FBQztJQUtGLHdCQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksS0FBSztJQVJqQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM3QixDQUFDO3FDQU04Qix1QkFBYyxFQUFlLFdBQUksRUFBaUIsZUFBTTtHQUgzRSxLQUFLLENBcUJqQjtBQXJCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtBdXRofSBmcm9tIFwiLi8uLi8uLi9wcm92aWRlcnMvYXV0aFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jc3NcIl1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAvKiB2YXIgbG9naW4gPSAnZmFsc2UnXG4gICAgICAgIGlmIChsb2dpbiA9ICd0cnVlJyl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgfSovXG4gICAgICAgIFxuICAgICAgIFxuICAgICB9XG5cblxuXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cbn0iXX0=