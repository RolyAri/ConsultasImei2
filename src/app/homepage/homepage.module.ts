import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormularioModalComponent } from './components/formulario-modal/formulario-modal.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ImeiModalComponent } from './components/imei-modal/imei-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormularioModalComponent,
    ImeiModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  exports: [
    HomeComponent,
    FormularioModalComponent
  ]
})
export class HomepageModule { }
