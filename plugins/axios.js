export default function ({ $axios, store }) {
  $axios.setBaseURL('https://www.parket.co.za/api/')

  const token = store.state.bearerToken
  $axios.setToken(token.access, 'Bearer')
}
