import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DepartmentsService } from './services/departments.service';
import { DepartmentComponent } from './department/department.component';
import {MatCardModule} from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormGroupName } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [DepartmentsService,AppComponent],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent]
})
export class AppModule { }
