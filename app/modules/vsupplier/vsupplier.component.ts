import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./vsupplier.html",
    styleUrls: ["./vsupplier.css"]
})


export class VSupplier implements OnInit {
  

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }
}
