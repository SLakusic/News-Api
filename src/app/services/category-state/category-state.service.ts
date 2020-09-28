import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

import { Article } from '../../shared/classes/article.class';
import { StateBase } from '../../shared/classes/state-base.class';
import { ApiService } from '../api-service/api.service';
import { FiltersStateService } from '../filter-state/filter-state.service';
import { StaticDataService } from '../static-data/static-data.service';

export class AllCategorySubject {
  public business: BehaviorSubject<Article[]>;
  public entertainment: BehaviorSubject<Article[]>;
  public general: BehaviorSubject<Article[]>;
  public health: BehaviorSubject<Article[]>;
  public science: BehaviorSubject<Article[]>;
  public sports: BehaviorSubject<Article[]>;
  public technology: BehaviorSubject<Article[]>;

  constructor() {
    this.business = new BehaviorSubject<Article[]>([]);
    this.entertainment = new BehaviorSubject<Article[]>([]);
    this.general = new BehaviorSubject<Article[]>([]);
    this.health = new BehaviorSubject<Article[]>([]);
    this.science = new BehaviorSubject<Article[]>([]);
    this.sports = new BehaviorSubject<Article[]>([]);
    this.technology = new BehaviorSubject<Article[]>([]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoryStateService extends StateBase {
  private _allCategoriesSubject: AllCategorySubject;

  public get businessCategoryObs() {
    return this._allCategoriesSubject.business.asObservable();
  }

  public get entertainmentCategoryObs() {
    return this._allCategoriesSubject.entertainment.asObservable();
  }

  public get generalCategoryObs() {
    return this._allCategoriesSubject.general.asObservable();
  }

  public get healthCategoryObs() {
    return this._allCategoriesSubject.health.asObservable();
  }

  public get scienceCategoryObs() {
    return this._allCategoriesSubject.science.asObservable();
  }

  public get sportsCategoryObs() {
    return this._allCategoriesSubject.sports.asObservable();
  }

  public get technologyCategoryObs() {
    return this._allCategoriesSubject.technology.asObservable();
  }

  constructor(
    protected _staticData: StaticDataService,
    private _api: ApiService,
    private _filterState: FiltersStateService,
  ) {
    super();
    this._allCategoriesSubject = new AllCategorySubject();
  }

  public getData(): Observable<Article[]> {
    const dataObservable = this._api.getData(this._filterState.country.key, this._filterState.searchTerm, this.selectedCategory)
      .pipe(share());
    dataObservable.subscribe(articles => {
      this._articles.next(articles);
    });
    return dataObservable;
  }

  public getTop5ByCategory() {
    const apiRequests = [];
    this._staticData.categories.forEach(category => {
      apiRequests.push(this._api.getData(this._filterState.country.key, this._filterState.searchTerm, category, 5)
        .pipe(map(item => ({ key: category, value: item }))));
    });
    forkJoin(apiRequests).subscribe((data: {key: string, value: Article[]}[]) => {
      data.forEach(item => {
        this._allCategoriesSubject[item.key].next(item.value);
      });
    });
  }
}
