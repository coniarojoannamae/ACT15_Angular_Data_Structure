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
import {AnimalListComponent} from "./components/animal-list/animal-list.component";
import {ToolListComponent} from "./components/tool-list/tool-list.component";
import {LanguageListComponent} from "./components/language-list/language-list.component";
import {GameListComponent} from "./components/game-list/game-list.component";
import {SoftwareListComponent} from "./components/software-list/software-list.component";
import {PhoneContactListComponent} from "./components/phone-contact-list/phone-contact-list.component";
import {MusicPlaylistComponent} from "./components/music-playlist/music-playlist.component";
import {FoodMenuComponent} from "./components/food-menu/food-menu.component";
import {GroceryListComponent} from "./components/grocery-list/grocery-list.component";
import {ClassroomListComponent} from "./components/classroom-list/classroom-list.component";
import {InventoryListComponent} from "./components/inventory-list/inventory-list.component";
import {LectureListComponent} from "./components/lecture-list/lecture-list.component";
import {StationeryListComponent} from "./components/stationery-list/stationery-list.component";
import {FlowerListComponent} from "./components/flower-list/flower-list.component";
import {DestinationListComponent} from "./components/destination-list/destination-list.component";
import {LaptopListComponent} from "./components/laptop-list/laptop-list.component";

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
  { path: 'AnimalList', component: AnimalListComponent },
  { path: 'ToolList', component: ToolListComponent },
  { path: 'LanguageList', component: LanguageListComponent },
  { path: 'GameList', component: GameListComponent },
  { path: 'SoftwareList', component: SoftwareListComponent },
  { path: 'PhoneContactList', component: PhoneContactListComponent },
  { path: 'MusicPlaylist', component: MusicPlaylistComponent},
  { path: 'FoodMenu', component: FoodMenuComponent},
  { path: 'GroceryList', component: GroceryListComponent},
  { path: 'ClassroomList', component: ClassroomListComponent},
  { path: 'InventoryList', component: InventoryListComponent},
  { path: 'LectureList', component: LectureListComponent},
  { path: 'StationeryList', component: StationeryListComponent},
  { path: 'FlowerList', component:FlowerListComponent},
  { path: 'DestinationList', component:DestinationListComponent},
  { path: 'LaptopList', component:LaptopListComponent},
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
    VegetableListComponent,
    AnimalListComponent,
    ToolListComponent,
    LanguageListComponent,
    GameListComponent,
    SoftwareListComponent,
    PhoneContactListComponent,
    MusicPlaylistComponent,
    FoodMenuComponent,
    GroceryListComponent,
    ClassroomListComponent,
    InventoryListComponent,
    LectureListComponent,
    StationeryListComponent,
    FlowerListComponent,
    DestinationListComponent,
    LaptopListComponent,
  ],

  bootstrap: [
  AppComponent
  ]

})
export class AppModule { }
