import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Recents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recents',
  templateUrl: 'recents.html'
})
export class RecentsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RecentsPage Page');
  }

}
