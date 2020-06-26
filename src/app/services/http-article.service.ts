import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service constructor');
    this.refresh();
  }

  refresh(): void {
    this.http.get<Article[]>('http://localhost:3000/ws/articles').subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
        this.save();
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
    super.refresh();
  }

  add(article: Article): void {
    super.add(article);
    this.http.post<void>('http://localhost:3000/ws/articles', article).subscribe({
      next: () => {
        this.refresh();
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
