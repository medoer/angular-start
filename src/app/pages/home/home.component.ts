import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private _message: NzMessageService) { }

  ngOnInit() {
    this._router.events.subscribe($event => {
      if ($event instanceof NavigationEnd) {
        this.createMessage("success", "路由导航成功");
      }
    });
  }

  createMessage = (type, text) => {
    this._message.create(type, `${text}`);
  };
}
