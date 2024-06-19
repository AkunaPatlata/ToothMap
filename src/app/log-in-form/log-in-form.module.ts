import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared.module';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInFormComponent } from './log-in-form.component';

@NgModule({
  declarations: [LogInFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LogInFormComponent }]),
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class LogInFormModule {}
