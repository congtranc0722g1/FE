import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';
import {MedicalRecord} from '../../model/medical-record';
import {MedicalRecordService} from '../../service/medical-record.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  patientList: Patient[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    reason: new FormControl(),
    treatmentOption: new FormControl(),
    doctor: new FormControl(),
    patient: new FormControl()
  });

  constructor(private router: Router, private medicalRecordService: MedicalRecordService, private patientService: PatientService) {
    this.patientService.getAll().subscribe(next => {
      this.patientList = next;
    })
  }

  ngOnInit(): void {
  }

  create() {
    this.medicalRecordService.create(this.form.value).subscribe(next => {
      this.router.navigateByUrl("");
      alert("Thêm mới thành công");
    })
  }
}
