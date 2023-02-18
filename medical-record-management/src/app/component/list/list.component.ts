import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from '../../model/medical-record';
import {MedicalRecordService} from '../../service/medical-record.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  totalPages: number;
  pages: number[];

  page: number;

  medicalRecordList: MedicalRecord[] = [];

  temp: MedicalRecord = {};

  constructor(private medicalRecordSever: MedicalRecordService) {
    this.getAll(this.page);
  }

  ngOnInit(): void {
  }

  getAll(page: number) {
    this.medicalRecordSever.getAll(page).subscribe(next => {
      this.medicalRecordList = next.content;
      this.totalPages = next.totalPages;
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    });
  }

  delete() {
    this.medicalRecordSever.delete(this.temp.id).subscribe(next => {
      this.getAll(this.page);
      alert('Xóa Thanh Công');
    });
  }

  searchReason(reason: string) {
    this.medicalRecordSever.searchReason(reason).subscribe(next => {
      this.medicalRecordList = next;
    });
  }
}
