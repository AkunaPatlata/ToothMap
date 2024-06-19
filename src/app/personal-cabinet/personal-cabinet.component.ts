import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { DeleteModalService } from '../services/delete-modal.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss'],
})
export class PersonalCabinetComponent implements OnInit {
  patients: Patient[] = [];
  showDefaultPatient = true;
  defaultPatient = {
    id: 'default-patient',
    name: 'Дворак Максим Петрович',
    city: 'Рівне',
    phone: '+380962473730',
    photoUrl: '../../assets/моє фото.jpg',
  };

  constructor(
    public modalService: ModalService,
    public deleteModalService: DeleteModalService
  ) {}

  ngOnInit() {
    this.loadPatients();
  }

  addPatient(patient: Patient) {
    this.patients.push(patient);
    this.savePatients();
    this.modalService.close();
  }

  deletePatient(index: number | null) {
    if (index === null) {
      this.showDefaultPatient = false;
    } else {
      this.patients.splice(index, 1);
      this.savePatients();
    }
    this.deleteModalService.close();
  }

  confirmDeleteDefaultPatient() {
    this.deleteModalService.open(null);
  }

  openDeleteModal(index: number | null, event: Event) {
    event.stopPropagation(); 
    this.deleteModalService.open(index);
  }

  savePatients() {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  loadPatients() {
    const savedPatients = localStorage.getItem('patients');
    if (savedPatients) {
      this.patients = JSON.parse(savedPatients);
    }
  }
}
