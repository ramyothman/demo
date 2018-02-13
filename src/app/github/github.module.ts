import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { throwIfAlreadyLoaded } from './../core/module-import-guard';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, IssuesComponent
    
  ],
  declarations: [IssuesComponent],
  providers: [
    
  ]
})
export class GitHubModule {
  constructor( @Optional() @SkipSelf() parentModule: GitHubModule) {
    throwIfAlreadyLoaded(parentModule, 'GitHubModule');
  }
}
