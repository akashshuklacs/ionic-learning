import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http/';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
  }
  loadData(){
    let data:Observable<any>;
    data=this.http.get('https://jsonplaceholder.typicode.com/posts');
    data.subscribe(result=>{
      this.items=result;
    });
  }
  itemClick(itemid:number){
    alert(itemid);

  }
}
