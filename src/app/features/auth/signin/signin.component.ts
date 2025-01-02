import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(readonly fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signIn(): void {
    if (this.signinForm.valid) {
      this.authService.signIn(this.signinForm.value).subscribe(
        () => {
          alert('Sign-in successful!');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          alert('Error during sign-in: ' + error.error.message);
        }
      );
    }
  }
}
