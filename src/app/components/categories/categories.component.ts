import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CategoryStateService } from '../..//services/category-state/category-state.service';
import { StateBase } from '../..//shared/classes/state-base.class';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  // Provide CategoryStateService as StaticBase. Use this for preview and article component
  providers: [ { provide: StateBase, useExisting: CategoryStateService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
