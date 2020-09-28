import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExpanderComponent } from './accordion-expander.component';

describe('AccordionExpanderComponent', () => {
  let component: AccordionExpanderComponent;
  let fixture: ComponentFixture<AccordionExpanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionExpanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
