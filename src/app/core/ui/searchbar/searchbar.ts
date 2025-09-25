import {Component, input, output} from '@angular/core';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-searchbar',
  imports: [
    IconField,
    InputIcon,
    InputText,
  ],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss'
})
export class Searchbar {
  isFilterButton = input<boolean>(false, {alias: 'enableFilterButton'})
  placeholder = input<string>('', {alias: 'placeholder'})

  searchValueEmitter = output<string>({alias: 'searchEvent'})

  public searchResult = ''

  protected onChange(value: string) {
    this.searchResult = value
    this.searchValueEmitter.emit(value)
  }

}
