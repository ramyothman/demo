import { EventEmitter } from '@angular/core';

export interface ModalDialogConfirmation {
  message: string;
  key?: string;
  icon?: string;
  header?: string;
  accept?: Function;
  acceptWithSave?: Function;
  reject?: Function;
  acceptVisible?: boolean;
  rejectVisible?: boolean;
  acceptEvent?: EventEmitter<any>;
  acceptWithSaveEvent?: EventEmitter<any>;
  rejectEvent?: EventEmitter<any>;
}
