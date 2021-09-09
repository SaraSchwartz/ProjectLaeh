import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-setting-picture',
  templateUrl: './setting-picture.component.html',
  styleUrls: ['./setting-picture.component.css']
})
export class SettingPictureComponent implements OnInit {

  //if closing the stting component
  @Output()
  onCloseSetting:EventEmitter<number>=new EventEmitter<number>();
  closeSetting(){
    this.onCloseSetting.emit();  
  }
  //delete the picture
  @Output()
  onDeletePic:EventEmitter<number>=new EventEmitter<number>();
  deletePic(){
    this.onDeletePic.emit();
  }
//show the picture
  @Output()
  onShowPicture:EventEmitter<number>=new EventEmitter<number>();
  showPic(){
    this.onShowPicture.emit();
  }
//stop showing the picture
  @Output()
  onStopShowing:EventEmitter<number>=new EventEmitter<number>();
  stopShowing(){
    this.onStopShowing.emit();

  }
  constructor() { }

  ngOnInit() {
  }

}
