import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {

   menusSecond: any[];
  constructor() { }

  ngOnInit() {
    this.menusSecond = [
      {path: '', name: 'echarts', icon: '', menuThird: [
        {
        path: './e', name: 'sample', icon: ''
        },
        {
        path: './markdown', name: 'markdown', icon: ''
        },
      ]}
    ]
  }
}
