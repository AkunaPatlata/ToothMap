import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent {
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^(?=.*[0-9]).+$'), 
    Validators.pattern('^[A-Za-z0-9!@#$%^&*()_+=-]+$'), 
  ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "Це поле обов'язкове";
    }

    if (this.email.hasError('email')) {
      return 'Неможлива пошта';
    }

    return '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return "Це поле обов'язкове";
    }

    if (this.password.hasError('minlength')) {
      return 'Пароль повинен містити мінімум 8 символів';
    }

    if (
      this.password.hasError('pattern') &&
      this.password.errors?.['pattern']?.requiredPattern === '^(?=.*[0-9]).+$'
    ) {
      return 'Пароль повинен містити хоча б одну цифру';
    }

    if (
      this.password.hasError('pattern') &&
      this.password.errors?.['pattern']?.requiredPattern ===
        '^[A-Za-z0-9!@#$%^&*()_+=-]+$'
    ) {
      return 'Неможливий пароль';
    }

    return '';
  }
}
