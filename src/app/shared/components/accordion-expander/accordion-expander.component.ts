import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: '[app-accordion-expander]',
  templateUrl: './accordion-expander.component.html',
  styleUrls: ['./accordion-expander.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionExpanderComponent implements OnInit {
  @Input() set default(value: boolean) {
    this._isOpened = value;
  }

  @HostBinding('class.expand') private _isOpened = true;

  constructor(
    private _accordion: AccordionComponent,
  ) {
  }

  ngOnInit(): void {
  }

  public changeState() {
    this._isOpened = !this._isOpened;
    if (this._isOpened) {
      this._accordion.expand();
    } else {
      this._accordion.collapse();
    }
  }

}
