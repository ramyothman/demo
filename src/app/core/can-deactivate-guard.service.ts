import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => any; // boolean|Promise<boolean>|Observable<boolean>;
}
//https://github.com/primefaces/primeng/blob/master/src/app/components/confirmdialog/confirmdialog.ts
//https://github.com/primefaces/primeng/blob/master/src/app/components/common/confirmation.ts
//https://github.com/primefaces/primeng/blob/master/src/app/components/common/confirmationservice.ts
//https://medium.com/@OlegVaraksin/displaying-primeng-confirmation-dialog-with-guarded-routes-f5d07e646b4a
//https://github.com/ova2/frontend-tooling-tutorial/blob/master/angular-playground/router-primeng-confirmdialog/src/app/first-view/first-view.component.html

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    // run the function for canDeactivate and if its a promise or a boolean we handle it either way

    // return true;

    // if (component.canDeactivate) {
    //   let deactivate = component.canDeactivate();
    //   return this.toObservable(deactivate);
    // } else {
    //   return true;
    // }

    return component.canDeactivate ?
      this.toObservable(component.canDeactivate()) : true;
  }

  private toObservable(deactivate: Promise<boolean> | boolean): Observable<boolean> | boolean {
    const p = Promise.resolve(deactivate);
    const o = Observable.fromPromise(p);
    return o;
  }
}
