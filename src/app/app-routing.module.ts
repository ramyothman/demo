import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './github/issues/issues.component';
const routes: Routes = [
  { path: '', component: IssuesComponent },
  { path: 'issues', component: IssuesComponent },
  
  { path: '**', redirectTo: 'issues' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
