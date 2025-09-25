import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {PropertyService} from '../services/property-service';
import {Room} from '../ui/room-card/room-card';

export const roomDetailTitleResolver: ResolveFn<string> = (route, _) => {
  const propertyId = route.paramMap.get('roomId');
  const propertyService = inject(PropertyService)
  const property = propertyService.rooms().find(room => room.id === propertyId)
  if (!property) return 'Room details'
  return property.title ?? 'Room details'
}

export const propertyResolver: ResolveFn<Room | undefined> = (route, _) => {
  const propertyId = route.paramMap.get('roomId');
  const propertyService = inject(PropertyService)
  return propertyService.rooms().find(room => room.id === propertyId)
}
