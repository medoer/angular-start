import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  mybreadcrumbs: any[];
  constructor() { }

  ngOnInit() {
    this.mybreadcrumbs = [
      {path: '', name: 'home', icon: 'anticon-home'},
      {path: '/plugins', name: 'plugins', icon: 'anticon-folder'},
    ]
  }

}
