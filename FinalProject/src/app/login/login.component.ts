import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/allClasses/client';
import { dataBase } from 'src/app/allClasses/dataBase';
import { ConnectToServerService } from 'src/app/services/connect-to-server.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  //holds client's details
  myClient: Client;
  //why??
  exist = false;
  //to make the submit disabled after clicking
  Beforeclicked = true;

  constructor(private connectToServer: ConnectToServerService, private router: Router) {
  }
  ngOnDestroy() {

  }
  ngOnInit() {
    this.myClient = new Client("", "", "");
  }
  @ViewChild('submitUser') myform: NgForm;

  submitForm() {
    this.Beforeclicked = false;
    this.connectToServer.getClient(this.myClient.Name, this.myClient.Password).subscribe(data => {
      this.myClient.ClientCode = data
      if (this.myClient.ClientCode > 0) {
        //i have to subscribe here!!!
        this.connectToServer.setClientDetails(this.myClient);
        // this.router.navigate(['/home']);
      }
      else {
        this.Beforeclicked = true;
        return alert("not an existing user, please add yourself");

      }
    }, error => { console.log(error) });
  }
}
