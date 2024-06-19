import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCabinetComponent } from './personal-cabinet.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared.module';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalCabinetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PersonalCabinetComponent }]),
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class PersonalCabinetModule {}
