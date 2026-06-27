import PrevCatList from "../components/PrevCatList";

export const reducerActions = {
  GET_DATA: "getData",
  ADD_TO_BAN_LIST: "addToBanList",
  REMOVE_BAN_ITEM: "removeBanItem",
  GET_NEW_CAT: "getNewCat",
};

export const initialState = {
  catsData: [],
  workingCatsData: [],
  currentCat: null,
  prevCatList: [],
  banList: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "getData":
      const apiData = action.payload.data;
      let randomIndex = Math.floor(Math.random() * apiData.length);
      return {
        ...state,
        catsData: [...apiData],
        workingCatsData: [...apiData],
        currentCat: apiData[randomIndex],
        prevCatList: [apiData[randomIndex], ...state.prevCatList],
      };

    case "addToBanList":
      const newBanList = !state.banList.includes(action.payload.name)
        ? [action.payload.name, ...state.banList]
        : state.banList;
      return {
        ...state,
        banList: [...newBanList],
        workingCatsData: state.workingCatsData.filter(
          (catData) =>
            !newBanList.includes(catData.breeds[0][action.payload.type]),
        ),
      };

    case "removeBanItem":
      const newBanItems = state.banList.filter(
        (item) => item !== action.payload.banItem,
      );
      return {
        ...state,
        banList: [...newBanItems],
        workingCatsData: state.catsData.filter(
          (catData) =>
            !newBanItems.includes(catData.breeds[0].name) &&
            !newBanItems.includes(catData.breeds[0].origin),
        ),
      };

    case "getNewCat":
      let randomNum = Math.floor(Math.random() * state.workingCatsData.length);
      return {
        ...state,
        currentCat: state.workingCatsData[randomNum],
        prevCatList: [state.workingCatsData[randomNum], ...state.prevCatList],
      };
    default:
      return {
        ...state,
      };
  }
}
