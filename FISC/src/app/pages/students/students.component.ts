import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Students } from '../../interfaces/students';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  listStudents: Students[] = [];
  constructor(
    private studentService: StudentService,
    private toastr: ToastrService
  ) {}

  getListStudents() {
    this.studentService.getListStudents().subscribe((data: Students[]) => {
      this.listStudents = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getListStudents();
      this.playSound();
      this.toastr.error('SE MURIOOOOOOOOOO');
    });
  }

  playSound() {
    let audio = new Audio();
    audio.src = '../../../assets/sound/audio.wav';
    audio.load();
    audio.play();
  }

  ngOnInit() {
    this.getListStudents();
  }
}
