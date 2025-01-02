import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add this to make formGroup available
    AuthRoutingModule
  ]
})
export class AuthModule { }
