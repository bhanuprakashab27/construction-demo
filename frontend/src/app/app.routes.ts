import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent },
//   { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  {
path:'admin',
loadChildren:()=>import('./admin/admin.routes')
.then(m=>m.ADMIN_ROUTES)
},
{
path:'admin/login',
loadComponent:()=>import('./admin/pages/login/login.component')
.then(m=>m.LoginComponent)
}


];

