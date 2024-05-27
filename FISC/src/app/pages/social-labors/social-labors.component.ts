import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { Places } from '../../interfaces/places';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-labors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './social-labors.component.html',
  styleUrl: './social-labors.component.css',
})
export class SocialLaborsComponent implements OnInit {
  listPlaces: Places[] = [];
  constructor(private placeService: PlaceService) {}

  getListPlaces() {
    this.placeService.getListPlaces().subscribe((data: Places[]) => {
      this.listPlaces = data;
    });
  }

  ngOnInit() {
    this.getListPlaces();
  }
}
