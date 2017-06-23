"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-drop-down/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var account_component_1 = require("./account/account.component");
var supplier_component_1 = require("./supplier/supplier.component");
var vsupplier_component_1 = require("./vsupplier/vsupplier.component");
var settings_component_1 = require("./settings/settings.component");
var shared_1 = require("./shared");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule,
            angular_1.DropDownModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            login_component_1.Login,
            settings_component_1.Settings,
            vsupplier_component_1.VSupplier,
            supplier_component_1.Supplier,
            account_component_1.Account
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDBEQUFnRTtBQUNoRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsaUVBQStEO0FBQy9ELDJEQUFnRDtBQUNoRCxpRUFBcUQ7QUFDckQsb0VBQXlEO0FBQ3pELHVFQUE0RDtBQUM1RCxvRUFBeUQ7QUFHekQsbUNBQXdDO0FBc0J4QyxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUFwQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQixxQ0FBZ0I7WUFDaEIscUJBQVk7WUFDWix3QkFBYztTQUNqQjtRQUNDLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQix1QkFBSztZQUNMLDZCQUFRO1lBQ1IsK0JBQVM7WUFDVCw2QkFBUTtZQUNSLDJCQUFPO1NBQ1I7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2NvdW50fSBmcm9tICcuL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VwcGxpZXIgfSBmcm9tICcuL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWU3VwcGxpZXIgfSBmcm9tICcuL3ZzdXBwbGllci92c3VwcGxpZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSwgXG4gICAgRHJvcERvd25Nb2R1bGUgXG5dLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICAgIExvZ2luLFxuICAgIFNldHRpbmdzLFxuICAgIFZTdXBwbGllcixcbiAgICBTdXBwbGllcixcbiAgICBBY2NvdW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19