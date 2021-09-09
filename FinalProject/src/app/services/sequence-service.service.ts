import { Injectable, OnInit } from '@angular/core';
import { Sequence, ScreenSettings } from '../allClasses/Sequence';
import { PictureAndAnimatiom, Picture, Animation } from '../allClasses/PictureAndAnimation';
import { myColor } from 'src/app/allClasses/myColor';
import { Observable } from 'rxjs/internal/Observable';
import { Lamp } from 'src/app/allClasses/Lamp';
import { HttpClient, HttpParams } from '@angular/common/http';
import { strictEqual } from 'assert';
import { ConnectToServerService } from 'src/app/services/connect-to-server.service';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class SequenceServiceService implements OnInit {
  baseUrl = "http://localhost:55281/api/";
  mySequence: Sequence;
  // 56614

  ngOnInit() {
    this.mySequence = new Sequence();
    this.mySequence.lampsDetails = [];
    for (var i = 0; i < 10; i++) {
      this.mySequence.lampsDetails[i] = [];
      for (var j = 0; j < 10; j++) {
        this.mySequence.lampsDetails[i][j] = new Lamp(i, j);
        this.mySequence.lampsDetails[i][j].colorsArray[0] ='green';
      }
    }
  }

  constructor(private http: HttpClient, private connectToServer: ConnectToServerService) { }

  setClientCode(clientCode: number) {
    this.mySequence = new Sequence();
    this.mySequence.ClientCode = clientCode;
  }

  setScreenSettings(width: number, height: number, colors: myColor[]) {
    this.mySequence.color =[];
    for (var i = 0; i < colors.length; i++) {
      if(colors[i].isChecked){
        this.mySequence.color.push(colors[i]);
      }
    }
    this.mySequence.ScreenWidth = width;
    this.mySequence.ScreenLength = height;
    

  }




  setLampArray(lampsDetails: Lamp[][]): Observable<boolean> {
    this.mySequence.lampsDetails = lampsDetails;
    var settings = new ScreenSettings();
    settings.Height = this.mySequence.ScreenLength;
    settings.Width = this.mySequence.ScreenWidth;
    settings.Lamps = this.mySequence.lampsDetails;
    settings.MyColor = [];
    settings.ClientCode = this.connectToServer.currentClient.ClientCode;

    for (var i = 0; i < this.mySequence.color.length; i++) {
      settings.MyColor.push(this.mySequence.color[i].name)
    }
    return this.http.post<boolean>(this.baseUrl + "Sequence/Post", settings);
  }
  setSequence(pictures: Array<string>, animations: Array<Animation>): Observable<Lamp[][]> {
    this.mySequence.Pictures = pictures;
    this.mySequence.Animations = animations;
    return this.http.post<Lamp[][]>(this.baseUrl + "Sequence/SetPictureAndAnimation", {
      pictures: pictures,
      animations: animations
    });
  }


  saveSequence() {
    return this.http.get<number>(this.baseUrl + "Sequence/saveSequence");
  }

  setAndSaveSequence(urls: Array<string>, animations: Array<string>) {
    return this.http.post<number>(this.baseUrl + "Sequence/setAndSaveSequence", { pictures: urls, animation: animations });


  }

  // setPicture(pic: string, anim: string): Observable<Lamp[][]> {
  //   return this.http.post<Lamp[][]>(this.baseUrl + "Sequence/Post", { picture: pic, animation: anim });

  // }

  // getSequenceDetails(): {
  //   return this.http.get<Lamp[][]>(this.baseUrl + "Sequence?mySequence=" + this.mySequence);
  // }

  // getSequenceDetails(): Observable<Sequence>{
  //    return this.http.get<Sequence>(this.baseUrl + "Sequence?mySequence=" + this.mySequence);
  // }


  // getSequenceDetails(): Observable<Lamp[][]> {
  //   return this.http.get<Lamp[][]>(this.baseUrl + "MySequences/Get");
  // }


  // getSequenceDetails() {
  //   return this.mySequence.lampsDetails;
  // }



}




