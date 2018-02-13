import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from './../../settings/app/app.settings';


@Injectable()
export class PreviousPageService {

  constructor(private router: Router) { }
  public static pagesHistory: Array<string> = [AppSettings.getOriginUrl()];
  leavePage() {
    
    if (PreviousPageService.pagesHistory.length > 1 && this.router.url == PreviousPageService.pagesHistory[PreviousPageService.pagesHistory.length - 1])
      PreviousPageService.pagesHistory.pop();
    this.router.navigate([PreviousPageService.pagesHistory[PreviousPageService.pagesHistory.length - 1]]);
  }
  static updateHistory(url: string): void {
    let segmat = url.split("/");
    let lastSegmant = "";
    if (segmat.length)
      lastSegmant = segmat[segmat.length - 1];
    if (PreviousPageService.pagesHistory[PreviousPageService.pagesHistory.length - 1] != url && lastSegmant.toLowerCase() != "new")
      PreviousPageService.pagesHistory.push(url);

  }

  get LastPageUrl(): string {
    if (PreviousPageService.pagesHistory.length > 0) {
      return PreviousPageService.pagesHistory[PreviousPageService.pagesHistory.length - 1];
    }
    return "";
  }

  get LastLastPageUrl(): string {
    if (PreviousPageService.pagesHistory.length > 1) {
      return PreviousPageService.pagesHistory[PreviousPageService.pagesHistory.length - 2];
    }
    return "";
  }
}
