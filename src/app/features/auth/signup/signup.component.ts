import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
   signupForm!: FormGroup;

  constructor(readonly fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp(): void {
    if (this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe(
        () => {
          alert('Sign-up successful!');
          this.router.navigate(['/auth/signin']);
        },
        (error) => {
          alert('Error during sign-up: ' + error.error.message);
        }
      );
    }
  }
}
