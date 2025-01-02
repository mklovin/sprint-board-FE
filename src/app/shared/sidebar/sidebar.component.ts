import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isHovered = false;

  constructor(private router: Router) {}

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  closeSidebar(): void {
    this.isHovered = false;
  }

  logout(): void {
    // Implement your logout logic here
    alert('You have logged out!');
    this.router.navigate(['/auth/signin']);
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') { // Close the sidebar on 'Escape' key press
      this.closeSidebar();
    }
  }
  
}
