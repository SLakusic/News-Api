// Interfaces for api response structure

export interface IApiResponse {
  articles: Array<IApiArticle>;
  status: string;
  totalResults: number;
}

export interface IApiArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: IApiArticleSource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IApiArticleSource {
  id: string | number;
  name: string;
}

export interface IKeyValue {
  key: any;
  value: any;
}