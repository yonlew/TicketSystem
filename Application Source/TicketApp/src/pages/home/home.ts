import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // calendar: CalendarPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.calendar = new CalendarPage();
  }

  anOtherPage() {
    this.navCtrl.push(CalendarPage);
  }
}
