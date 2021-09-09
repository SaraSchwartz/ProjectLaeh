import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {
  ngOnInit() {
  }
//   private isUploadBtn: boolean = true;
//   constructor(private http: Http) {
//   }
//   //file upload event  
//   fileChange(event) {
//     let fileList: FileList = event.target.files;
//     if (fileList.length > 0) {
//       let file: File = fileList[0];
//       let formData: FormData = new FormData();
//       formData.append('uploadFile', file, file.name);
//       let headers = new Headers()
//       //headers.append('Content-Type', 'json');  
//       //headers.append('Accept', 'application/json');  
//       let options = new RequestOptions({ headers: headers });
//       let apiUrl1 = "/api/UploadFileApi";
//       this.http.post(apiUrl1, formData, options)
//         .map(res => res.json())
//         .catch(error => Observable.throw(error))
//         .subscribe(
//         data => console.log('success'),
//         error => console.log(error)
//         )
//     }
//     window.location.reload();
//   }
}  
