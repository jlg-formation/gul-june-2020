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
      return [
        { id: 'a1', name: 'Tournevis', price: 2.34, qty: 110 },
        { id: 'a2', name: 'Marteau', price: 2.34, qty: 20 },
        { id: 'a3', name: 'Tournevis cruciforme', price: 2.34, qty: 40 },
        { id: 'a4', name: 'Pince ', price: 2.34, qty: 45 },
      ];
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
