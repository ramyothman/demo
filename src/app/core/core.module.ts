import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';


// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModalDialogModule } from './modal-dialog/modal-dialog.module';
import { BusyIndicatorModule } from './busy-indicator/busy-indicator.module';
import { AlertModule } from './alert/alert.module';
import { AppMenuComponent } from './app-menu/app-menu.comoponent';
import { ModelService } from './services/model.service';
import { PreviousPageService } from './services/previous-page.service'
import { LocalStorageService } from './services/local-storage.service';
import { BaseApiService } from './services/api/base-api.service';
import { AppTitleService } from './services/app-title.service';
import { ORIGIN_URL } from './services/baseurl.constants';
import { API_ORIGIN_URL } from './services/api-baseurl.constants';
import { environment } from '../../environments/environment';
import { AppSettings } from '../settings/app/app.settings';
import { DashboardTypeFilterPipe } from './pipes/dashboard-type-filter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchListPipe } from './pipes/search-list.pipe';
export function getOriginUrl() {
  return window.location.origin;
}

export function getApiOriginUrl() {
  if (environment.production)
    return AppSettings.API_Url_Local;
  else
    return AppSettings.API_Url_Remote;
}

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    ModalDialogModule, BusyIndicatorModule, AlertModule, SearchListPipe, DashboardTypeFilterPipe, FilterPipe, AppMenuComponent
  ],
  declarations: [DashboardTypeFilterPipe, FilterPipe, SearchListPipe, AppMenuComponent],
  providers: [
    { provide: ORIGIN_URL, useFactory: (getOriginUrl) },
    { provide: API_ORIGIN_URL, useFactory: (getApiOriginUrl) },
    EntityService,
    ExceptionService,
    ModelService,
    LocalStorageService,
    PreviousPageService,
    AppTitleService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
