import { Component, OnInit, Input } from '@angular/core';
import { SequenceServiceService } from 'src/app/services/sequence-service.service';
import { Sequence } from 'src/app/allClasses/Sequence';
import { Lamp } from 'src/app/allClasses/Lamp';
import { myColor } from 'src/app/allClasses/myColor';

@Component({
  selector: 'app-showing-picture',
  templateUrl: './showing-picture.component.html',
  styleUrls: ['./showing-picture.component.css']
})
export class ShowingPictureComponent implements OnInit {

  @Input()
  outPut: Lamp[][];
  @Input()
  lamps: number[][];
  @Input()
  pictureIndex: number;
  @Input()
  animationIndex:number;
  constructor(private sequenceService: SequenceServiceService) { }

  ngOnInit() {
    this.pictureIndex = 0;
  }

}
