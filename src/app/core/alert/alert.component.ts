import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService, Alert } from './alert.service';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  
  private alertElement: any;
  private alertSubscription: Subscription;

  private messageList: string[] = [];
  private msgText: any;
  private alertIcon: string;
  private insertType: string;
  private timeing: any;
  private withCloseButton: boolean;
  private clickCount: number = 0;
  openedAlert: boolean = false;
  isLoading: boolean = false;

  constructor(private alertService: AlertService) {
    this.alertSubscription = this.alertService.alertState.subscribe((alertMessage: Alert) => {
      this.alert(alertMessage);
    });
  }


  private initAlertBox(type: string, msg: any, msgList: string[], icon: boolean, timeOut: number = 5000, withCloseButton?: boolean) {
    this.alertIcon = "";
    this.insertType = "info";
    this.messageList = msgList;
    switch (type) {
      case "success":
        this.insertType = "alert-success";
        this.alertIcon = (!icon) ? "" : "icn-correct-oval-check";
        if (msg === "") {
          this.msgText = "The process is successfully done.";
        } else {
          this.msgText = msg;
        }
        break;
      case "error":
        this.insertType = "alert-danger";
        this.alertIcon = (!icon) ? "" : "icn-error";
        if (msg === "") {
          this.msgText = "Sorry, the process can't be done.";
        } else {
          this.msgText = msg;
        }
        break;
      case "warning":
        this.insertType = "alert-warning";
        this.alertIcon = (!icon) ? "" : "";
        if (msg === "") {
          this.msgText = "Sorry, the process can't be done.";
        } else {
          this.msgText = msg;
        }
        break;
      default:
        this.insertType = "alert-info";
        this.alertIcon = (!icon) ? "" : "";
        if (msg === "") {
          this.msgText = "Needs your attention, but it's not super important.";
        } else {
          this.msgText = msg;
        }
    }
    if (withCloseButton || withCloseButton === undefined || withCloseButton === null) {
      this.withCloseButton = true;
    } else {
      this.withCloseButton = false;
    }
    if (timeOut === -1) {
      this.timeing = false;
    } else if (timeOut === 0) {
      this.timeing = setTimeout(() => this.closeAlert(), 5000);
    } else {
      this.timeing = setTimeout(() => this.closeAlert(), timeOut);
    }

    this.show();
  }


  alert(alertMessage: Alert) {
    
    this.isLoading = true;
    
    if (this.openedAlert) {
      this.closeAlert();
      this.initAlertBox(alertMessage.AlertType, alertMessage.Message, alertMessage.MessageList, alertMessage.ShowIcon, alertMessage.TimeOut, alertMessage.HasCloseButton);
    } else {
      this.initAlertBox(alertMessage.AlertType, alertMessage.Message, alertMessage.MessageList, alertMessage.ShowIcon, alertMessage.TimeOut, alertMessage.HasCloseButton);
    }
  }

  ngOnInit() {
    this.alertElement = document.getElementById('alertsHolder');
  }

  private show() {
    this.openedAlert = true;
  }

  private hide() {
    this.openedAlert = false;
  }

  private closeAlertOutside() {
    this.clickCount++;

    if (!this.isLoading) {
      this.clickCount = 0;
      this.closeAlert();
      this.openedAlert = false;
    } else {
      this.isLoading = false;
    }
  }
  private closeAlert() {
    this.openedAlert = false;
    clearTimeout(this.timeing);

  }

}
