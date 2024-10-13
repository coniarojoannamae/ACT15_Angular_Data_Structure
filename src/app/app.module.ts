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
import {BookListComponent} from "./components/book-list/book-list.component";
import {CityListComponent} from "./components/city-list/city-list.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CarModelListComponent} from "./components/car-model-list/car-model-list.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SubjectListComponent} from "./components/subject-list/subject-list.component";
import {CountryListComponent} from "./components/country-list/country-list.component";
import {SportsListComponent} from "./components/sports-list/sports-list.component";
import {VegetableListComponent} from "./components/vegetable-list/vegetable-list.component";

const routes: Routes = [
  { path: 'StudentList', component: StudentListComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: 'FruitList', component: FruitListComponent },
  { path: 'CourseList', component: CourseListComponent },
  { path: 'BookList', component: BookListComponent },
  { path: 'CityList', component: CityListComponent },
  { path: 'MovieList', component: MovieListComponent },
  { path: 'CarModelList', component: CarModelListComponent },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'SubjectList', component: SubjectListComponent },
  { path: 'CountryList', component: CountryListComponent },
  { path: 'SportsList', component: SportsListComponent },
  { path: 'VegetableList', component: VegetableListComponent },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,

  ],

  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
    BookListComponent,
    CityListComponent,
    MovieListComponent,
    CarModelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportsListComponent,
    VegetableListComponent
  ],

  bootstrap: [
  AppComponent
  ]

})
export class AppModule { }
