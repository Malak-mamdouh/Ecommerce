import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

const materials = [
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports: [materials]
})
export class MaterialModule { }
