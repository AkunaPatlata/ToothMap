import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  patientIndex$ = new BehaviorSubject<number | null>(null);

  open(index: number | null) {
    this.patientIndex$.next(index);
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
    this.patientIndex$.next(null);
  }
}
