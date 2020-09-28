import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './components/categories/categories.component';
import { AllCategoriesComponent } from './components/categories/components/all-categories/all-categories.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { ArticleComponent } from './shared/components/article/article.component';
import { PreviewComponent } from './shared/components/preview/preview.component';

const routes: Routes = [
  { path: 'top-news', component: TopNewsComponent, children: [
    { path: '', component: PreviewComponent },
    { path: 'article', component: ArticleComponent },
  ] },
  { path: 'category', component: CategoriesComponent, children: [
    { path: '', component: AllCategoriesComponent },
    { path: 'article', component: ArticleComponent },
    { path: ':id', component: PreviewComponent },
  ] },
  { path: '', redirectTo: 'top-news', pathMatch: 'full'},
  { path: '**', redirectTo: 'top-news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
