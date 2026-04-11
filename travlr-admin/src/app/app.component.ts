import { Component, signal } from '@angular/core';
import { TripListComponent } from './trip-list/trip-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('travlr-admin');
}
