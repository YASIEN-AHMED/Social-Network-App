import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FeatureCard } from './feature-card/feature-card.component';

@Component({
  selector: 'app-auth-shell',
  imports: [RouterOutlet, FeatureCard],
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.css',
})
export class AuthShell {
  private router = inject(Router);

  get isSignup(): boolean {
    return this.router.url.includes('signup');
  }
}
