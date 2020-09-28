import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Country } from '../../shared/classes/country.class';

// TODO: Get this data from config file, or api endpoint
@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  private _countryList: BehaviorSubject<Country[]>;
  private _categoryList: BehaviorSubject<string[]>;

  public get countries() {
    return this._countryList.getValue();
  }

  public get categories() {
    return this._categoryList.getValue();
  }

  constructor() {
    this._countryList = new BehaviorSubject<Country[]>([
      new Country('GB', 'gb', 'Great Britain'),
      new Country('US', 'us', 'United States'),
    ]);
    this._categoryList = new BehaviorSubject<string[]>([
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ]);
  }
}
