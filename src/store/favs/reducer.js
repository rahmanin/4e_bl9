import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "./actionTypes";

const initialState = {
  list: []
};


export default function favsReducer(state = initialState, action) {
  const item = action.item || {};
  const { list } = state;
  const { ship_id } = item;

  switch (action.type) {
    case ADD_TO_FAVS:
      console.log("3AE6ALO");
      let array1 = [...list, item];
      return {
        ...state,
        list: array1
      };
    case REMOVE_FROM_FAVS:
      console.log("CYKA");
      let array2 = list.filter(element => ship_id !== element.ship_id);
      return {
        ...state,
        list: array2
      };
    default:
      return state;
  }
}
