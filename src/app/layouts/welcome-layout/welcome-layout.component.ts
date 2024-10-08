import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../material-module';

@Component({
    selector: 'app-welcome-layout',
    standalone: true,
    imports: [
        MaterialModule,
        RouterModule
    ],
    templateUrl: './welcome-layout.component.html',
    styleUrl: './welcome-layout.component.css'
})
export class WelcomeLayoutComponent implements OnInit, OnDestroy{

    @ViewChild('drawer') drawer!: MatSidenav;

    private subscription = new Subscription();

    // public user_name: any;
    public sidebar_menu_news_list: any = [
        {
            id: 1,
            nav_item: 'Accueil',
            route: ['/']
        },
        {
            id: 2,
            nav_item: 'À propos',
            nav_list: [
                {
                    id: 1,
                    nav_list_item: 'Historique',
                    route: ['/web.a-propos-de-la-caci.historique']
                },
                {
                    id: 2,
                    nav_list_item: 'Missions',
                    route: ['/web.a-propos-de-la-caci.missions']
                },
                {
                    id: 3,
                    nav_list_item: 'Organisation',
                    route: ['/web.a-propos-de-la-caci.organisation']
                },
                {
                    id: 4,
                    nav_list_item: 'Délégations',
                    route: ['/web.a-propos-de-la-caci.delegations']
                },
            ]
        },
        {
            id: 3,
            nav_item: 'Services',
            nav_list: []
        },
        {
            id: 4,
            nav_item: 'Infos pratiques',
            nav_list: [
                {
                    id: 1,
                    nav_list_item: 'Suivi de votre dossier en ligne',
                    route: ['/web.information-pratiques', 'INFO-01', 'comment-soumettre-un-dossier'],

                },
                {
                    id: 2,
                    nav_list_item: 'Consultation du répertoire des arbitres, médiateurs et expert',
                    route: ['/web.information-pratiques', 'INFO-02', 'comment-devenir-arbitre-médiation-expert']
                },
                {
                    id: 3,
                    nav_list_item: 'Calcul des frais de procédure',
                    route: ['/web.information-pratiques', 'INFO-03', 'calcul-de-frais']
                },
                {
                    id: 4,
                    nav_list_item: 'Foire aux questions',
                    route: ['/web.information-pratiques', 'INFO-04', 'faq']
                },
            ]
        },
        {
            id: 5,
            nav_item: 'Actualités',
            nav_list: [
                {
                    id: 1,
                    nav_list_item: 'Activités',
                    route: ['/web.actualites.activites']
                },
                {
                    id: 2,
                    nav_list_item: 'Agenda',
                    route: ['/web.actualites.agenda']
                }
            ]
        },
        {
            id: 6,
            nav_item: 'Ressources',
            nav_list: [
                {
                    id: 1,
                    nav_list_item: 'Publications',
                    route: ['/web.ressources.publications']
                },
                {
                    id: 2,
                    nav_list_item: 'Liens utiles',
                    route: ['/web.ressources.lien-utiles']
                }
            ]
        },
    ];

    public is_show: boolean = true;

    public this_nav_item?: number;

    public screenWidth!: number;

    constructor(
        private __router: Router,
        @Inject(PLATFORM_ID) private __plateformeId: Object,
        @Inject(DOCUMENT) private _document: Document
    ) {
        if(isPlatformBrowser(this.__plateformeId)){
            if (typeof this._document.defaultView?.window !== "undefined") {
                this.screenWidth = window.innerWidth;
                window.onresize = () => {
                    // set screenWidth on screen size change
                    this.screenWidth = window.innerWidth;
                };
            }
            this.__router.events.subscribe((e: any) => {
                if(e instanceof NavigationEnd){
                    if(this.drawer){
                        this.drawer.close();
                    }
                }
            });
        }
    }

    ngOnInit(): void {

    }

// 😇😇 ************************************************ //
// ****************** START EVENTS IN COMPONENTS ***** 😇😇😇😇 //
    // if click on btn go to top
    onActivate(event: any): void {
        if(isPlatformBrowser(this.__plateformeId)){
            if (typeof this._document.defaultView?.window !== "undefined") {
                this._document.defaultView?.window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        }
    }
    //
    showSubMenu(data: any): void{
        if(this.this_nav_item == undefined){
            this.this_nav_item = data.id;
        }else{
            if(this.this_nav_item == data.id){
                this.this_nav_item = undefined;
            }else{
                this.this_nav_item = data.id;
            }
        }
    }

// 😇😇 ************************************************ //
// ****************** END EVENTS IN COMPONENTS ***** 😇😇😇😇 //

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
