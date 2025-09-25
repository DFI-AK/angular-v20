import { Component } from '@angular/core';
import {ButtonDirective, ButtonIcon} from "primeng/button";
import {RouterLink} from "@angular/router";
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-signup',
  imports: [
    ButtonIcon,
    RouterLink,
    IconField,
    InputIcon,
    InputText,
    ReactiveFormsModule,
    ButtonDirective,
    Divider
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

}
