import { ProductService } from './services/product.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormCrudComponent } from './contact-form-crud/contact-form-crud.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { NavmenuComponent } from './navmenu/navmenu.component';

import { RouterModule } from '@angular/router';
import { VehicleService } from './services/vehicle.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlerService } from './error-handler.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListMaterialComponent } from './product-material/product-list-material/product-list-material.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    ContactFormComponent,
    PostsComponent,
    ContactFormCrudComponent,
    VehicleFormComponent,
    NavmenuComponent,
    VehicleListComponent,
    PaginationComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductViewComponent,
    ProductListMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: 'vehicles', component: VehicleListComponent },

      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: ProductFormComponent },
      { path: 'products/edit/:id', component: ProductFormComponent },
      { path: 'products/:id', component: ProductViewComponent },

      { path: 'products-material', component: ProductListMaterialComponent },

      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [
    CoursesService,
    VehicleService,
    ProductService,
    {provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
