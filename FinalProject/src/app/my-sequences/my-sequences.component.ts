import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sequences',
  templateUrl: './my-sequences.component.html',
  styleUrls: ['./my-sequences.component.css']
})
export class MySequencesComponent implements OnInit {
  //why??
  name = "";
  constructor() { }

  showMySelectedSequence(e) {
    this.name = e.sequenceName;
  }

  ngOnInit() {
  }

}
