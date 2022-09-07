import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// PrimeVue Setup

import PrimeVue from "primevue/config";

// Add Theme and Styles
import 'primevue/resources/themes/md-light-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Add PrimeFlex
import 'primeflex/primeflex.css';

// Add Components
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";


createApp(App)
    .use(PrimeVue)
    .component('pv-input-text', InputText)
    .component('pv-split-button', SplitButton)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-button', Button)
    .component('pv-input-switch', InputSwitch)
    .component('pv-input-mask', InputMask)
    .component('pv-input-number', InputNumber)
    .component('pv-calendar', Calendar)
    .mount('#app');

