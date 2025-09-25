import {Component, inject} from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {RoomCard} from '../../core/ui/room-card/room-card';
import {RouterLink} from '@angular/router';
import {Carousel} from 'primeng/carousel';
import {Searchbar} from '../../core/ui/searchbar/searchbar';
import {PropertyService} from '../../core/services/property-service';

@Component({
  selector: 'app-home',
  imports: [
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    RoomCard,
    RouterLink,
    Carousel,
    Searchbar,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private propertyService = inject(PropertyService)
  rooms = this.propertyService.rooms

  responsiveOptions: any[] = [];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ]
  }

  onSearch = (value: string) => {
    console.log(value)
  }
}
