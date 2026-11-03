export const STORAGE_KEY = "favourites"; //nameof drwer where list savein local storage 
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

//fav state using using useReducer function ->dont use usestate
// it keeps togel logic in one place
export function favouritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)//unfab ret list without id 
        : [...state, action.payload];//ret the list with id fab
    default:
      return state;
  }
}

//when repload it keep previous  fab data e
export function initFavourites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}