import { Component, OnInit } from '@angular/core';
import { Menu } from "../../../menu";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Menu = new Menu();

  menus: Object[] = [
    { path: '/index', name: 'home' },
    { path: '/plugins', name: 'plugins' },
  ];
  constructor() { }

  ngOnInit() {
  }
}
