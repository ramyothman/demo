import { Component, OnDestroy, OnInit, Input, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from './../../services/github/issues.service';
import { Issue } from './../../models/github/issue';
declare var $: any;

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];
  constructor(private issuesService: IssuesService) {

  }
  ngOnInit(): void {
    var that = this;
    this.issuesService.getIssues().subscribe(result => {
      that.issues = result;
      console.log(result);
    });
  }
}
