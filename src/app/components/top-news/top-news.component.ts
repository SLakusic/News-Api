import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TopNewsStateService } from '../../services/top-news-state/top-news-state.service';
import { StateBase } from '../../shared/classes/state-base.class';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
  // Provide TopNewsStateService as StaticBase. Use this for preview and article component
  providers: [ { provide: StateBase, useExisting: TopNewsStateService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNewsComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }
}
