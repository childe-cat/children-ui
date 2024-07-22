import {createApp} from "vue";
import App from "./App.vue";
import {createCatUI} from "../index.ts";

createApp(App).use(createCatUI()).mount("#app");