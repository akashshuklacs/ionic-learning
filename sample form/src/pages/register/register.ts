 import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	username:string;
	password:string;
	repass:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
  	/*if(this.username.length==0 || this.password.length==0 || this.repass.length==0)
  		
  	if(this.password!=this.repass)
  		alert("Chutiye dono password same bharna hai. Firse bhar!")*/
  	if(this.password!=this.repass)
  		alert("Dono password same hona chaiye Chutiye?");
  }

}
