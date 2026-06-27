import PrevCatList from "../components/PrevCatList"

export const reducerActions = {
  GET_DATA: "getData",
  ADD_TO_BAN_LIST: "addToBanList",
  REMOVE_BAN_ITEM: "removeBanItem",
  GET_NEW_CAT: "getNewCat"
}

export const initialState = {
  catsData: [],
  workingCatsData: [],
  currentCat: null,
  prevCatList: [],
  banList: [],
}

export function reducer(state, action) {
  switch(action.type) {
    case "getData":
      const apiData = action.payload.data;
      let randomIndex = Math.floor(Math.random() * apiData.length);
      return ({
        ...state,
        catsData: [...apiData],
        workingCatsData: [...apiData],
        currentCat: apiData[randomIndex]
      })

    case "addToBanList":
      const newBanList = !state.banList.includes(action.payload.name) ? 
        [action.payload.name, ...state.banList] : 
        state.banList 
      return ({
        ...state,
        banList: [...newBanList],
        workingCatsData: state.workingCatsData.
          filter(catData => !newBanList.includes(catData.breeds[0][action.payload.type])),
      })

    case "remove_ban_item": 
      return ({
        ...state
      })
    case "getNewCat":
      let randomNum = Math.floor(Math.random() * state.workingCatsData.length);
    return ({
      ...state,
      prevCatList: [state.currentCat, ...state.prevCatList],
      currentCat: state.workingCatsData[randomNum]
    })

  }
}