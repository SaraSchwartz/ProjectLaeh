import { Injectable } from '@angular/core';
import { Client } from 'src/app/allClasses/client';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sequence } from 'src/app/allClasses/Sequence';
import { Lamp } from '../allClasses/Lamp';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectToServerService {
  currentClient: Client;
  sharedSequences: Sequence[];
  mySequences: Sequence[];
  constructor(private http: HttpClient,private router: Router) {
  }

  baseUrl = "http://localhost:55281/api/";


  getClient(name: string, password: string): Observable<number> {
    return this.http.get<number>(this.baseUrl + "Client/Get?name=" + name + "&&password=" + password);
  }

  postUser(myclient: Client): Observable<boolean> {
    //return this.http.get<boolean>(this.baseUrl + "Client/Get?name=yyy&&password=yyyyy");
    return this.http.post<boolean>(this.baseUrl + "Client/Post", myclient);
  }



  setClientDetails(client: Client) {
    this.currentClient = client;
    this.sharedSequences = [];
    this.mySequences = [];
    this.GetMySequences().subscribe(data => {
    this.mySequences = data
      this.getSharedSequences().subscribe(data => { 
        this.sharedSequences = data;
        this.router.navigate(['/home']);
      });
    });
  }

  getSharedSequences(): Observable<Sequence[]> {
    return this.http.get<Sequence[]>(this.baseUrl + "Sequence/Get")
  }

  GetMySequences(): Observable<Sequence[]> {
    ///un neede??
    // let param = new HttpParams();
    // param = param.set("code",this.currentClient.ClientCode.toString());
    // let options = { params: param };
    //return this.http.post<Sequence[]>(this.baseUrl + "MySequences/Post", {code:this.currentClient.ClientCode});
    return this.http.get<Sequence[]>(this.baseUrl + "Sequence/Get?code=" + this.currentClient.ClientCode);

  }
  SetMySequences(): Observable<Sequence[]> {
    ///un neede??

    // let param = new HttpParams();
    // param = param.set("code",this.currentClient.code.toString());
    // let options = { params: param };
    // return this.http.post<Sequence[]>(this.baseUrl + "MySequences/Post", {code:this.currentClient.ClientCode});
    return this.http.post<Sequence[]>(this.baseUrl + "Sequence/Post", { code: this.currentClient.ClientCode });

  }


  /////////////////////un needed!
  // iget(): Observable<client> {
  //   return this.http.get<client>(this.baseUrl + "Client");
  // }


  // byPost(url, data) {

  //   this.http.post(this.baseUrl + url, data)
  //     .subscribe(res => console.log(res));
  // }

  // byGet(url: string, successFun, errFun): Observable<any> {
  //   this.http.get<any>(this.baseUrl + url)
  //   .subscribe(
  //   data => successFun(data),
  //   error => errFun(error)
  //   )
  // }

  // byGet1(): Observable<string> {
  //   return this.http.get<string>(this.baseUrl + "User");
  // }

}
