import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Button
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menu = signal<MenuItem[]>([
    {
      label: "Home",
      routerLink: "/app",
      icon: "pi pi-home",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Explore",
      routerLink: "explorer",
      icon: "pi pi-compass",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Chats",
      routerLink: "chats",
      icon: "pi pi-comments",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Saved",
      routerLink: "saved",
      icon: "pi pi-heart",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Profile",
      routerLink: "manage-account",
      icon: "pi pi-user",
      routerLinkActiveOptions: {
        exact: true
      }
    },
  ])
}
