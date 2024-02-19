import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngxs/store';
import { UpdateFormValue } from '@ngxs/form-plugin';
import { SettingsActions } from '../../../store/settings/settings.actions';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private store: Store,
    ) { }

    themeInit() {
        const isDarkMode = this.store.selectSnapshot<any>((state: any) => state.settings.isDarkMode);
        if (isDarkMode) {
            this.document.body.classList.toggle('dark', true);
        } else {
            this.document.body.classList.toggle('dark', false);
        }
        this.store.dispatch([
            new UpdateFormValue({
                path: 'settings.settingsForm',
                value: {
                    darkMode: isDarkMode,
                },
            }),
        ]);
    }

    changeTheme(isDarkMode: boolean) {
        this.store.dispatch(new SettingsActions.SetDarkMode(isDarkMode));
        this.themeInit();
    }
}

