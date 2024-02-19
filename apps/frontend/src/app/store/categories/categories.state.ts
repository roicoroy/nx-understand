import { Injectable, inject } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { Subject } from 'rxjs';
import { CategoriessActions } from './categories.actions';
import { HttpClient } from '@angular/common/http';

export class ICategoriesStateModel {
    categories: any;
}

@State<ICategoriesStateModel>({
    name: 'categories',
})
@Injectable()
export class CategoriesState {

    @Selector()
    static getRefinedProducts(state: ICategoriesStateModel) {
        return state.categories;
    }

    @Action(CategoriessActions.SearchProducts)
    async getAuthToken(ctx: StateContext<ICategoriesStateModel>, { searchTerm }: CategoriessActions.SearchProducts) {
        const state = ctx.getState();

    }

    @Action(CategoriessActions.GetCategories)
    async getCategories(ctx: StateContext<ICategoriesStateModel>) {
        const state = ctx.getState();

    }

}
