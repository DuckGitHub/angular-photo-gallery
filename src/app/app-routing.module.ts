import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PhotoListComponent } from "./components/photo-list/photo-list.component";
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';

const routes: Routes = [
  { 
    path: "angular-photo-gallery/photos", component: PhotoListComponent
  },
  { 
    path: "angular-photo-gallery/photos/new", component: PhotoFormComponent
  },
  { 
    path: "angular-photo-gallery/photos/:id", component: PhotoPreviewComponent
  },
  {
    path: "", redirectTo: '/angular-photo-gallery/photos', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
