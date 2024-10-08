import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../../pages/welcome/welcome.component';

const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
        data: { title: 'ACCUEIL' },
        resolve: {
            layout: () => import("../../layouts/error-layout/error-layout.module").then(m => m.ErrorLayoutModule)
        }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeLayoutRoutingModule { }
