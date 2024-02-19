import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';
import { LanguageModel } from './language.model';
import { Store } from '@ngxs/store';
import { SettingsState } from 'src/app/store/settings/settings.state';
import { SettingsActions } from 'src/app/store/settings/settings.actions';
import { UpdateFormValue } from '@ngxs/form-plugin';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages: Array<LanguageModel> = new Array<LanguageModel>();

  constructor(
    public translate: TranslateService,
    private store: Store,
  ) { }

  getLanguages(): any {
    this.languages = [];
    this.languages.push(
      { name: 'English', code: 'en' },
      { name: 'Portuguese', code: 'pt' },
    );
    return this.languages;
  }

  async initTranslate() {
    const language = await Device.getLanguageCode();
    const deviceLanguage = this.shortLanguage(language);
    const useLang = deviceLanguage.match(/en|pt/) ? deviceLanguage : 'en';
    const savedLanguage = this.store.selectSnapshot(SettingsState.getSavedLanguage);
    if (savedLanguage || savedLanguage !== useLang) {
      this.translate.use(savedLanguage);
      this.store.dispatch([
        new UpdateFormValue({
          path: 'settings.settingsForm',
          value: {
            savedLanguage: savedLanguage,
          },
        }),
      ]);
    } else {
      this.store.dispatch(new SettingsActions.SetSavedLanguage(useLang));
      this.translate.use(useLang);
      this.store.dispatch([
        new UpdateFormValue({
          path: 'settings.settingsForm',
          value: {
            savedLanguage: useLang,
          },
        }),
      ]);
    }
  }
  shortLanguage(language: any) {
    if (language) {
      const short = language.value.split('-');
      return short[0];
    }
  }
}
