import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {SpeedDial} from 'primeng/speeddial';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-nav-dial',
  imports: [
    RouterOutlet,
    SpeedDial,
    TooltipModule
  ],
  templateUrl: './nav-dial.html',
  styleUrl: './nav-dial.scss'
})
export class NavDial {
  speedDial = signal<MenuItem[]>([
    {
      label: "Explore",
      routerLink: "/app",
      icon: "pi pi-compass",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Chats",
      routerLink: "/app/chats",
      icon: "pi pi-comments",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Home",
      routerLink: "/app",
      icon: "pi pi-home",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Saved",
      routerLink: "/app/wishlist",
      icon: "pi pi-heart",
      routerLinkActiveOptions: {
        exact: true
      }
    },
    {
      label: "Profile",
      routerLink: "/app/manage-account",
      icon: "pi pi-user",
      routerLinkActiveOptions: {
        exact: true
      }
    },
  ])
}
