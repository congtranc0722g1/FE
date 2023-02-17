import {Patient} from './patient';

export interface MedicalRecord {
  id?: number;
  code?: string;
  startDay?: string;
  endDay?: string;
  reason?: string;
  treatmentOption?: string;
  doctor?: string;
  patient?: Patient;
}
