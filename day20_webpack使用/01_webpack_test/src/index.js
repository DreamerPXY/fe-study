import $ from 'jquery'
import '../css/index.css'

import App from '../components/App.vue'
$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})