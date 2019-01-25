import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SwitchThemeService {

    private switchSubject: BehaviorSubject<string> = new BehaviorSubject(null);

    constructor() {
    }

    watch(): Observable<string> {
        return this.switchSubject.asObservable();
    }

    switch(theme: string) {
        this.switchSubject.next(theme);
    }
}
