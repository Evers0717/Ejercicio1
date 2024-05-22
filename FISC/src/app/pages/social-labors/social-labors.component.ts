import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { Places } from '../../interfaces/places';

@Component({
  selector: 'app-social-labors',
  standalone: true,
  imports: [CommonModule],
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

  truncateChar(text: string): string {
    let charlimit = 100;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
