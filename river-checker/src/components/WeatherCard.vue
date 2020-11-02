<template>
    <div class="card">

      <div>Temperature: {{Math.ceil(temp-273)}} °C</div>
      <div>Temp feels like: {{Math.ceil(feels_like-273)}} °C</div>
      <div>{{main}}</div>
      <img :src="`http://openweathermap.org/img/wn/${icon}@2x.png`" alt="pict not found">
    </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    icon: null,
    name: null,
    main: null,
    feels_like: null,
    temp: null
  }
}
</script>

<style scoped>
  .card{
    border-radius: 15px;
    background: rgba(200,200,200,0.5);
    color: #074990;
    font-weight: bold;
    width: 250px;
    margin: 20px;
    height: 170px;
    padding: 5px;
    display: inline-block;
    transition: .3s;
  }
  :hover.card {
    transform: scale(1.1, 1.1);
  }
</style>
