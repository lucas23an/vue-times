import Vue from 'vue'
import { Time } from './time'

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("America MG", require('./assets/america_mg_60x60.png')),
      new Time("Atletico PR", require('./assets/atletico-pr_60x60.png')),
    ],
    novoJogo: {
      casa: {
          time: null,
          gols: 0
      },
      fora: {
          time: null,
          gols: 0
      },
    }
  }
})
