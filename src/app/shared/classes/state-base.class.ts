import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from './article.class';

export abstract class StateBase {
  // Article property
  protected _articles: BehaviorSubject<Article[]>;
  public get articles() {
    return this._articles.asObservable();
  }

  // Selected article property
  private _selectedArticle: BehaviorSubject<Article>;
  public get selectedArticleObs() {
    return this._selectedArticle.asObservable();
  }
  public set selectedArticle(article: Article) {
    this._selectedArticle.next(article);
  }

  public selectedCategory: string;

  constructor() {
    this._selectedArticle = new BehaviorSubject<Article>(null);
    this._articles = new BehaviorSubject<Article[]>([]);
  }

  abstract getData(): Observable<Article[]>;
}