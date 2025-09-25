import {Component, input} from '@angular/core';
import {Room} from '../../core/ui/room-card/room-card';
import {GalleriaModule} from 'primeng/galleria';
import {Button, ButtonDirective, ButtonIcon} from 'primeng/button';
import {Divider} from 'primeng/divider';
import {Avatar} from 'primeng/avatar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-room-detail',
  imports: [
    GalleriaModule,
    Button,
    Divider,
    Avatar,
    ButtonDirective,
    ButtonIcon,
    RouterLink
  ],
  templateUrl: './room-detail.html',
  styleUrl: './room-detail.scss'
})
export class RoomDetail {
  protected room = input.required<Room | undefined>()

  protected responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];
}
