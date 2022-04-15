import { createApp } from 'vue'
import App from './App.vue'
import VueNumerals from 'vue-numerals';


//collapse
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import './css/custom.css'

const app = createApp(App);


app.use(VueNumerals); 
app.use(VueCollapsiblePanel)

app.mount('#app')

