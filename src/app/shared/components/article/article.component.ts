import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FiltersStateService } from 'src/app/services/filter-state/filter-state.service';

import { Article } from '../../classes/article.class';
import { StateBase } from '../../classes/state-base.class';
import { Status } from '../../enums/status.enum';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article: Article;

  private _articleSubscription: Subscription;

  constructor(
    public stateService: StateBase,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _changeDetection: ChangeDetectorRef,
    private _filterState: FiltersStateService,
  ) {
    this._filterState.countryStatus = Status.Disabled;
    this._articleSubscription = this.stateService.selectedArticleObs.subscribe(article => {
      if (!article) {
        // Redirect to parent route when article from service missing
        this._router.navigate([`../${!this.stateService.selectedCategory ? '' : this.stateService.selectedCategory}`],
          { relativeTo: this._activatedRoute});
      }
      this.article = article;
      this._changeDetection.markForCheck();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.stateService.selectedArticle = null;
    this._articleSubscription.unsubscribe();
    this._filterState.countryStatus = Status.Enabled;
  }

  public goBack() {
    this.stateService.selectedArticle = null;
  }
}
