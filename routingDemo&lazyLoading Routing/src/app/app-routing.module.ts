import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  {
    path: 'user',
    loadChildren: ()=> import('./user/user.module')
    .then(mod=>mod.UserModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
