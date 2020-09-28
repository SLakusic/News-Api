import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FiltersStateService } from '../../services/filter-state/filter-state.service';
import { StaticDataService } from '../../services/static-data/static-data.service';
import { Country } from '../../shared/classes/country.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public countries: Array<Country>;
  public searchTerm: string;

  constructor(
    public filterState: FiltersStateService,
    private _staticData: StaticDataService,
  ) {
    this.countries = this._staticData.countries;
  }

  ngOnInit(): void {
  }

  public changeSearch() {
    this.filterState.searchTerm = this.searchTerm;
  }

  public changeCountry(country: Country) {
    this.filterState.country = country;
  }
}
