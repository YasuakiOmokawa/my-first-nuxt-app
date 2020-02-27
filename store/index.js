import Vuex from "vuex";

export default () => (new Vuex.Store({
  state: {
    items: [],
    users: {},
    userItems: {}
  },
  getters: {
    items: (state) => state.items,
    users: (state) => state.users,
    userItems: (state) => state.userItems,
  },
  mutations: {
    setItems (state, {items}) {
      state.items = items
    },
    setUser (state, {user}) {
      state.user[user.id] = user
    },
    setUserItems (state, {items}) {
      state.userItems = items
    },


  }
  )))
