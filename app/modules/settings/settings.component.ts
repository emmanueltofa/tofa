import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./settings.html",
    styleUrls: ["./settings.css"]
})


export class Settings implements OnInit {
  

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }
}