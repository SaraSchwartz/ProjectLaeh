import { Component, OnInit } from '@angular/core';
import { dataBase } from 'src/app/allClasses/dataBase';
import { SequenceServiceService } from '../services/sequence-service.service';
import { ConnectToServerService } from '../services/connect-to-server.service';
import { Lamp } from 'src/app/allClasses/Lamp';

@Component({
  selector: 'app-new-sequence',
  templateUrl: './new-sequence.component.html',
  styleUrls: ['./new-sequence.component.css']
})
export class NewSequenceComponent implements OnInit {
  //if showing choosepicture... component
  choosePicture = false;

  constructor(private sequenceService: SequenceServiceService, private userService: ConnectToServerService) {
    this.sequenceService.setClientCode(this.userService.currentClient.ClientCode);
  }
  ngOnInit() {
  }

}
