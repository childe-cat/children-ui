import { forEach } from "lodash-es";
import type {App} from "vue";
import * as components from "./components";
import 'bootstrap-icons/font/bootstrap-icons.css'

export const createCatUI = () =>{
    return {
        install:(app:App)=>{
            forEach(components,(component)=>{
                app.component(component.name ?? '未命名', component);
            })
        }
    }
}

export {components};