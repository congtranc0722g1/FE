import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MedicalRecord} from '../model/medical-record';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(reason: string, name: string, page: number) {
    return this.httpClient.get<MedicalRecord[]>('http://localhost:8080/list?reason=' + reason + '&name=' + name + '&page=' + page);
  }


  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/list/' + id);
  }

  create(medicalRecord: MedicalRecord) {
    return this.httpClient.post('http://localhost:8080', medicalRecord);
  }

  detail(id: number) {
    return this.httpClient.get<MedicalRecord>('http://localhost:8080/detail/' + id);
  }

  update(medicalRecord: MedicalRecord) {
    return this.httpClient.put('http://localhost:8080/update', medicalRecord);
  }

  searchReason(reason: string) {
    return this.httpClient.get<any>('http://localhost:8080/search/' + reason)
  }
}
