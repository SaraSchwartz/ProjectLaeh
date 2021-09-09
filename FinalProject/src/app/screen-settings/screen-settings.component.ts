import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SequenceServiceService } from '../services/sequence-service.service';
import { NgForm } from '@angular/forms';
import { Lamp } from 'src/app/allClasses/Lamp';
import { myColor } from 'src/app/allClasses/myColor';
import { error } from 'util';
import { ConnectToServerService } from '../services/connect-to-server.service';

@Component({
  selector: 'app-screen-settings',
  templateUrl: './screen-settings.component.html',
  styleUrls: ['./screen-settings.component.css']
})
export class ScreenSettingsComponent implements OnInit {

  //if showing the screen settings
  showSettings = true;



  i = false;
  // הגדרות מסך
  height: number;
  width: number;
  myColors: myColor[];
  lampsArray: Lamp[][];
  // רשימה של צבעים 
  theColors: myColor[];
  //for colors in the ngFor
  isChecked: Checked;

  disable = false;

  constructor(private sequenceService: SequenceServiceService) { }

  @ViewChild('submitSettings') myform: NgForm;

  //if a lamp is active or not
  changeIsactive(lamp: Lamp) {
    lamp.IsActive = !lamp.IsActive;
    this.lampsArray[0];
  }

  //change the status of a color (checked or not)
  colorSelected(color) {
    color.isChecked = !(color.isChecked);
  }

  // @Output()
  // OnEnablePictures: EventEmitter<boolean> = new EventEmitter<boolean>();

  //if to show the choosepicture... component
  @Output()
  onChoosePictures: EventEmitter<boolean> = new EventEmitter<boolean>();
  submitForm() {
    if (this.showSettings) {
      this.sequenceService.setScreenSettings(this.width, this.height, this.myColors);
      this.lampsArray = new Array<Lamp[]>(this.width)
      for (var i = 0; i < this.height; i++) {
        this.lampsArray[i] = new Array<Lamp>(this.height)
        for (var j = 0; j < this.width; j++) {
          this.lampsArray[i][j] = new Lamp(i, j);
          this.lampsArray[i][j].colorsArray[0] ='red';
        }
      }
      this.showSettings = false;
    }
    else {
      this.disable = true;
      this.sequenceService.setLampArray(this.lampsArray).subscribe(data => { this.i = data; this.onChoosePictures.emit(); });

    }

  }

  //send the lamps array every lamp if its active or not
  setLampsArray() {
    //לא למחוק!!!
    this.sequenceService.setLampArray(this.lampsArray).subscribe(data => { this.i = data });
  }

  ngOnInit() {
    this.height = 10;
    this.width = 10;
    this.myColors = [new myColor("אדום", "red", false), new myColor("צהוב", "yellow", false), new myColor("ירוק", "green", false), new myColor("כחול", "blue", false), new myColor("כתום", "orange", false)];
   // this.theColors = [new myColor("אדום", "red", true), new myColor("צהוב", "yellow", false), new myColor("ירוק", "green", false), new myColor("כחול", "blue", true), new myColor("כתום", "orange", false)];
    this.isChecked = new Checked();
    this.isChecked.on = true;
    this.isChecked.off = false;
  }
}

export class Checked {
  on: boolean;
  off: boolean;
}
