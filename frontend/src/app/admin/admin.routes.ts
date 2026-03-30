import { authGuard } from './guards/auth.guard';

export const ADMIN_ROUTES = [

{
path:'',
canActivate:[authGuard],
loadComponent:()=>import('./layout/admin-layout/admin-layout.component')
.then(m=>m.AdminLayoutComponent),

children:[


{
path:'dashboard',
loadComponent:()=>import('./pages/dashboard/dashboard.component')
.then(m=>m.DashboardComponent)
},

{
path:'projects',
loadComponent:()=>import('./pages/projects/projects.component')
.then(m=>m.ProjectsComponent)
},

{
path:'services',
loadComponent:()=>import('./pages/services/services.component')
.then(m=>m.ServicesComponent)
},

{
path:'testimonials',
loadComponent:()=>import('./pages/testimonials/testimonials.component')
.then(m=>m.TestimonialsComponent)
},

{
path:'contacts',
loadComponent:()=>import('./pages/contacts/contacts.component')
.then(m=>m.ContactsComponent)
}

]

}

];
