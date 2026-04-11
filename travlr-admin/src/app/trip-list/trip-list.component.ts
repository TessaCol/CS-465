import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripService } from '../services/trip.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCardComponent],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: any[] = [];

  newTrip: any = {
    title: '',
    country: '',
    startDate: '',
    endDate: '',
    activities: ''
  };

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => this.trips = data,
      error: (err) => console.error('GET TRIPS ERROR:', err)
    });
  }

  addTrip(): void {
    const tripToSend = {
      title: this.newTrip.title,
      country: this.newTrip.country,
      startDate: this.newTrip.startDate,
      endDate: this.newTrip.endDate,
      activities: this.newTrip.activities
        ? this.newTrip.activities.split(',').map((a: string) => a.trim())
        : []
    };

    this.tripService.addTrip(tripToSend).subscribe({
      next: () => {
        this.loadTrips();

        this.newTrip = {
          title: '',
          country: '',
          startDate: '',
          endDate: '',
          activities: ''
        };
      },
      error: (err) => console.error('ADD TRIP ERROR:', err)
    });
  }

  deleteTrip(id: string): void {
    if (confirm('Delete this trip?')) {
      this.tripService.deleteTrip(id).subscribe({
        next: () => this.loadTrips(),
        error: (err) => console.error('DELETE TRIP ERROR:', err)
      });
    }
  }
}
