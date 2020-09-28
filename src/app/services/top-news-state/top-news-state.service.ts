import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

import { ApiService } from '../api-service/api.service';
import { StateBase } from '../../shared/classes/state-base.class';
import { StaticDataService } from '../static-data/static-data.service';
import { FiltersStateService } from '../filter-state/filter-state.service';

@Injectable({
  providedIn: 'root'
})
export class TopNewsStateService extends StateBase {
  constructor(
    protected _staticData: StaticDataService,
    private _api: ApiService,
    private _filterState: FiltersStateService,
  ) {
    super();
  }

  public getData() {
    const dataObservable = this._api.getData(this._filterState.country.key, this._filterState.searchTerm).pipe(share());
    dataObservable.subscribe(articles => {
      this._articles.next(articles);
    });
    return dataObservable;
  }
}
