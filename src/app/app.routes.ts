import { Routes } from '@angular/router';
import { OoopsComponent } from './pages/error-pages/ooops/ooops.component';
import { UnauthorizedComponent } from './pages/error-pages/unauthorized/unauthorized.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { WelcomeLayoutComponent } from './layouts/welcome-layout/welcome-layout.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        component: WelcomeLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./layouts/welcome-layout/welcome-layout.module").then(m => m.WelcomeLayoutModule)
    
            }
        ]
    },
    {
        path: "",
        component: ErrorLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./layouts/error-layout/error-layout.module").then(m => m.ErrorLayoutModule)
            }
        ]
    },
    {
        path: "*",
        redirectTo: "/404-error"
    },
    {
        path: "**",
        redirectTo: "/404-error"
    }
];
