import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ModalDialogConfirmation } from './modal-dialog-confirmation';
@Injectable()
export class ModalDialogService {
  private requireConfirmationSource = new Subject<ModalDialogConfirmation>();
  private acceptConfirmationSource = new Subject<ModalDialogConfirmation>();
  private acceptWithSaveConfirmationSource = new Subject<ModalDialogConfirmation>();

  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();

  confirm(confirmation: ModalDialogConfirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }

  onAccept() {
    this.acceptConfirmationSource.next();
  }

  onAcceptWithSave() {
    this.acceptWithSaveConfirmationSource.next();
  }
  activate: (message?: string, title?: string) => Promise<boolean>;
}
