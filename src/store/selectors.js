import { createSelector } from "reselect";

export const selectFavs = state => state.favs;

export const favsList = createSelector(
  selectFavs,
  state => state.list,
);
