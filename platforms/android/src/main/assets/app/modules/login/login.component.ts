import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";

import {Page} from "ui/page";
import {Auth} from "./../../providers/auth";


@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./login.html",
    styleUrls: ["./login.css"]
})


export class Login implements OnInit {


    constructor( private route: ActivatedRoute,private page: Page,private router: Router) {
        page.actionBarHidden = true;
       /* var login = 'false'
        if (login = 'true'){
        this.router.navigate(["/home"]);
        } else{
            this.router.navigate(["/login"]);
        }*/
        
       
     }




    ngOnInit(): void {

    }
}