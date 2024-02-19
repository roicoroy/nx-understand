import { Injectable } from "@angular/core";
import { State, Store, Action, StateContext } from "@ngxs/store";
import { ErrorLoggingActions } from "./error-logging.actions";

export interface ErrosStateModel {
    errorEntry: any[];
}

@State({
    name: 'errorsLogging',
    defaults: {
        errorEntry: null,
    }
})
@Injectable()
export class ErrorLoggingState {
    
    errorsList: Error[] = [];


    @Action(ErrorLoggingActions.LogErrorEntry)
    logErrorEntry(ctx: StateContext<unknown>, action: ErrorLoggingActions.LogErrorEntry): void {
        console.error(action);
    }

    @Action(ErrorLoggingActions.ClearErrorEntry)
    clearErrprEntry(ctx: StateContext<unknown>): void {
        this.errorsList = [];
        ctx.patchState({
            errorEntry: null,
        });
    }
}
