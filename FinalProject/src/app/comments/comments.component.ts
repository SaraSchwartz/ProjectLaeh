import { Component, OnInit,Input } from '@angular/core';
import { Sequence } from 'src/app/allClasses/Sequence';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

@Input()
mySequence:Sequence;

  constructor() { 
  }

  ngOnInit() {
  
  }

}
