import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule  } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LocalDatabaseService } from './shared/services/local-database/local-database.service';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  { path: 'home', component: ImageGalleryComponent },
  { path: 'home/:page', component: ImageGalleryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ImageGalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageGridComponent,
    ImageUploaderComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LocalDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
