<template>
  <div>
    <h1>{{weather.country}}</h1>
    <Weather
            :country="weather.country"
            :name="weather.name"
            :temp="weather.temp"
            :sunrise="weather.sunrise"
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
        country: null,
        name: null,
        temp: null,
        sunrise: null,
        main: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(1).then(data => {
        this.weather.country = data.data.city.country
        this.weather.name = data.data.city.name
        this.weather.temp = data.data.city.temp
        this.weather.sunrise = data.data.city.sunrise
        this.weather.main = data.data.city.main
        this.weatherMass = data.data.data
        console.log(this.weatherMass)
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
