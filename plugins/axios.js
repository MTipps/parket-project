export default function ({ $axios, store }) {
  $axios.setBaseURL('https://www.parket.co.za/api/')

  const token = store.state.bearerToken
  console.log('PLUGIN TOKEN')
  console.log(token)
  $axios.setToken(token.access, 'Bearer')
}
