import {MutationTree} from 'vuex';

interface State {
  viewedList: object[] | never[];
  testList: object[] | never[];
}

export const state = () => ({
  viewedList: [],
  testList: [],
})

export const mutations: MutationTree<State> = {
  getViewedList(state: State) {
    const savedList = sessionStorage.getItem('viewedList');
    state.viewedList = savedList ? JSON.parse(savedList) : [];
  },
  setViewedList(state: State, drink: object) {
    const newList = [...new Set([drink, ...state.viewedList])]
    sessionStorage.setItem('viewedList', JSON.stringify(newList))
    state.viewedList = newList;
  },
  setTestList(state: State, list: object[]) {
    state.testList = list;
  }
}