import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AbgImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abg-image',
  templateUrl: 'abg-image.html',
})
export class AbgImagePage {
  image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.image = this.navParams.data
  }

  ionViewDidLoad() {
    console.log("image=",this.navParams);


    console.log('ionViewDidLoad AbgImagePage');
  }

}
