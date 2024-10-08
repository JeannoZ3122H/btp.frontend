import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OoopsComponent } from '../../pages/error-pages/ooops/ooops.component';
import { UnauthorizedComponent } from '../../pages/error-pages/unauthorized/unauthorized.component';

const routes: Routes = [

    {
        path: "404-error",
        component: OoopsComponent,
        data: { title: 'PAGE NON TROUVÉE' },
        resolve: {
            layout: () => import("../../layouts/error-layout/error-layout.module").then(m => m.ErrorLayoutModule)
        }
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
        data: { title: 'PAGE NON AUTORISÉE' },
        resolve: {
            layout: () => import("../../layouts/error-layout/error-layout.module").then(m => m.ErrorLayoutModule)
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorLayoutRoutingModule { }
