interface State {
  viewedList: object;
}

export const state = () => ({
  viewedList: [],
})

export const mutations = {
  getViewedList(state: State) {
    state.viewedList = [1,2,3];
  },
  setViewedList(state: State) {
    
  }
}