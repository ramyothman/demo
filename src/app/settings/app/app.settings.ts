import * as numeral from 'numeral';
import * as _ from 'lodash';
declare var $: any;
import { validate, ValidationError } from "class-validator";
import { environment } from '../../../environments/environment';
export class AppSettings {
  /*********   ********/
  static get API_Url(): string{
    if (environment.production)
      return AppSettings.API_Url_Remote;
    else
      return AppSettings.API_Url_Local;
  }

  static API_Url_Local = 'https://api.github.com/repos/angular/angular.js/';
  static API_Url_Remote = 'https://api.github.com/repos/angular/angular.js/';

  static APIUrl = 'http://localhost:37697/';
  //local http://localhost:37697/
  //remote http://api-alpha.pams.net/
  static ImgPath = AppSettings.APIUrl + "Content/Files/"
  static API_ProjectProcessWorkflowTypeController = AppSettings.APIUrl + 'common/marketsegment/';
  static API_CategoryController = AppSettings.APIUrl + 'Common/Category/';
  static API_AuthController = AppSettings.APIUrl + 'token';
  static API_UnitController = AppSettings.APIUrl + 'common/unit/';
  static API_CountryController = AppSettings.APIUrl + 'common/Country/';

  static API_CompanyCurrencyController = AppSettings.APIUrl + 'Organization/CompanyCurrency/';

  static API_OfferController = AppSettings.APIUrl + 'sales/offer/';
  static API_OfferItemController = AppSettings.APIUrl + 'sales/offeritem/';
  static API_ItemController = AppSettings.APIUrl + 'sales/item/';
  static API_TimePeriodController = AppSettings.APIUrl + "Sales/TimePeriod/";
  static API_OfferMileStoneController = AppSettings.APIUrl + "sales/offermilestone/";
  static API_OfferItemVersionController = AppSettings.APIUrl + "sales/offerversion/";
  static API_InquiryController = AppSettings.APIUrl + 'sales/inquiry/';
  static API_GuaranteeTypeController = AppSettings.APIUrl + 'Common/guaranteetypes/';
  static API_JobGuaranteeController = AppSettings.APIUrl + 'Sales/JobGuarantees/';
  static API_CurrencyController = AppSettings.APIUrl + 'Common/Currency/';
  static API_ContactInfoTypesController = AppSettings.APIUrl + 'Common/ContactInfoType/';
  static API_ContactInfoRelatedTypeController = AppSettings.APIUrl + 'Common/ContactInfoRelatedType/';

  static API_JobProcessController = AppSettings.APIUrl + 'sales/jobprocess/';
  static API_JobItemController = AppSettings.APIUrl + 'sales/jobitem/';
  static API_JobVersionController = AppSettings.APIUrl + 'sales/jobversion/';

  static API_CityController = AppSettings.APIUrl + 'common/city/';
  static API_GovernateController = AppSettings.APIUrl + 'common/Governate/';
  static API_SerialStatusController = AppSettings.APIUrl + 'common/serialstatus/';
  static API_SerialCombinationsController = AppSettings.APIUrl + 'common/serialcombinations/';
  static API_SerialComponentsController = AppSettings.APIUrl + 'common/serialcomponents/';
  static API_SerialTypeController = AppSettings.APIUrl + 'common/serialtype/';
  static API_PaymentMethodController = AppSettings.APIUrl + 'Common/PaymentMethod/';
  static API_DeliveryTermController = AppSettings.APIUrl + 'Sales/DeliveryTerm/';

  static API_ClientsController = AppSettings.APIUrl + 'Person/Client/';
  static API_PersonController = AppSettings.APIUrl + 'Person/Person/';
  static API_ClientTypesController = AppSettings.APIUrl + 'Common/ClientType/';
  static API_SupplierTypesController = AppSettings.APIUrl + 'Common/SupplierType/';
  static API_MarketSegmentController = AppSettings.APIUrl + 'Common/MarketSegment/';
  static API_PersonEmailController = AppSettings.APIUrl + 'Person/PersonEmail/';
  static API_PersonPhoneController = AppSettings.APIUrl + 'Person/PersonPhone/';
  static API_SupplierController = AppSettings.APIUrl + 'person/supplier/'

  static API_CompanyBranchContactInfoController = AppSettings.APIUrl + "common/CompanyBranchContactInfo/";
  static API_ContactInfoController = AppSettings.APIUrl + "common/ContactInfo/";
  static API_CompanyBranchController = AppSettings.APIUrl + "Organization/CompanyBranch/";
  static API_CompanyController = AppSettings.APIUrl + "Organization/Company/";
  static API_AddressController = AppSettings.APIUrl + "Common/Address/";
  static API_AddressTypeController = AppSettings.APIUrl + "Common/AddressType/";
  static API_CompanyBranchSettingController = AppSettings.APIUrl + "Organization/CompanyBranchSetting/";
  static API_ProcessReasonontroller = AppSettings.APIUrl + 'common/processreason/';
  static API_InquiryTypesController = AppSettings.APIUrl + 'Sales/InquiryTypes/';
  static API_OfferStatusController = AppSettings.APIUrl + 'Sales/OfferStatus/';
  static API_OrderChanceController = AppSettings.APIUrl + 'Sales/OrderChance/';
  static API_OrderStatusController = AppSettings.APIUrl + 'Sales/OrderStatus/';
  static API_DeliveryTermsController = AppSettings.APIUrl + 'Sales/DeliveryTerm/';
  static API_GuaranteeTypesController = AppSettings.APIUrl + 'Common/GuaranteeTypes/';
  static API_PaymentMethodsController = AppSettings.APIUrl + 'Common/PaymentMethod/';
  static API_JobListLayoutController = AppSettings.APIUrl + 'Common/JobListLayout/';
  static API_DefaultJobListLayoutController = AppSettings.APIUrl + 'Common/DefaultJobListLayout/';
  static API_ProductTypeController = AppSettings.APIUrl + 'Common/ProductType/';
  static API_BookingTargetController = AppSettings.APIUrl + 'Common/BookingTarget/';
  static API_NationalityController = AppSettings.APIUrl + 'Common/nationality/';
  static API_EmployeeTypeController = AppSettings.APIUrl + 'Common/EmployeeTypes/';
  static API_MaritalStatusController = AppSettings.APIUrl + 'Common/maritalstatus/';
  static API_CompanyBranchDepartmentController = AppSettings.APIUrl + 'Organization/CompanyBranchDepartment/';

  static API_ProjectCommentController = AppSettings.APIUrl + 'Sales/ProjectComment/';

  static API_ProjectContactController = AppSettings.APIUrl + 'Sales/ProjectContact/';

  static API_ProjectRegisteredController = AppSettings.APIUrl + 'Sales/ProjectRegistered/';

  static API_ShareholdersController = AppSettings.APIUrl + 'Sales/Shareholders/';

  static API_ContactPersonController = AppSettings.APIUrl + 'Common/ContactPerson/';

  static API_ContactPersonRelatedTypeController = AppSettings.APIUrl + 'Common/ContactPersonRelatedType/';

  static API_RegistrationStatusController = AppSettings.APIUrl + 'Common/RegistrationStatus/';
  static API_DataSourceController = AppSettings.APIUrl + "Dashboard/DataSource/";

  static API_EmployeeTypesController = AppSettings.APIUrl + 'Common/EmployeeTypes/';

  static API_DashboardController = AppSettings.APIUrl + 'DashBoard/Dashboard/';

  static API_ReactivationReasonsController = AppSettings.APIUrl + 'Common/ReactivationReasons/';

  static API_DefaultSerialStatusController = AppSettings.APIUrl + 'Common/DefaultSerialStatus/';

  static API_ProjectsSuppliersRegisterationController = AppSettings.APIUrl + 'Common/ProjectsSuppliersRegisteration/';

  static API_ConnectionTypeController = AppSettings.APIUrl + 'Common/ConnectionType/';

  static API_MailToController = AppSettings.APIUrl + 'Common/MailTo/';

  static API_NotificationController = AppSettings.APIUrl + 'Common/Notification/';

  static API_NotificationTypeController = AppSettings.APIUrl + 'Common/NotificationType/';

  static API_ReminderController = AppSettings.APIUrl + 'Common/Reminder/';

  static API_SentEmailsController = AppSettings.APIUrl + 'Common/SentEmails/';

  static API_TimeUnitTypeController = AppSettings.APIUrl + 'Common/TimeUnitType/';

  static API_UserEmailSettingController = AppSettings.APIUrl + 'Common/UserEmailSetting/';

  static API_AssigneeController = AppSettings.APIUrl + 'Tasks/Assignee/';

  static API_AssigneeAccessTypeController = AppSettings.APIUrl + 'Tasks/AssigneeAccessType/';

  static API_PrioritiesController = AppSettings.APIUrl + 'Tasks/Priorities/';

  static API_StatusController = AppSettings.APIUrl + 'Tasks/Status/';

  static API_TaskController = AppSettings.APIUrl + 'Tasks/Task/';

  static API_CommentsController = AppSettings.APIUrl + 'Common/Comments/';

  static API_FilesController = AppSettings.APIUrl + 'Common/Files/';

  static API_RelatedToTypesController = AppSettings.APIUrl + 'Common/RelatedToTypes/';

  static API_TagsController = AppSettings.APIUrl + 'Common/Tags/';

  static API_ClientDelayController = AppSettings.APIUrl + 'Sales/ClientDelay/';

  static API_DashboardWidgetController = AppSettings.APIUrl + 'DashBoard/DashboardWidget/';

  static API_AccountsController = AppSettings.APIUrl + 'person/accounts/';
  /*Add Api Urls for new Tables Here*/











  static API_CategoriesController = AppSettings.APIUrl + 'Common/Category/';
  static API_PersonUserController = AppSettings.APIUrl + 'security/personuser/';
  static API_RoleController = AppSettings.APIUrl + 'security/role/';
  static API_PersonTypeController = AppSettings.APIUrl + 'person/persontype/';
  static API_PermissionController = AppSettings.APIUrl + 'Security/Permission/';
  static API_RolePermissionController = AppSettings.APIUrl + 'Security/RolePermissions/';
  static API_JobVersionStatusLogController = AppSettings.APIUrl + 'Sales/JobVersionStatusLog/';
  static API_JobItemsStatusController = AppSettings.APIUrl + 'sales/jobitemstatus/';
  static API_JobItemsStatusDataController = AppSettings.APIUrl + 'sales/jobitemstatusData/';
  static API_ProjectController = AppSettings.APIUrl + 'sales/Project/';
  static API_ProjectStatusController = AppSettings.APIUrl + 'sales/projectstatus/';
  static API_JobDocumentController = AppSettings.APIUrl + 'sales/jobdocument/';
  

  static UserId = 25;
  static EmployeeID = 25;
  static CompanyId = 1;
  static CompanyBranchId = 1;
  static PageSize = 5;
  static DatagridHeight = 600;
  static SupplierID = 3;
  //static currencyId = 0;
  static CurrencySymbol = '€';
  static CurrencyCode = 'EUR';
  static CurrentCompanyID: number = 1;
  static CurrentCompanyBranchID: number = 1;

  static latitude: number = 52.5200;
  static longitude: number = 13.4050;

  static CurrentJobCurrencyCode = '';

  static allGlobalCurrencies = {

    'EUR': '€',
    'USD': '$',
    'EGP': '£'
  };
  static CurrentBaseCurrency: string = AppSettings.allGlobalCurrencies.EUR;
  static numbersFormat = {

    'Val': '0,0.00',
    'Per': '0.00%',
    'Cur': '0,0.00 $'
  };

  static currOfferCrcy: string = '';

  static TimeUnits: { id: number, name: string }[] = [
    { "id": 1, "name": "Day(s)" },
    { "id": 2, "name": "Week(s)" },
    { "id": 3, "name": "Month(s)" }
  ];
  private DateUinitsRepresentaion = [{ "code": "Year", "units": 365 }, { "code": "Month", "units": 30 }, { "code": "Week", "units": 7 }, { "code": "Day", "units": 1 }]

  static CalculateSize() {
    var height = $(document).height();
    return height - 200;
  }

  static getOriginUrl() {
    return window.location.origin;
  }


  static getValidationErrorList(errors: ValidationError[]) {
    var messageList: string[] = [];
    for (var i = 0; i < errors.length; i++) {
      messageList = this.getValidationError(errors[i], messageList);
    }
    return messageList;
  }

  static getValidationError(error: ValidationError, messageList: string[]): string[] {
    for (let key in error.constraints) {
      messageList.push(error.constraints[i]);
    }

    for (var i = 0; i < error.children.length; i++) {
      messageList = this.getValidationError(error.children[i], messageList);
    }
    return messageList;
  }
  static ParseError(error: any): string {
    let Error: any = "Error: Please Refresh the Page and Try Again.";
    if (error) {
      if (error._body) {
        Error = JSON.parse(<any>error._body);
        if (Error.error_description) {
          Error = (Error.error_description);

        }
        else if (Error.Message) {
          Error = JSON.parse(Error.Message);
          if (Error.ErrorsCodes && Error.ErrorsCodes.length > 0)
            Error = Error.ErrorsCodes[0];
        }
      }
    }
    return Error;
  }

  static TimeDifferenceString(days: number, Sperator: string = " ", title: string = "") {
    let t = "";
    let sep: boolean = false;
    if (days / 365 >= 1) {
      let x = days / 365;
      x = _.floor(x);
      t += x + " Year";
      if (x > 1)
        t += "s"
      days -= (x * 365)
      sep = true;
    }
    if (days / 30 >= 1) {
      let x = days / 30;
      x = _.floor(x);
      if (days - (x * 30) >= 0)
        t += ", ";
      else if (t.length > 0)
        t += " and "
      t += x + " Month";
      if (x > 1)
        t += "s"
      days -= (x * 30)
      sep = true;
    }
    if (days / 7 >= 1) {

      let x = days / 7;
      x = _.floor(x);
      if (days - (x * 7) > 0)
        t += ", ";
      else if (t.length > 0)
        t += " and "

      t += x + " Week";
      if (x > 1)
        t += "s"
      days -= (x * 7)
      sep = true;
    }
    if (days > 0) {
      if (sep && t.length > 0)
        t += " and ";
      sep = true;
      t += _.floor(days) + " day";
      if (days > 1)
        t += "s"
    }
    return title + t;
  }

  static checkEquality(source: any, target: any, pro: string, CalculatedFields: any[]): boolean {

    let check = false;
    if (source && target && typeof (source[pro]) == "object") {
      for (let sub in source[pro]) {
        check = check || this.checkEquality(source[pro], target[pro], sub, CalculatedFields);
      }
    }
    else if (source && target && source[pro] && source[pro] != target[pro] && CalculatedFields.findIndex(p => p == pro) == -1) {

      return true;
    }
    return check;

  }
  static DataChanged(source: any, target: any, CalculatedFields?: any[]): boolean {
    if (CalculatedFields == null || CalculatedFields == undefined)
      CalculatedFields = new Array<any>();
    let isChanged: boolean = false;
    for (let pro in source) {
      isChanged = this.checkEquality(source, target, pro, CalculatedFields);
      if (isChanged)
        break;
    }
    return isChanged;
  }

  static ConvertDateToString(dateX: Date): string {
    var data = new Date(dateX);
    let month: string;
    if (data.getMonth() + 1 < 10)
      month = '0' + (data.getMonth() + 1);
    else
      month = (data.getMonth() + 1).toString();

    let day: string;
    if (data.getDate() + 1 < 10)
      day = '0' + (data.getDate());
    else
      day = (data.getDate()).toString();

    return month + '/' + day + '/' + data.getFullYear();
  }

  static ConvertDateToStringEU(dateX: Date): string {
    var data = new Date(dateX);
    let month: string;
    if (data.getMonth() + 1 < 10)
      month = '0' + (data.getMonth() + 1);
    else
      month = (data.getMonth() + 1).toString();

    let day: string;
    if (data.getDate() + 1 < 10)
      day = '0' + (data.getDate());
    else
      day = (data.getDate()).toString();

    return day + '/' + month + '/' + data.getFullYear();
  }

  static ConvertStringToDate(data: string): Date {
    return new Date(+data.substr(6, 4), +data.substr(0, 2) - 1, +data.substr(3, 2));
  }

  static ConvertStringToDateEU(data: string): Date {
    return new Date(+data.substr(6, 4), +data.substr(3, 2), +data.substr(0, 2) - 1);
  }


  static CurrentCurrencyCode = "EUR";
  static NumeralConversionDefault(data, format): string {
    var currency = this.allGlobalCurrencies[this.CurrentCurrencyCode];
    if (currency != undefined) {
      numeral.locale(currency);
    }


    let num: numeral;
    var str: string = "0.00";
    num = numeral(data);
    if (num.value() != 0)
      str = num.format(format);

    return str;
  }

  static NumeralConversion(data, format, currency): string {

    if (currency != undefined && currency != '') {
      numeral.locale(currency);
    }


    let num: numeral;
    var str: string = "0";
    num = numeral(data);
    if (num.value() != 0)
      str = num.format(format);

    return str;
  }

  static NumeralUnConversion(data): number {
    let num: numeral;
    var str: number;
    num = numeral(data);
    str = num.value();
    return str;
  }


  
  private UlitizeTimeLogic(i: number, cursor: number, picked: boolean = false): string {
    let resualt = "";
    if (!i)
      return "";
    let unitsIndays = (+this.DateUinitsRepresentaion[cursor].units);
    let numberOfunits = i / unitsIndays;
    numberOfunits = _.floor(numberOfunits);
    i -= (numberOfunits * unitsIndays);
    let dateForamted = "";
    if (numberOfunits) {
      dateForamted = numberOfunits + " " + this.DateUinitsRepresentaion[cursor].code;
      if (numberOfunits > 1)
        dateForamted += "s";
      if (picked) {
        if (i)
          resualt += ", ";
        else
          resualt += " and ";
      }
    }



    return resualt + dateForamted + this.UlitizeTimeLogic(i, cursor + 1, picked || numberOfunits > 0);
  }
  static UlitizeTime(i: number, Sperator: string = " ", title: string = "") {
    //debugger;
    var x = new AppSettings();
    return title + x.UlitizeTimeLogic(i, 0);
  }
}


export enum GuaranteeTypes {
  BidBond = 1,
  Performance = 2,
  Warranty = 3

}
export enum DataTypes {
  Client = 1,
  Supplier = 2,
  Project = 3,
  Empolyee = 4,
  ProductType = 5,
  OrderChance = 6,
  InquiryType = 7,
  DeliveryTerm = 8,
  PaymentMethod = 9,
  OrderStatus = 10,
  OfferStatus = 11,
  Category = 12

};

export enum ProcessReasonsTypes {
  Discarding = 1,
  Reactivation = 2
}

export enum ContactInfoTypeEnum {
  Phone = 1,
  Fax = 2,
  Mobile = 3,
  Email = 4,
  Website = 5,
  OnlineSupport = 6
}
