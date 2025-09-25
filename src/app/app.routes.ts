import {Routes} from '@angular/router';
import {propertyResolver, roomDetailTitleResolver} from './core/utils/resolvers';

export const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'identity',
    children: [
      {path: 'login', loadComponent: () => import('./pages/identity/login/login').then(c => c.Login), title: "Login"},
      {
        path: 'register',
        loadComponent: () => import('./pages/identity/signup/signup').then(c => c.Signup),
        title: "Register"
      },
    ]
  },
  {
    path: 'app',
    loadComponent: () => import('./core/ui/navbar/navbar').then(c => c.Navbar),
    children: [
      {path: '', loadComponent: () => import('./pages/home/home').then(c => c.Home), title: "Home"},
      {
        path: 'manage-account',
        loadComponent: () => import('./pages/manage-account/manage-account').then(c => c.ManageAccount),
        title: "Manage Account"
      },
      {
        path: 'saved',
        loadComponent: () => import('./pages/saved/saved').then(c => c.Saved),
        title: "Saved"
      },
      {
        path: 'chats',
        loadComponent: () => import('./pages/chats/chats').then(c => c.Chats),
        title: "Chats"
      },
      {
        path: 'room/:roomId',
        loadComponent: () => import('./pages/room-detail/room-detail').then(c => c.RoomDetail),
        title: roomDetailTitleResolver,
        resolve: {
          room: propertyResolver
        }
      },
      {
        path: 'room/:roomId/booking',
        loadComponent: () => import('./pages/room-detail/pages/booking/booking').then(c => c.Booking),
        resolve: {
          room: propertyResolver
        }
      }
    ]
  },
  {path: '**', redirectTo: 'app'}
];
