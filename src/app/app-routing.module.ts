import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './features/auth/signup/signup.component';
import { SignInComponent } from './features/auth/signin/signin.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/auth/signin' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
