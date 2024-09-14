import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const counterSelector = (state: AppState) => state.counter;

export const selectCount = createSelector(counterSelector, (state) => state.count)