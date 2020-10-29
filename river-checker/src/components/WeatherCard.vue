<template>
    <div class="card">

      <div>Температура: {{Math.ceil(temp-273)}}</div>
      <div>Ощущается: {{Math.ceil(feels_like-273)}}</div>

    </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    timezone: null,
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
    color: #060d98;
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
