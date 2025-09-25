import {Injectable, signal} from '@angular/core';
import {Room} from '../ui/room-card/room-card';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  public rooms = signal<Room[]>([
    {
      id: '1',
      title: 'Home sweet home',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque delectus doloribus dolorum, earum eius error fugit labore minus nihil, non quaerat rem rerum, vero voluptas. Corporis cum cupiditate delectus dignissimos dolorem dolores dolorum ea error ex excepturi fugiat ipsa mollitia placeat, quibusdam quis, sit, suscipit voluptate voluptatem voluptates voluptatibus. Ab accusantium itaque nemo quasi sint?",
      images: [
        'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      address: {
        city: 'Berlin',
        street: 'Musterstrasse',
        zip: '10115',
        lt: 52.520008,
        lg: 13.404954,
        houseNumber: 10
      },
      bathRooms: 1,
      bedRooms: 2,
      rent: 9500,
      rentFor: 'Boys',
      hasWifi: false,
      created: new Date(),
      lastModified: new Date()
    },
    {
      id: '2',
      title: 'Home land',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque delectus doloribus dolorum, earum eius error fugit labore minus nihil, non quaerat rem rerum, vero voluptas. Corporis cum cupiditate delectus dignissimos dolorem dolores dolorum ea error ex excepturi fugiat ipsa mollitia placeat, quibusdam quis, sit, suscipit voluptate voluptatem voluptates voluptatibus. Ab accusantium itaque nemo quasi sint?",
      images: [
        'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      address: {
        city: 'Mohali',
        street: 'Sohana Gurudwara',
        zip: '10115',
        lt: 52.520008,
        lg: 13.404954,
        houseNumber: 10
      },
      bathRooms: 1,
      bedRooms: 2,
      rent: 35500,
      rentFor: 'Family',
      hasWifi: true,
      created: new Date(),
      lastModified: new Date()
    },
  ])
}
