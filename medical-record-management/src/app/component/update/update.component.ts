import {Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicalRecordService} from '../../service/medical-record.service';
import {PatientService} from '../../service/patient.service';
import {MedicalRecord} from '../../model/medical-record';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  public compareWith(object1: MedicalRecord, object2: MedicalRecord) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private router: Router, private patientService: PatientService, private medicalRecordService: MedicalRecordService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = +next.get('id');
      this.getMedicalRecord(id);
    });

    this.patientService.getAll().subscribe(next => {
      this.patientList = next;
    });

  }

  ngOnInit(): void {
  }

  getMedicalRecord(id: number) {
    this.medicalRecordService.detail(id).subscribe(next => {
      this.form.patchValue(next);
    });
  }

  update() {
    const medicalRecord = this.form.value;
    this.medicalRecordService.update(medicalRecord).subscribe(next => {
      this.router.navigateByUrl('');
      alert('Chỉnh Sửa Thành Công');
    });
  }
}
