import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {StudentListComponent} from "./components/student-list/student-list.component";

const routes: Routes = [
  { path: 'StudentList', component: StudentListComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule
  ],

  declarations: [
    AppComponent,
    StudentListComponent,
  ],

  bootstrap: [
  AppComponent
  ]

})
export class AppModule { }
