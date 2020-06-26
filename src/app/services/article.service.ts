import { Injectable } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { id: 'a1', name: 'Tournevis', price: 2.34, qty: 110 },
    { id: 'a2', name: 'Marteau', price: 2.34, qty: 20 },
    { id: 'a3', name: 'Tournevis cruciforme', price: 2.34, qty: 40 },
    { id: 'a4', name: 'Pince ', price: 2.34, qty: 45 },
  ];
  constructor() {}
}
