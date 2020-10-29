<template>
  <div>
    <h1>{{weather.name}}</h1>
    <Weather
            :timezone="weather.timezone"
            :name="weather.name"
            :temp="weather.temp"
            :feels_like="weather.feels_like"
            :main="weather.main">
    </Weather>
  </div>
</template>

<script>
import Reg from '../lib/api/River'
import Weather from './WeatherCard'
export default {
  name: 'Main',
  components: {
    Weather
  },
  data () {
    return {
      regApi: new Reg(),
      weatherMass: [],
      weather: {
        timezone: null,
        name: null,
        temp: null,
        feels_like: null,
        main: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(1).then(data => {
        /* this.weather.country = data.data.city.country
        this.weather.name = data.data.city.name
        this.weather.temp = data.data.city.temp
        this.weather.sunrise = data.data.city.sunrise
        this.weather.main = data.data.city.main
        console.log(this.weatherMass) */
        console.log(data.data.name)
        this.weather.name = data.data.name
        this.weather.main = data.data.weather.main
        this.weather.temp = data.data.main.temp
        this.weather.feels_like = data.data.main.feels_like
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>

h1{
  color: #d2511e;
}
h3{
  color: coral;
}
span{
  color: #154088;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:link {
  color: #497DDD;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:visited {
  color: #2656e5;
}
a:hover {
  color: #154088;
  border-bottom: .07em solid;
}
a:active {
  color: #2656e5;
  border-bottom: 1px dashed;
}
</style>
