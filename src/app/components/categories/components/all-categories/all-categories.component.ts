import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition } from '@angular/animations';

import { FiltersStateService } from '../../../../services/filter-state/filter-state.service';
import { CategoryStateService } from '../../../../services/category-state/category-state.service';
import { StaticDataService } from '../../../../services/static-data/static-data.service';
import { Article } from '../../../../shared/classes/article.class';
import { ANIMATION_LEFT, ANIMATION_RIGHT } from '../../../../shared/constants/animations';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationSlider', [
      transition(':increment', ANIMATION_RIGHT),
      transition(':decrement', ANIMATION_LEFT),
    ]),
  ]
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  public categoryList: string[];
  public counters: number[] = [];

  private _subscriptions: Subscription[] = [];

  constructor(
    public stateService: CategoryStateService,
    private _staticData: StaticDataService,
    private _changeDetection: ChangeDetectorRef,
    private _filterState: FiltersStateService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.categoryList = this._staticData.categories;
    this.categoryList.forEach((category, ind) => this.counters[ind] = 0)
    this._subscriptions.push(this._filterState.countryObs.subscribe(() => {
      this.stateService.getTop5ByCategory();
      this._changeDetection.markForCheck();
    }));
    this._subscriptions.push(this._filterState.searchTermChange.subscribe(() => {
      this.stateService.getTop5ByCategory();
      this._changeDetection.markForCheck();
    }));
  }

  ngOnInit(): void {
    this.stateService.selectedCategory = null;
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public changeCategory(category) {
    this.stateService.selectedCategory = category;
  }

  public selectArticle(article: Article) {
    this.stateService.selectedArticle = article;
    this._router.navigate(['article'], { relativeTo: this._route.parent });
  }

  public decrementCounter(idx: number) {
    this.counters[idx]--;
  }

  public incrementCounter(idx: number) {
    this.counters[idx]++;
  }
}
