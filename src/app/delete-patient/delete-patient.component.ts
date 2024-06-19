import { Component } from '@angular/core';
import { DeleteModalService } from '../services/delete-modal.service';
import { PersonalCabinetComponent } from '../personal-cabinet/personal-cabinet.component';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss'],
})
export class DeletePatientComponent {
  constructor(
    public deleteModalService: DeleteModalService,
    private personalCabinet: PersonalCabinetComponent
  ) {}

  confirm() {
    const index = this.deleteModalService.patientIndex$.value;
    this.personalCabinet.deletePatient(index);
    this.deleteModalService.close();
  }

  cancel() {
    this.deleteModalService.close();
  }
}
