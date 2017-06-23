"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var account_component_1 = require("./account/account.component");
var supplier_component_1 = require("./supplier/supplier.component");
var vsupplier_component_1 = require("./vsupplier/vsupplier.component");
var settings_component_1 = require("./settings/settings.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: '', component: login_component_1.Login },
                { path: 'account', component: account_component_1.Account },
                { path: 'supplier', component: supplier_component_1.Supplier },
                { path: 'vsupplier', component: vsupplier_component_1.VSupplier },
                { path: 'settings', component: settings_component_1.Settings }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBZ0Q7QUFDaEQsaUVBQXFEO0FBQ3JELG9FQUF5RDtBQUN6RCx1RUFBNEQ7QUFDNUQsb0VBQXlEO0FBZ0J6RCxJQUFhLGdCQUFnQjtJQUE3QjtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksZ0JBQWdCO0lBZjVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLE9BQU8sQ0FBQztnQkFDL0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO2dCQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Z0JBQ2hELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsdUJBQUssRUFBRTtnQkFDOUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSwyQkFBTyxFQUFFO2dCQUN2QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDZCQUFRLEVBQUM7Z0JBQ3hDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQVMsRUFBRTtnQkFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2QkFBUSxFQUFFO2FBQzFDLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY291bnR9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdXBwbGllciB9IGZyb20gJy4vc3VwcGxpZXIvc3VwcGxpZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFZTdXBwbGllciB9IGZyb20gJy4vdnN1cHBsaWVyL3ZzdXBwbGllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdjb250YWN0JywgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luIH0sXG4gICAgICB7IHBhdGg6ICdhY2NvdW50JywgY29tcG9uZW50OiBBY2NvdW50IH0sXG4gICAgICB7IHBhdGg6ICdzdXBwbGllcicsIGNvbXBvbmVudDogU3VwcGxpZXJ9LFxuICAgICAgeyBwYXRoOiAndnN1cHBsaWVyJywgY29tcG9uZW50OiBWU3VwcGxpZXIgfSxcbiAgICAgIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5ncyB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==