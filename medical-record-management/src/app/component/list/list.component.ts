import { Component, OnInit } from '@angular/core';
import {MedicalRecord} from '../../model/medical-record';
import {MedicalRecordService} from '../../service/medical-record.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  medicalRecordList: MedicalRecord[] = [];

  temp: MedicalRecord = {};

  constructor(private medicalRecordSever: MedicalRecordService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.medicalRecordSever.getAll().subscribe(next => {
      this.medicalRecordList = next;
    });
  }

  delete() {
    this.medicalRecordSever.delete(this.temp.id).subscribe(next => {
      this.getAll();
      alert("Xóa Thanh Công")
    })
  }
}
