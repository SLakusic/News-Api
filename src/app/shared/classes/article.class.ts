import { IApiArticle, IApiArticleSource } from '../interfaces/api/api.interface';

export class Article {
  public author: string;
  public content: string;
  public description: string;
  public publishedAt: string;
  public source: IApiArticleSource;
  public title: string;
  public url: string;
  public urlToImage: string;
  public id: number;

  constructor(article: IApiArticle, id: number) {
    this.author = article.author;
    this.content = article.content;
    this.description = article.description;
    this.publishedAt = article.publishedAt;
    this.source = article.source;
    this.title = article.title;
    this.url = article.url;
    this.urlToImage = article.urlToImage;
    this.id = id;
  }
}