<template>
  <div>
    <h1 class="display-5"><b>{{weather.name}}</b>
    <img :src="`https://www.countryflags.io/${weather.country}/flat/48.png`" alt="pict not found"></h1>
    <Weather
            :icon="weather.icon"
            :name="weather.name"
            :temp="weather.temp"
            :feels_like="weather.feels_like"
            :main="weather.main"
            :country="weather.country">
    </Weather>
    <b-col md="6" offset-md="3">
    <b-form-input v-model="city" placeholder="Enter the city name"></b-form-input>
    </b-col>
    <br>
    <b-button size="lg" pill variant="outline-dark" @click="getData">Enter</b-button>
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
      city: '',
      weather: {
        icon: null,
        name: null,
        temp: null,
        feels_like: null,
        main: null,
        country: null
      }
    }
  },

  methods: {
    getData: function () {
      this.regApi.getData(this.city).then(data => {
        console.log(data.data.name)
        this.weather.icon = data.data.weather[0].icon
        this.weather.name = data.data.name
        this.weather.main = data.data.weather[0].main
        this.weather.temp = data.data.main.temp
        this.weather.feels_like = data.data.main.feels_like
        this.weather.country = data.data.sys.country
      })
    }
  },
  created () {
    this.city = 'Gomel'
    this.getData(this.city)
  }
}
</script>

<style scoped>

h1{
  color: #ee7749;
  font-family: Chilanka;
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
