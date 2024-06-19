import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutPageComponent }]),
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class AboutPageModule {}
