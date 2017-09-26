import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class MessageService {

  constructor(private _router: Router, private _message: NzMessageService) { }
  
    ngOnInit() {
    }
  
    createMessage = (type, text) => {
      this._message.create(type, `${text}`);
    };

}
