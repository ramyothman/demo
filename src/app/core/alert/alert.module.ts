import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
@NgModule({
  imports: [CommonModule],
  exports: [AlertComponent],
  declarations: [AlertComponent],
  providers: [AlertService]
})
export class AlertModule {
  constructor( @Optional() @SkipSelf() parentModule: AlertModule) {
    throwIfAlreadyLoaded(parentModule, 'AlertModule');
  }
}
