import {Component, input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

export  type Room = Partial<{
  id: string
  ownerId: string
  title: string
  description: string
  images: string[]
  rent: number
  rentFor: string
  address: {
    city: string
    street: string
    zip: string
    lt: number,
    lg: number,
    houseNumber: number
  },
  bedRooms: number
  bathRooms: number
  kitchen: number,
  hasWifi: boolean
  created: Date
  lastModified: Date
}>

@Component({
  selector: 'app-room-card',
  imports: [
    CurrencyPipe,
    Button,
    RouterLink
  ],
  templateUrl: './room-card.html',
  styleUrl: './room-card.scss'
})
export class RoomCard {
  public room = input<Readonly<Room> | null>(null)
}
