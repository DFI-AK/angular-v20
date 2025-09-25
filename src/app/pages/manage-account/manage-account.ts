import {Component, inject} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {Divider} from 'primeng/divider';
import {ButtonDirective, ButtonIcon} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {UserStore} from '../../core/services/user-store';

@Component({
  selector: 'app-manage-account',
  imports: [
    Avatar,
    Divider,
    ButtonDirective,
    ButtonIcon,
    RouterLink
  ],
  templateUrl: './manage-account.html',
  styleUrl: './manage-account.scss'
})
export class ManageAccount {
  private userStore = inject(UserStore)

  protected logout() {
    this.userStore.logout()
  }
}
