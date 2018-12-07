import { Component, OnInit } from '@angular/core';
import { dept } from '../app/services/dept';
import { underblock,doc } from '../app/services/dept';
import { DepartmentsService } from '../app/services/departments.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MedicoAI';

  depts:dept[];
  univa:underblock[];
  doctors:doc[];
  selectedDept:dept;

  constructor(private Depart:DepartmentsService,public dialog: MatDialog ){}
  ngOnInit(){
    this.depts = this.Depart.getdepts();
    this.univa=this.Depart.getunder();
    this.doctors=this.Depart.getdocs();
  }

  onclicks(de:dept){
    this.selectedDept=de;
  }

  openLoginForm() {
    this.dialog.open(FormComponent, {width: '500px', height: '450px'});
  }

}
