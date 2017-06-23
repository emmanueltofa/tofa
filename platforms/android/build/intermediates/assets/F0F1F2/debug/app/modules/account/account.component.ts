import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./account.html",
    styleUrls: ["./account.css"]
})


export class Account implements OnInit {
  

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }
}