import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { StudentService } from './services/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceService } from './services/place.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService, PlaceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'FISC';
  menuOption: string = '';

  onOption() {
    this.menuOption = this.menuOption;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
