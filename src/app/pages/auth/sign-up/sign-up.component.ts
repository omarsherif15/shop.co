import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, MessageModule, ToastModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly AuthService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  signupForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    userName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      const email = this.signupForm.value.email!;
      const userName = this.signupForm.value.userName!;
      const password = this.signupForm.value.password!;

      this.AuthService.signUp(email, userName, password).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User signed up successfully!',
          });
          this.router.navigate(['Auth/login']);
        },
        error: (error) => {
          console.error('Error signing up user:', error);
        },
      });
    }
  }

  isInvalid(controlName: string) {
    return this.signupForm.get(controlName)?.invalid && this.signupForm.get(controlName)?.touched;
  }
}
