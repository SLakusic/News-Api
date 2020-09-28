import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Country } from '../../shared/classes/country.class';
import { Status } from '../../shared/enums/status.enum';
import { StaticDataService } from '../static-data/static-data.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersStateService {
  private _searchTerm: BehaviorSubject<string>;
  private _country: BehaviorSubject<Country>;
  private _isCountryDisabled: BehaviorSubject<boolean>;

  public get searchTerm() {
    return this._searchTerm.getValue();
  }
  public set searchTerm(value: string) {
    this._searchTerm.next(value);
  }
  public get searchTermChange() {
    return this._searchTerm.asObservable();
  }

  public get country() {
    return this._country.getValue();
  }
  public set country(country: Country) {
    if (this.country !== country && !this._isCountryDisabled.getValue()) {
      this._country.next(country);
    }
  }

  public get isCountryDisabled() {
    return this._isCountryDisabled.getValue();
  }

  public get isCountryDisabledObs() {
    return this._isCountryDisabled.asObservable();
  }

  public get countryObs() {
    return this._country.asObservable();
  }

  public set countryStatus(status: Status) {
    this._isCountryDisabled.next(status === Status.Disabled);
  }

  /* Use this for authomatic search with debounce time on change event
    private _prevSerchTerm: string;
    private _searchSubscription: Subscription;
  */

  constructor(
    private _staticData: StaticDataService,
  ) {
    this._searchTerm = new BehaviorSubject<string>('');
    this._country = new BehaviorSubject<Country>(this._staticData.countries[0]);
    this._isCountryDisabled = new BehaviorSubject<boolean>(false);
    /* This is search term subscription with debounce time. Use this if you want to update data on stop typing
    this._searchSubscription = this._searchTerm.pipe(debounceTime(500), filter(value => value !== this._prevSerchTerm)).subscribe(value => {
      this._prevSerchTerm = value;
      this.getData();
    });
    */
  }
}
