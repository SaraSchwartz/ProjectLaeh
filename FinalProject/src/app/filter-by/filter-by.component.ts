import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sequence } from 'src/app/allClasses/Sequence';
import { myColor } from 'src/app/allClasses/myColor';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css'],
})
export class FilterByComponent implements OnInit {
  //holds the screen settings
  mySequence: Sequence;
  //if to show the types of filtering
  filterByScreenSettings = false;
  //colors of lamps
  color: myColor[];

  @Output()
  onSaveSettings: EventEmitter<Sequence> = new EventEmitter<Sequence>();
  saveSettings(height, width) {
    this.mySequence.ScreenLength = height.value;
    this.mySequence.ScreenWidth = width.value;
    this.filterByScreenSettings = false;
    this.onSaveSettings.emit(this.mySequence);
  }

  constructor() { }

  ngOnInit() {
    this.mySequence = new Sequence();
    this.mySequence.SequenceCode = 1; this.mySequence.Name = ""; this.mySequence.ClientCode = 11;
  }

}
