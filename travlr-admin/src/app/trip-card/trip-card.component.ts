import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html'
})
export class TripCardComponent {

  @Input() trip: any;

  @Output() delete = new EventEmitter<string>();

  deleteTrip(id: string) {
    this.delete.emit(id);
  }
}
