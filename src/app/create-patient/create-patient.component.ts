import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss'],
})
export class CreatePatientComponent {
  @Output() formSubmit = new EventEmitter<Patient>();

  patientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^(\+38)?\d{10}$/)]],
      city: ['', Validators.required],
    });
  }

  get isFormValid() {
    return this.patientForm.valid;
  }

  generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const patient: Patient = {
        id: this.generateRandomId(),
        name: this.patientForm.value.name,
        phone: `+38${this.patientForm.value.phone}`,
        city: this.patientForm.value.city,
        photoUrl: 'https://i.pravatar.cc',
      };

      this.formSubmit.emit(patient);
    }
  }
}
