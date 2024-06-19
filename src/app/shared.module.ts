import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { VoiceAssistentComponent } from './voice-assistant/voice-assistent.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './modal/modal.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    VoiceAssistentComponent,
    ModalComponent,
    CreatePatientComponent,
    DeletePatientComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatExpansionModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    VoiceAssistentComponent,
    ModalComponent,
    CreatePatientComponent,
    DeletePatientComponent,
  ],
})
export class SharedModule {}
