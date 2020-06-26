import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article): void {
    if (this.selectedArticles.includes(a)) {
      // remove
      const index = this.selectedArticles.findIndex((art) => art === a);
      if (index === -1) {
        return;
      }
      this.selectedArticles.splice(index, 1);
      return;
    }
    this.selectedArticles.push(a);
  }

  remove(): void {
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.length = 0;
  }
}
