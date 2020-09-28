import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FiltersStateService } from 'src/app/services/filter-state/filter-state.service';
import { Article } from 'src/app/shared/classes/article.class';
import { StateBase } from 'src/app/shared/classes/state-base.class';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent implements OnInit, OnDestroy {
  public articles: Article[];

  private _subscriptions: Subscription[] = [];

  constructor(
    public stateService: StateBase,
    public filterState: FiltersStateService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _changeDetection: ChangeDetectorRef,
  ) {
    this._subscriptions.push(this.stateService.articles.subscribe(articles => {
      this.articles = articles;
      this._changeDetection.markForCheck();
    }));
    this._subscriptions.push(this.filterState.countryObs.subscribe(() => {
      this.stateService.getData();
      this._changeDetection.markForCheck();
    }));
    this._subscriptions.push(this.filterState.searchTermChange.subscribe(() => {
      this.stateService.getData();
      this._changeDetection.markForCheck();
    }));
    // Set selected category if param exists
    // TODO: Check static list for category name
    this._subscriptions.push(this._route.params.subscribe(param => {
      if (!!param.id && !this.stateService.selectedCategory) {
        this.stateService.selectedCategory = param.id;
        this._changeDetection.markForCheck();
      }
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public selectArticle(article: Article) {
    this.stateService.selectedArticle = article;
    this._router.navigate(['article'], { relativeTo: this._route.parent });
  }
}
