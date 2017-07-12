import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdMenuModule,
  MdPaginatorModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdPaginatorModule,
    MdTableModule,
    MdSnackBarModule],
  exports: [
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdPaginatorModule,
    MdTableModule,
    MdSnackBarModule],
  declarations: [],
  providers: [],
})
export class MaterialModule {
}
