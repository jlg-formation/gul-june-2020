import { Injectable } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();
  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    const articles = JSON.parse(str);
    return articles;
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }

  refresh(): void {
    this.articles = this.getArticles();
  }

  remove(selectedArticles: Article[]): void {
    selectedArticles.forEach((article) => {
      const index = this.articles.findIndex((a) => a === article);
      if (index === -1) {
        return;
      }
      this.articles.splice(index, 1);
    });
    this.save();
  }
}
