import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PictureAndAnimatiom, Picture, Animation } from 'src/app/allClasses/PictureAndAnimation';
import { Url } from 'url';
import { SequenceServiceService } from 'src/app/services/sequence-service.service';
import { Lamp } from 'src/app/allClasses/Lamp';
import { myColor } from '../allClasses/myColor';


@Component({
  selector: 'app-choose-picture-and-animation',
  templateUrl: './choose-picture-and-animation.component.html',
  styleUrls: ['./choose-picture-and-animation.component.css']
})
export class ChoosePictureAndAnimationComponent implements OnInit {

  animationsTypes = ["-בחר הנפשה-", "מלמעלה ללמטה", "מלמטה ללמעלה", "מימין לשמאל", "משמאל לימין"];
  ///?????
  lamps: number[][];
  //hold the properties of all the pictures
  urls = new Array<string>();
  picturesName = new Array<string>();
  animations = new Array<Animation>();
  outPut = new Array<Lamp[][]>();
  //if setting picture or not
  settingPicture = false;
  //the current setted picture
  currentPictureId: number;
  //
  PicIndex = 0;
  animIndex = 0;

  //if showing the picture or not
  show = false;
  //whitch output to show
  currentOutPut: Lamp[][];

  //about the whole sequence //

  //the sequence output
  theMainOutput: Lamp[][];
  //if the main output have been calculated or not 
  //maybe i can make the mainoutput null when there is a change and omly to check it but it might make a pronlem if its nullbut probablyit does not matter because i dont show the component when its null
  newCalculation = true;


  constructor(private sequenceService: SequenceServiceService) { }

  ngOnInit() {
    //till it will work set the output
    this.currentOutPut = [];
    //יתכן שאין צורך בזה אלא רק בcurrentOutPut
    this.lamps = [];
    for (var i = 0; i < 10; i++) {
      this.currentOutPut[i] = [];
      this.lamps[i] = [];
      for (var j = 0; j < 10; j++) {
        this.lamps[i][j] = 1;
        this.currentOutPut[i][j] = new Lamp(i, j);
        this.currentOutPut[i][j].colorsArray[0] = "red";
      }
    }

  }



  //work with picture
  detectFiles(event) {
    let files = event.target.files;
    var anim = new Array<string>();
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
          //???
          this.animations.push();
          ///
        }
        reader.readAsDataURL(file);
      }
      for (var i = 0; i < files.length; i++) {
        this.animations.push(Animation.topToButtom);
        this.outPut.push(null);
        this.picturesName.push(files[i].name);
      }
      this.newCalculation = true;
    }
  }



  keys(): Array<Animation> {
    var animations = new Array<Animation>();
    animations.push(Animation.buttomTotop);
    animations.push(Animation.leftToRight);
    animations.push(Animation.rightToLeft);
    animations.push(Animation.topToButtom);
    return animations;

  }

  //show the component of setting picture(send the current picture id)
  setPicture(pictureId: number) {
    this.settingPicture = true;
    this.currentPictureId = pictureId;
  }

  //delete picture
  deletePicture() {
    this.urls.splice(this.currentPictureId, 1);
    this.picturesName.splice(this.currentPictureId, 1);
    this.animations.splice(this.currentPictureId, 1);
    this.outPut.splice(this.currentPictureId, 1);
    this.newCalculation = true;
  }

  //set the choosed animation
  animationSelected(picId: number, anim: Animation) {
    this.animations[picId] = anim;
    this.newCalculation = true;
  }

  setAndShowSequence() {
    if (this.newCalculation == true) {
      this.newCalculation = false;
      this.sequenceService.setSequence(this.picturesName, this.animations)
        .subscribe(data => {
          this.theMainOutput = data
          this.currentOutPut = this.theMainOutput;
          this.show = true;
          for (var i = 0; i < this.picturesName.length; i++) {
            this.PicIndex = i;
            var len = this.waitForAnimation(this.animations[i]);
            for (var j = 0; j < len; j++) {
              this.animIndex = j;
              setTimeout(() => { console.log("wait.....") }, 500);
            }
            setTimeout(() => { console.log("wait.....") }, 1500);
          }
        });
    }
    else {
      this.currentOutPut = this.theMainOutput;
      this.show = true;
    }

  }
  waitForAnimation(animation: Animation) {
    var len;
    switch (animation) {
      case Animation.buttomTotop:
      case Animation.topToButtom:
        len = this.currentOutPut.length;
        break;
      default:
        len = this.currentOutPut[0].length;
        break;
    }
    return len;
  }
  setAndShowPicture() {
    this.newCalculation = true;
    var url = new Array<string>();
    var animation = new Array<Animation>();
    var pictures = new Array<string>();
    pictures.push(this.picturesName[this.currentPictureId]);
    url.push(this.urls[this.currentPictureId]);
    animation.push(this.animations[this.currentPictureId]);
    if (this.outPut[this.currentPictureId] == null) {
      this.sequenceService.setSequence(pictures, animation)
        .subscribe(
        data => {
          this.outPut[this.currentPictureId] = data;
         // this.currentOutPut = this.outPut[this.currentPictureId];
          this.show = true;
            this.PicIndex=0;
            var len = this.waitForAnimation(this.animations[this.currentPictureId]);
            for (var i = 0; i < len; i++) {
              this.animIndex = i;
              setTimeout(() => { console.log("wait.....") }, 500);
            }
          });
      //this.show = true;
    }
    else {
      this.currentOutPut = this.outPut[this.currentPictureId];
      this.show = true;
    }
  }

  //and to download a file with output
  onSaveSeqence() {
    if (this.newCalculation == false) {
      this.sequenceService.saveSequence();
    }
    else {
      this.sequenceService.setAndSaveSequence(this.picturesName, this.animations);
    }
  }
}


