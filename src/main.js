import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"
import { registerLicense } from "@syncfusion/ej2-base";
import { DateRangePickerPlugin, DatePickerPlugin, DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

// Register Syncfusion license
registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX1ecXZXQ2hYUERwX0Y="
);

// Create Vue app and use plugins
createApp(App)
    .use(router)
    .use(DateRangePickerPlugin)
    .use(DatePickerPlugin)
    .use(DateTimePickerPlugin)
    .mount('#app')
