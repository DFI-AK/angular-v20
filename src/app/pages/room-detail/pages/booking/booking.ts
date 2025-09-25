import {Component, input} from '@angular/core';
import {Room, RoomCard} from '../../../../core/ui/room-card/room-card';
import {RouterLink} from '@angular/router';
import {ButtonDirective, ButtonIcon} from 'primeng/button';

@Component({
  selector: 'app-booking',
  imports: [
    RoomCard,
    RouterLink,
    ButtonDirective,
    ButtonIcon
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  room = input.required<Room>()
}
