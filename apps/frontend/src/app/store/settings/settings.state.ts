import { Injectable, inject } from "@angular/core";
import { State, Action, StateContext, Store, Selector } from "@ngxs/store";
import { SettingsActions } from "./settings.actions";
import { UpdateFormValue } from "@ngxs/form-plugin";
import { environment } from "apps/frontend/src/environments/environment";


export interface ISettingsModel {
    isDarkMode: boolean;
    savedLanguage: any;
    isFcmAccepted: boolean;
}

@State({
    name: 'settings',
})
@Injectable()
export class SettingsState {

    private store = inject(Store);

    @Selector()
    static getSavedLanguage(state: ISettingsModel) {
        return state.savedLanguage;
    }

    @Selector()
    static getIsDarkMode(state: ISettingsModel): boolean {
        return state.isDarkMode;
    }

    @Selector()
    static getIsFcmAccepted(state: ISettingsModel): boolean {
        return state.isFcmAccepted;
    }

    @Action(SettingsActions.SetDarkMode)
    setDarkMode(ctx: StateContext<ISettingsModel>, { isDarkMode }: SettingsActions.SetDarkMode) {
        const state = ctx.getState();
        this.store.dispatch([
            new UpdateFormValue({
                path: 'settings.settingsForm',
                value: {
                    darkMode: isDarkMode,
                },
            }),
        ]);
        return ctx.patchState({
            ...state,
            isDarkMode: isDarkMode
        });
    }

    @Action(SettingsActions.FcmAccepted)
    updateFcmAccepted(ctx: StateContext<ISettingsModel>, action: SettingsActions.FcmAccepted) {
        const state = ctx.getState();
        console.log(action.isFcmAccepted);
        return ctx.patchState({
            ...state,
            isFcmAccepted: action.isFcmAccepted,
        });
    }

    @Action(SettingsActions.UploadImage)
    uploadImage(ctx: StateContext<ISettingsModel>, action: SettingsActions.UploadImage) {
        const userId = this.store.selectSnapshot<any>((state: any) => state.authState?.user.id);
    }

    @Action(SettingsActions.SetSavedLanguage)
    setSavedLanguage(ctx: StateContext<ISettingsModel>, { savedLanguage }: SettingsActions.SetSavedLanguage) {
        this.store.dispatch([
            new UpdateFormValue({
                path: 'settings.settingsForm',
                value: {
                    savedLanguage: savedLanguage,
                },
            }),
        ]);
        return ctx.patchState({
            savedLanguage
        });
    }

    @Action(SettingsActions.ClearSavedLanguage)
    clearSavedLanguage(ctx: StateContext<ISettingsModel>) {
        ctx.patchState({
            savedLanguage: null
        });
    }
}
