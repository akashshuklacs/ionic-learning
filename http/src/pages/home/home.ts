import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:Observable<any>;
  result:any = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  getData(){
    var url='https://jsonplaceholder.typicode.com/posts/1';
    this.data=this.http.get(url);
    this.data.subscribe(data=>{
      this.result=data;
    });
  }

}
