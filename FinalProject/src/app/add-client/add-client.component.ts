import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/allClasses/client';
import { Router } from '@angular/router';
import { ConnectToServerService } from 'src/app/services/connect-to-server.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  newClient: Client;
  passwordVerificationpv = "";
  success=false;
  constructor(private connectToServer: ConnectToServerService,private router: Router) { }

  ngOnInit() {
    this.newClient = new Client( "", "", "");
  }

  @ViewChild('submitUser') myform: NgForm;


  submitForm() {
    this.connectToServer.postUser(new Client(this.newClient.Name,this.newClient.Password,this.newClient.Email)).subscribe( data => {this.success = data
      if (this.success==true) {
        this.router.navigate(['']);
     }
     else {
       return alert("שם משתמש כבר קיים");
 
     }}, error => {console.log(error)});      
    //..save the data
  
  }

  equals1() {
    var b=this.newClient.Password==this.passwordVerificationpv;
    return b;
  }

}
