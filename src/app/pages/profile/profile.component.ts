import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ButtonModule, InputText, Message, RadioButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileForm = new FormGroup({
    contactInfo: new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      phone: new FormControl('', { validators: [Validators.required] }),
    }),
    personalInfo: new FormGroup({
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
      nationality: new FormControl('', { validators: [Validators.required] }),
      dateOfBirth: new FormControl('', { validators: [Validators.required] }),
      gender: new FormControl('', { validators: [Validators.required] }),
    }),
  });

  isInvalid(controlName: string, formGroup?: string): boolean {
    if (formGroup) {
      const group = this.profileForm.get(formGroup) as FormGroup;
      const control = group.get(controlName);
      return !!(control && control.touched && control.invalid);
    }
    const control = this.profileForm.get(controlName);
    return !!(control && control.touched && control.invalid);
  }

  onSubmit() {
    this.profileForm.markAllAsDirty();
    this.profileForm.markAllAsTouched();
    console.log(this.profileForm.value);
  }
}
