import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { SocialLaborsComponent } from './pages/social-labors/social-labors.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddeditStudentsComponent } from './pages/addedit-students/addedit-students.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'add', component: AddeditStudentsComponent },
  { path: 'edit/:id', component: AddeditStudentsComponent },

  { path: 'places', component: SocialLaborsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
