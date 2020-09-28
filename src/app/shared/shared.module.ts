import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ArticleComponent } from './components/article/article.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionHeaderDirective } from './diractives/accordion-header/accordion-header.directive';
import { AccordionExpanderComponent } from './components/accordion-expander/accordion-expander.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    CardComponent,
    ArticleComponent,
    AccordionComponent,
    AccordionExpanderComponent,
    AccordionHeaderDirective,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    ArticleComponent,
    AccordionComponent,
    AccordionExpanderComponent,
    PreviewComponent,
  ]
})
export class SharedModule { }
