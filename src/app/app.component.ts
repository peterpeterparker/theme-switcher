import {Component, OnDestroy, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SwitchThemeService} from './services/switch-theme/switch-theme.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        }
    ];

    private subscription: Subscription;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private switchThemeService: SwitchThemeService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit(): void {
        this.subscription = this.switchThemeService.watch().subscribe(async (theme: string) => {
            await this.applyTheme(theme);
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private applyTheme(theme: string): Promise<void> {
        return new Promise<void>((resolve) => {
            if (!document) {
                resolve();
                return;
            }

            if (theme && theme !== '') {
                document.documentElement.setAttribute('theme', theme);
            } else {
                const themeAttr: string = document.documentElement.getAttribute('theme');
                if (themeAttr) {
                    document.documentElement.removeAttribute('theme');
                }
            }

            resolve();
        });
    }
}
