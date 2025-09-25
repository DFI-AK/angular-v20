import { Component } from '@angular/core';
import {Searchbar} from '../../core/ui/searchbar/searchbar';

@Component({
  selector: 'app-chats',
  imports: [
    Searchbar
  ],
  templateUrl: './chats.html',
  styleUrl: './chats.scss'
})
export class Chats {

}
