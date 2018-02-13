import { Component } from '@angular/core';
import { TestSService, ProjectProcessWorkflowType } from './services/test-s.service';
import { plainToClass, plainToClassFromExist } from "class-transformer";
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  

  constructor(private testService: TestSService) {
    //testService.get().subscribe(result => {
    //  // now "users" is type of User[] and each user has getName() and isAdult() methods available
    //  //var r = plainToClass(ProjectProcessWorkflowType, result as Object[])
    //  console.log(result);
    //});
  }

}
