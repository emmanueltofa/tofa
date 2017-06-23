"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Account = (function () {
    function Account(route) {
        this.route = route;
    }
    Account.prototype.ngOnInit = function () {
    };
    return Account;
}());
Account = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./account.html",
        styleUrls: ["./account.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], Account);
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFZakQsSUFBYSxPQUFPO0lBR2hCLGlCQUNZLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCwwQkFBUSxHQUFSO0lBRUEsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLE9BQU87SUFSbkIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUMvQixDQUFDO3FDQU9xQix1QkFBYztHQUp4QixPQUFPLENBVW5CO0FBVlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWNjb3VudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FjY291bnQuY3NzXCJdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG59Il19