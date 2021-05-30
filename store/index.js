export const state = () => ({
  bearerToken: [],
  buildings: [],
  parkingBays: [],
})

export const mutations = {
  setBearerToken(state, bearerToken) {
    state.bearerToken = bearerToken
  },
  setBuildings(state, buildings) {
    state.buildings = buildings
  },
  setParkingBays(state, parkingBays) {
    state.parkingBays = parkingBays
  },
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    await this.$axios
      .$post('token/', {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      })
      .then((response) => {
        commit('setBearerToken', response)
      })
      .catch((err) => console.log('Error retrieving bearer token: ' + err))
  },
  getBuildings({ commit }) {
    this.$axios
      .$get('buildinglist/')
      .then((results) => {
        commit('setBuildings', results)
      })
      .catch((err) => console.log('Error retrieving buildings: ' + err))
  },
  getParkingBays({ commit }, payload) {
    this.$axios
      .$get('baylist/?building=' + payload.slug)
      .then((results) => {
        commit('setParkingBays', results)
      })
      .catch((err) => console.log('Error retrieving parking bays: ' + err))
  },
}
