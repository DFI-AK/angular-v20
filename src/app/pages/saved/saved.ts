import {Component, computed, inject, signal} from '@angular/core';
import {Searchbar} from '../../core/ui/searchbar/searchbar';
import {RoomCard} from '../../core/ui/room-card/room-card';
import {PropertyService} from '../../core/services/property-service';

@Component({
  selector: 'app-saved',
  imports: [
    Searchbar,
    RoomCard
  ],
  templateUrl: './saved.html',
  styleUrl: './saved.scss'
})
export class Saved {
  private propertyService = inject(PropertyService)
  protected savedRooms = this.propertyService.rooms

  private searchValue = signal('')

  protected filteredRooms = computed(() => {
    if (!this.searchValue() || this.searchValue() === '') {
      return this.savedRooms()
    }
    return this.savedRooms().filter(room => room.title?.toLowerCase().includes(this.searchValue().toLowerCase()))
  })

  onSearch = (value: string) => {
    this.searchValue.set(value)
  }

}
