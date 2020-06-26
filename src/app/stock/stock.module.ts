import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [CommonModule, StockRoutingModule, ReactiveFormsModule],
})
export class StockModule {}
