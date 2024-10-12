import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {FruitListComponent} from "./components/fruit-list/fruit-list.component";
import {CourseListComponent} from "./components/course-list/course-list.component";

const routes: Routes = [
  { path: 'StudentList', component: StudentListComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: 'FruitList', component: FruitListComponent },
  { path: 'CourseList', component: CourseListComponent },



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
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
  ],

  bootstrap: [
  AppComponent
  ]

})
export class AppModule { }
