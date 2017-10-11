import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {

  menusSecond: any[];
  echartsMenus: any[] = [
    {
      path: './e', name: 'sample', icon: ''
      },
    {
      path: './e3', name: 'sample3', icon: ''
      },
  ];
  constructor() { }

  ngOnInit() {
    this.menusSecond = [
      {path: '', name: 'echarts', icon: '', menuThird: this.echartsMenus},
      {path: '', name: 'markdown', icon: '', menuThird: [
        {
        path: './markdown', name: 'sample', icon: ''
        },
       
      ]}
    ]
  }
}
