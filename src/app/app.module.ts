import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { GitHubModule } from './github/github.module';
import { AppComponent } from './app.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TestSService } from './services/test-s.service';
import { Routes, RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { MomentModule } from 'angular2-moment';
import { ORIGIN_URL } from './services/baseurl.constants';
import { REQUEST } from './services/request';
import { SharedServicesModule } from './services/shared-service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
export function createTranslateLoader(http: HttpClient, baseHref) {

  // Temporary Azure hack
  if (baseHref === null && typeof window !== 'undefined') {
    baseHref = window.location.origin;
  }
  // i18n files are in `wwwroot/assets/`
  return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    AvatarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, ORIGIN_URL]
      }
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, ORIGIN_URL]
      }
    }),
    SharedServicesModule,
    GitHubModule
  ],
  providers: [TestSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
