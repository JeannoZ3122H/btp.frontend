import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        // NgxUiLoaderModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'btp-web';

    constructor(
        // __translate: TranslateService,
        private __router: Router,
        private __titleServ: Title,
    ){
        // __translate.addLangs(['en', 'klingon']);
        // __translate.setDefaultLang('fr');
        // __translate.use('fr');

        __router.events
        .pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => {
                let route: ActivatedRoute = this.__router.routerState.root;
                let routeTitle = '';
                while (route!.firstChild) {
                    route = route.firstChild;
                }
                if (route.snapshot.data['title']) {
                    routeTitle = route!.snapshot.data['title'];
                }
                return routeTitle;
            })
        ).subscribe((title: string) => {
            if (title) {
                this.title = title;
                this.__titleServ.setTitle(`BTP | ${title}`);
            }
        });
    }
}
