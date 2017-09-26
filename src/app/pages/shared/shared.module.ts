import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from "ng-zorro-antd";
import { MessageService } from "./services/message.service";

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    NgZorroAntdModule,
    MessageService
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }

