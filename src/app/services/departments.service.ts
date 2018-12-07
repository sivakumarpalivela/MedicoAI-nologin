import { Injectable } from '@angular/core';
import { department } from '../services/dept';
import { under } from '../services/dept';
import { doctor } from '../services/dept';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }
  getdepts(){
    return department;
  }
  
  getunder(){
    return under;
  }

  getdocs(){
    return doctor;
  }
}
