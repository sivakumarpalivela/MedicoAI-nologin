import { Component, OnInit,Input } from '@angular/core';
import { dept } from '../services/dept';
import { department } from '../services/dept';
import { DepartmentsService } from '../services/departments.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  @Input()
  dept:dept;
  depo:dept=department[0];
  constructor() { }

  ngOnInit() {

  }

}
