import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "./actionTypes";

export function addToFavs(item) {
  return {
    type: ADD_TO_FAVS,
    item
  };
}

export function removeFromFavs(item) {
  return {
    type: REMOVE_FROM_FAVS,
    item
  };
}
