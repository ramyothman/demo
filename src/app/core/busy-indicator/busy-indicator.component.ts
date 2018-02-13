import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BusyIndicatorState, BusyIndicatorService } from './busy-indicator.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss']
})

export class BusyIndicatorComponent implements OnDestroy, OnInit {
  visible = false;

  private busyIndicatorStateChanged: Subscription;

  constructor(private busyIndicatorService: BusyIndicatorService) { }

  ngOnInit() {
    this.busyIndicatorStateChanged = this.busyIndicatorService.busyIndicatorState
      .subscribe((state: BusyIndicatorState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.busyIndicatorStateChanged.unsubscribe();
  }
}
