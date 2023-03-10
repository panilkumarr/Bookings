import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'table',loadChildren:()=>import('./table/table.module').then(m=>m.TableModule)},
{path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
