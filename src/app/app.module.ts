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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [
    CoursesService,
    VehicleService,
    {provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
