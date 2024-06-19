import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  buttonIsVisible$ = new BehaviorSubject<boolean>(true);

  open() {
    this.isVisible$.next(true);
    this.buttonIsVisible$.next(false);
  }

  close() {
    this.isVisible$.next(false);
    this.buttonIsVisible$.next(true);
  }
}
