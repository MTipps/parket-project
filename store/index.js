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

export const getters = {
  getBearerToken(state) {
    return state.bearerToken
  },
  getBuildings(state) {
    return state.buildings
  },
  getParkingBays(state) {
    return state.parkingBays
  },
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    console.log('NUXT SERVER INIT')
    // await dispatch('getBearerToken')
    await this.$axios
      .$post('token/', {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      })
      .then((response) => {
        console.log(response)
        commit('setBearerToken', response)
      })
      .catch((err) => console.log('Error retrieving bearer token: ' + err))
  },
  getBuildings({ commit }) {
    console.log('GET BUILDINGS STORE')
    console.log(this.$axios)
    this.$axios
      .$get('buildinglist/')
      .then((results) => {
        commit('setBuildings', results)
      })
      .catch((err) => console.log('Error retrieving buildings: ' + err))
  },
}
