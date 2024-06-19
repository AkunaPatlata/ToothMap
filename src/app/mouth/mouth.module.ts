import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { ToothVisibilityDirective } from '../tooth-visibility.directive';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MouthComponent } from './mouth.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentsService } from '.././services/save-comment.service';

const routes: Routes = [
  {
    path: '',
    component: MouthComponent,
  },
  {
    path: ':id',
    component: MouthComponent,
  },
];

@NgModule({
  declarations: [MouthComponent, ToothVisibilityDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
    MatExpansionModule,
  ],
  providers: [CommentsService],
})
export class MouthModule {}
