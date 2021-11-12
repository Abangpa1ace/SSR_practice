interface State {
  viewedList: object[] | never[];
}

export const state = () => ({
  viewedList: [],
})

export const mutations = {
  getViewedList(state: State) {
    const savedList = sessionStorage.getItem('viewedList');
    state.viewedList = savedList ? JSON.parse(savedList) : [];
  },
  setViewedList(state: State, drink: object) {
    const newList = [...new Set([drink, ...state.viewedList])]
    sessionStorage.setItem('viewedList', JSON.stringify(newList))
    state.viewedList = newList;
  }
}