import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit {
  @Input() public expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

  public expand() {
    this.expanded = true;
  }

  public collapse() {
    this.expanded = false;
  }
}
