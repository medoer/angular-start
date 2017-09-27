import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgZorroAntdModule } from "ng-zorro-antd";
import { MessageService } from "./services/message.service";

// export module
export { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  exports: [
    NgZorroAntdModule
  ]
})
export class SharedModule {
}
