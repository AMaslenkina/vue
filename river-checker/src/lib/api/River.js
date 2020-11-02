import axios from 'axios'
export default class Reg {
  constructor () {
    this._http = axios
    this._apiUrl = 'https://api.openweathermap.org'
  }
  getData (city) {
    let route = `${this._apiUrl}/data/2.5/weather`
    return this._http.get(`${route}`, {
      params: {
        q: `${city}`,
        APPID: 'c6bea9ba40d6e5f2f892cab0b71dd688'
      }
    })
  }
}
