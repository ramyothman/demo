import { Location } from '@angular/common';
import { OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { validate, ValidationError } from "class-validator";
// 3rd party
import * as changeCase from 'change-case';
import * as moment from 'moment';
import { PreviousPageService } from './../services/previous-page.service';
// core services
import { BusyIndicatorService, ModalDialogService, AlertService } from '../';

// admin services
import { BaseApiService } from '../services/api/base-api.service';
import { ModelService } from '../services/model.service';
import { CanComponentDeactivate, CanDeactivateGuard} from '../can-deactivate-guard.service';
//shared classes
import { AppSettings } from '../../settings/app/app.settings';
import { Observable } from 'rxjs';
export abstract class BaseEditComponent<T> implements OnInit, CanComponentDeactivate {
  
  public id: number = null;
  public componentName: string;
  public item: T = null;

  public isLoading: boolean;
  public isSaving: boolean;
  public isSimpleLoad: boolean = true;
  public isSaveAttempted: boolean = false;
  public isSelfContained: boolean = true;
  public closeOnSave: boolean = false;
  public momentFunction: any;
  
  
  public isNewItem: boolean;
  public guidKey: string;
  public errorMessage: string;
  public errorMessageList: string[];

  public isNewEnabled: boolean = true;
  public isEditEnabled: boolean = true;
  public isDeleteEnabled: boolean = true;

  @Output() public FormSaved = new EventEmitter<T>();
  @Output() public FormClosed = new EventEmitter();
  @Output() public FormDataLoaded = new EventEmitter();
  @Output() public ItemDataLoaded = new EventEmitter();
  constructor(protected titleService: Title,
    protected baseApi: BaseApiService<T>,
    protected modalDialogService: ModalDialogService,
    protected busyIndicatorService: BusyIndicatorService,
    protected notifierService: AlertService,
    protected formBuilder: FormBuilder,
    protected location: Location,
    protected modelService: ModelService<T>,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected page: PreviousPageService 
  ) {
    console.log(`${this.componentName} component base constructor`);
    this.momentFunction = moment;
  }

  protected abstract buildForm();
  protected abstract populateComponentDataAsync();
  protected abstract customValidate();

  public ngOnInit() {
    this.setItemId();
    this.populateComponentDataAsync();

    if (this.id === null || this.id === undefined) {
      this.isNewItem = false;
      this.populateDataForNewItem();
    } else {
      this.isNewItem = true;
      this.getItem();
    }
  }

  

  public onCancel() {
    this.item = this.modelService.restoreItem();
    this.goBack();
  }

  public goBack() {
    this.FormClosed.emit();
    this.page.leavePage();
  }

  public onReset() {
    this.item = this.modelService.restoreItem();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away -need to do this :)

    return this.modelService.isChanged();

  }

  public onSaveandClose() {
    this.closeOnSave = true;
    this.onSave();
  }

  public onSave() {

    /**
    * Permission Check
    **/
    if (this.isNewItem && !this.isNewEnabled) {
      this.errorMessage = "You are not allowed to add new item";
      this.handleServiceError("Save", this.errorMessage);
      return;
    }

    if (!this.isNewItem && !this.isEditEnabled) {
      this.errorMessage = "You are not allowed to edit item";
      this.handleServiceError("Save", this.errorMessage);
      return;
    }

    /**
    * Start Saving Attempt
    **/
    var that = this;
    this.isSaveAttempted = true;

    //  perform custom validations
    this.customValidate();
    var isValidated = this.validateEntity();
    
    // if form valid, add.
    if (isValidated) {
      // show busy indicator
      this.busyIndicatorService.show();
      this.isSaving = true;
      this.baseApi.save(this.item)
        .subscribe((item) => {
          this.isSaving = false;
          if (this.isNewItem) {
            var url = this
              .router
              .createUrlTree([{ param: (<any>item).PrimaryID }], { relativeTo: this.activatedRoute })
              .toString();
            this.location.go(url);
          }
          this.isNewItem = false;
          (<any>this.item).PrimaryID = (<any>item).PrimaryID;
          this.busyIndicatorService.hide();
          this.modelService.set(this.item);
          this.notifierService.alert("Data Saved Successfully", "success");
          this.FormSaved.emit(this.item);
          if(this.closeOnSave)
            this.goBack();
        }, (error) => {
          this.isSaving = false;
          this.busyIndicatorService.hide();
          this.errorMessage = AppSettings.ParseError(error);
          this.handleServiceError("Save", this.errorMessage);
        });
    }
  }


  /**
   * Helper Methods Region
   */


  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate()) {
      $event.returnValue = "You have pending changes, are you sure you want to close";
    }
  }
  public getItem() {
    this.busyIndicatorService.show();
    this.isLoading = true;

    this.baseApi.getById(this.id)
      .subscribe((item) => {
        this.busyIndicatorService.hide();
        this.isLoading = false;
        //this.convertDateStringToDate(item);
        this.modelService.set(item);
        this.item = this.modelService.get();
        this.ItemDataLoaded.emit(this.item);
        this.buildForm();
      }, (error) => {
        this.busyIndicatorService.hide();
        this.isLoading = false;
        this.errorMessage = AppSettings.ParseError(error);
      });
  }

  public populateDataForNewItem() {
    this.item = <T>{};
    this.item[this.baseApi.keyName] = this.baseApi.getNewId();
    if (this.guidKey !== undefined && this.guidKey !== null)
      this.item[this.guidKey] = this.generateGuid();
    this.buildForm();
    this.modelService.set(this.item);
  }

  private validateEntity() {
    var result = true;
    var that = this;
    validate(this.item).then(errors => { // errors is an array of validation errors

      if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
        that.errorMessageList = AppSettings.getValidationErrorList(errors);
        this.handleServiceError("Validation", this.errorMessage, this.errorMessageList);
        result = false;
      } else {
        console.log("validation succeed");
        result = true;
      }
    });
    return result;
  }

  public setItemId() {
    this.id = this.activatedRoute.snapshot.params['id'] === 'new' ? null : + this.activatedRoute.snapshot.params['id'];
  }

  private handleServiceError(op: string, err: any, errorMessageList: string[] = []) {
    console.error(`${op} error: ${err}`);
    this.notifierService.alertError(err, errorMessageList);
  }

  private generateGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  

}
