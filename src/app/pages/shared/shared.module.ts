import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgZorroAntdModule } from "ng-zorro-antd";

// export module
export { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  exports: [
    NgZorroAntdModule
  ],
  imports: [
  ]
})
export class SharedModule {
}
