import { Component, OnInit } from '@angular/core';
import { Sequence } from 'src/app/allClasses/Sequence';

@Component({
  selector: 'app-shared-sequences',
  templateUrl: './shared-sequences.component.html',
  styleUrls: ['./shared-sequences.component.css']
})
export class SharedSequencesComponent implements OnInit {
  selectedSequence: Sequence;
  showSequence = false;
  selectedSettings: Sequence;

  showSelectedSequence(event) {
    this.selectedSequence = event;
    this.showSequence = true;
  }
  filterBySettings(event) {
    this.selectedSettings.ScreenLength = event.ScreenLength;
    this.selectedSettings.ScreenWidth = event.ScreenWidth;
  }

  constructor() { }

  ngOnInit() {
    this.selectedSettings=new Sequence();
    this.selectedSettings.ScreenWidth=0;
    this.selectedSettings.ScreenLength=0;
    // this.selectedSettings.SequenceCode=1;this.selectedSettings.Name= "aaaaaaaa"; this.selectedSettings.ClientCode= 11;

  
    this.selectedSequence=new Sequence();
    // this.selectedSettings.SequenceCode=1;this.selectedSettings.Name= "aaaaaaaa"; this.selectedSettings.ClientCode= 11;


  }


}
