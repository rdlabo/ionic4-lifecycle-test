import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ngOnInit() {
    alert('from Tab3Page ngOnInit');
  }

  ionViewWillEnter() {
    alert('from Tab3Page ionViewWillEnter');
  }

  ionViewDidEnter() {
    alert('from Tab3Page ionViewDidEnter');
  }

  ionViewWillLeave() {
    alert('from Tab3Page ionViewWillLeave');
  }

  ionViewDidLeave() {
    alert('from Tab3Page ionViewDidLeave');
  }
}
