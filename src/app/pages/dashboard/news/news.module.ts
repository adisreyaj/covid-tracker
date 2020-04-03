import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewItemComponent } from './new-item/new-item.component';
import { MaterialModule } from '../../../common/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NewsComponent, NewItemComponent],
  imports: [CommonModule, NewsRoutingModule, MaterialModule, FlexLayoutModule]
})
export class NewsModule {}
