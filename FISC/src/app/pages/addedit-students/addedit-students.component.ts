import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Students } from '../../interfaces/students';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addedit-students',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './addedit-students.component.html',
  styleUrl: './addedit-students.component.css',
})
export class AddeditStudentsComponent implements OnInit {
  formStudent: FormGroup;
  id: number;
  operation: string = 'add';
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private toastr: ToastrService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.formStudent = this.fb.group({
      name: ['', [Validators.maxLength(45), Validators.required]],
      dni: ['', [Validators.maxLength(25), Validators.required]],
      email: [
        '',
        [Validators.maxLength(45), Validators.required, Validators.email],
      ],
      cellphone: ['', Validators.required],
      carreer: ['', [Validators.maxLength(45), Validators.required]],
      year: ['', Validators.required],
      hours: ['', Validators.required],
      desc: [''],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

    // console.log(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operation = 'Editar';
      this.getStudent(this.id);
    } else {
      this.operation = 'Nuevo';
    }
  }

  addProduct() {
    const student: Students = {
      name: this.formStudent.value.name,
      dni: this.formStudent.value.dni,
      email: this.formStudent.value.email,
      cellphone: this.formStudent.value.cellphone,
      carreer: this.formStudent.value.carreer,
      year: this.formStudent.value.year,
      hours: this.formStudent.value.hours,
      obs: this.formStudent.value.desc,
    };

    if (this.id != 0) {
      this.studentService.updateStudent(this.id, student).subscribe(() => {
        this.toastr.info(`Se actualiza info del  estudiante: ${student.name}`);
        this.router.navigate(['/students']);
      });
    } else {
      console.log(student);
      this.studentService.saveStudent(student).subscribe(() => {
        this.toastr.success(`Se adiciono un estudiante: ${student.name}`);
        this.router.navigate(['/students']);
      });
    }
  }

  getStudent(id: number) {
    this.studentService.getStudent(id).subscribe((data: Students) => {
      console.log(data);
      this.formStudent.setValue({
        name: data.name,
        dni: data.dni,
        email: data.email,
        cellphone: data.cellphone,
        carreer: data.carreer,
        year: data.year,
        hours: data.hours,
        desc: data.obs,
      });
    });
  }
}
