import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { StockGuard } from '../guards/stock.guard';

const routes: Routes = [
  { path: 'stock', component: ListComponent },
  {
    path: 'stock/new',
    component: CreateComponent,
    canActivate: [
      /* StockGuard */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
