import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-correlation',
  templateUrl: './angular-correlation.component.html',
  styleUrls: ['./angular-correlation.component.css']
})
export class AngularCorrelationComponent implements OnInit {


  menusSecond: any[];
  constructor() { }

  ngOnInit() {
    this.menusSecond = [
      {
        path: '', name: 'angular correlation', icon: '', menuThird: [
          {
            path: './event-binding', name: 'event binding', icon: ''
          },
          {
            path: './structural-deriectives', name: 'structural edriectives', icon: ''
          },
          {
            path: './angular-router/1', name: 'angular router', icon: ''
          },

        ]
      },
    ]
  }

}
