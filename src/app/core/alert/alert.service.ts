import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Alert {
  Message: string;
  MessageList: string[];
  AlertType: string;
  HasCloseButton: boolean;
  TimeOut: number;
  IsSticky: boolean;
  ShowIcon: boolean;
}

@Injectable()
export class AlertService {
  private alertSubject = new Subject<Alert>();

  alertState = this.alertSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: AlertService) {
    if (prior) {
      console.log('alert service already exists');
      return prior;
    } else {
    }
  }

  alertError(message?: string)
  alertError(message?: string, messageList?: string[])
  alertError(message?: string, messageList?: string[], hasCloseButton?: boolean)
  alertError(message?: string, messageList?: string[], hasCloseButton?: boolean, isSticky?: boolean)
  alertError(message?: string, messageList?: string[], hasCloseButton?: boolean, isSticky?: boolean, showIcon?: boolean)
  alertError(message?: string, messageList?: string[], hasCloseButton?: boolean, isSticky?: boolean, showIcon?: boolean, timeOut?: number) {
    if (timeOut == undefined || timeOut == null || timeOut == 0)
      timeOut = 5000;
    if (isSticky == undefined || isSticky == null)
      isSticky = false;
    if (hasCloseButton == undefined || hasCloseButton == null)
      hasCloseButton = true;
    if (messageList == undefined || messageList == null)
      messageList = [];
    if (showIcon == undefined || showIcon == null)
      showIcon = true;

    this.alertSubject.next(<Alert>{ Message: message, MessageList: messageList, AlertType : "error", HasCloseButton: hasCloseButton, TimeOut: timeOut, IsSticky: isSticky, ShowIcon: showIcon });
  }

  alert(message?: string)
  alert(message?: string, alertType?: string)
  alert(message?: string, alertType?: string, hasCloseButton?: boolean)
  alert(message?: string, alertType?: string, hasCloseButton?: boolean, isSticky?: boolean, showIcon?: boolean)
  alert(message?: string, alertType?: string, hasCloseButton?: boolean, isSticky?: boolean, showIcon?: boolean, timeOut?: number) {
    var t = 'success';
    if (alertType == undefined || alertType == null || alertType == '')
      alertType = 'success';
    if (timeOut == undefined || timeOut == null || timeOut == 0)
      timeOut = 5000;
    if (isSticky == undefined || isSticky == null)
      isSticky = false;
    if (hasCloseButton == undefined || hasCloseButton == null)
      hasCloseButton = true;
    if (showIcon == undefined || showIcon == null)
      showIcon = true;

    this.alertSubject.next(<Alert>{ Message: message, AlertType: "error", HasCloseButton: hasCloseButton, TimeOut: timeOut, IsSticky: isSticky, ShowIcon: showIcon });
  }
}
