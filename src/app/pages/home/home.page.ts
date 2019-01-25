import {Component} from '@angular/core';
import {SwitchThemeService} from '../../services/switch-theme/switch-theme.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private switchThemeService: SwitchThemeService) {

    }

    switchTheme(theme: string) {
        this.switchThemeService.switch(theme);
    }

}
