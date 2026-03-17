import { Routes } from '@angular/router';

export const adminRoutes:Routes=[

{
path:'',
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
path:'contacts',
loadComponent:()=>import('./pages/contacts/contacts.component')
.then(m=>m.ContactsComponent)
},
{
path:'testimonials',
loadComponent:()=>import('./pages/testimonials/testimonials.component')
.then(m=>m.TestimonialsComponent)
}

]

}

]
