import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { BacklogItemIconComponent } from './elements/backlog-item-icon';
import { BacklogItemStateComponent } from './elements/backlog-item-state';
import { BacklogItemTagsComponent } from './elements/backlog-item-tags';
import { FilterMultiSelectComponent } from './filters/filter-multi-select';
import { FilterSingleSelectComponent } from './filters/filter-single-select';
import { FilterTagSelectComponent } from './filters/filter-tag-select';

@NgModule({
	declarations: [
		BacklogItemIconComponent,
		BacklogItemStateComponent,
		BacklogItemTagsComponent,
		FilterSingleSelectComponent,
		FilterMultiSelectComponent,
		FilterTagSelectComponent,
	],
	exports: [
		CommonModule,
		BacklogItemIconComponent,
		BacklogItemStateComponent,
		BacklogItemTagsComponent,
		FilterSingleSelectComponent,
		FilterMultiSelectComponent,
		FilterTagSelectComponent,
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatTableModule,
		MatMenuModule,
		ReactiveFormsModule,
	],
})
export class SharedModule {}
