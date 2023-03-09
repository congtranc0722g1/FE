import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from '../../model/medical-record';
import {MedicalRecordService} from '../../service/medical-record.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reason = '';

  name = '';
  page: number;
 first = false;
  medicalRecordList: MedicalRecord[] = [];

  temp: MedicalRecord = {};

  nums;

  constructor(private medicalRecordSever: MedicalRecordService) {
    this.getAll(this.page);
  }

  ngOnInit(): void {
    this.getAll(0);
  }

  getAll(page: number) {
    this.medicalRecordSever.getAll(this.reason, this.name, page).subscribe(next => {
      this.medicalRecordList = next['content'];
      console.log(next);
    });
  }

  delete() {
    this.medicalRecordSever.delete(this.temp.id).subscribe(next => {
      this.getAll(this.page);
      alert('Xóa Thanh Công');
    });
  }
}
