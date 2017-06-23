import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { openTelegramImagePicker, TelegramPickerResponse } from 'nativescript-telegram-image-picker';
var Sqlite = require("nativescript-sqlite");



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./supplier.html",
    styleUrls: ["./supplier.css"]
})


export class Supplier implements OnInit {
    public selectedIndex = 1;
    public items: Array<string>;
    public firm: Array<string>;
    public industry: Array<string>;
    public mproducts: Array<string>;
    public mcategories:Array<string>;
    public pcategories:Array<string>;
    public pterms:Array<string>;
    public mcovered:Array<string>;
    public HQualification:Array<string>;

    private database: any;
    public supplier: Array<any>;
    
    constructor(
        private route: ActivatedRoute
    ) 
    { this.supplier = [];
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });

        this.items = [];
        for (var i = -1; i < 5; i++) {
            this.items.push("data item " + i);};
    }

    ngOnInit(): void {

    }
    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }
 
    public onopen() {
        console.log("Drop Down opened.");
    }


public open() {

    // Open the Telegram Gallery Image Picker Activity      
    openTelegramImagePicker(5).then((resp: TelegramPickerResponse) => {
       // looping over the selected pictures in the response        
       for (var i = 0; i < resp.photos.length; i++) {
         console.log(resp.photos[i]);
       }
    })

}

public insert() {
        this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then(id => {
            console.log("INSERT RESULT", id);
            this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }
 
    public fetch() {
        this.database.all("SELECT * FROM people").then(rows => {
            this.supplier = [];
            for(var row in rows) {
                this.supplier.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }


}
    

