import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) {}
  
contactdetails:any={};
  contactstatus:boolean=true;
  editcontact:boolean=false;
  addcontact:boolean=false;
contactform:any={
  cname:null,
phone:null,
email:null,
comments:null
};
ngOnInit(){

  this.showcontact();
}
  showcontact(){
    this.contactdetails= JSON. parse(localStorage. getItem("contactdata")!); 
    console.log(this.contactdetails);
    this.contactstatus=true;
    this.editcontact=false;
    this.addcontact=false;
 
  }
addcontacts(){
  this.contactstatus=false;
  this.editcontact=false;
  this.addcontact=true;
}
onsubmit(){
 let a=JSON. parse(localStorage. getItem("contactdata")!);
 a.unshift(this.contactform);
  localStorage. setItem("contactdata", JSON. stringify(a));
this.showcontact();
}
 presentToast(msg: string, duration:number=3000) {

    let toast =msg ;

    if(toast !=''){
      this._snackBar.open(toast, "x", {
        duration,
        horizontalPosition: 'right',
        verticalPosition: 'top'

      });
    }
  }
}