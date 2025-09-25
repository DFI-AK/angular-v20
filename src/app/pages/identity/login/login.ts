import {Component, inject} from '@angular/core';
import {ButtonDirective, ButtonIcon} from 'primeng/button';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-login',
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonDirective,
    InputIconModule,
    IconFieldModule,
    ButtonIcon,
    RouterLink,
    Divider
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private fb = inject(FormBuilder)

  protected loginForm = this.fb.group({
    username: [''],
    password: ['']
  })
}
