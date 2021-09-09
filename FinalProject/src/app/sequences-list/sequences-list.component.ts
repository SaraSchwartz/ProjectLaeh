import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { dataBase } from 'src/app/allClasses/dataBase';
import { Sequence } from 'src/app/allClasses/Sequence';
import { ConnectToServerService } from 'src/app/services/connect-to-server.service';


@Component({
  selector: 'app-sequences-list',
  templateUrl: './sequences-list.component.html',
  styleUrls: ['./sequences-list.component.css'],
})
export class SequencesListComponent implements OnInit {

  //filter by text
  searchText: string;
  showSequencesList=false;

  //???
  mySequence: Sequence;

  //show sequence comments
  @Output()
  onSelectedSequence: EventEmitter<Sequence> = new EventEmitter<Sequence>();
  showSelectedSequence(s: Sequence) {
    this.onSelectedSequence.emit(s)
  }


  //to show my sequences or shared 
  @Input()
  status: string;

  //filter by screen settings
  @Input()
  mySettings: Sequence;

  constructor(private connectToServer: ConnectToServerService) {
  }

  ngOnInit() {
  }

  ////???
  show() {
    this.mySequence = new Sequence();
    this.mySequence.SequenceCode=1;this.mySequence.Name= ""; this.mySequence.ClientCode= 11;

  }
}
