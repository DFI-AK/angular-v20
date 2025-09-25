import { Component } from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {Divider} from 'primeng/divider';
import {ButtonDirective, ButtonIcon} from 'primeng/button';
import {RouterLink} from '@angular/router';

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

}
