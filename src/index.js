import { forEach } from "lodash-es";
import * as components from "./components";
import 'bootstrap-icons/font/bootstrap-icons.css';
export const ChildrenUI = () => {
    return {
        install: (app) => {
            forEach(components, (component) => {
                var _a;
                app.component((_a = component.name) !== null && _a !== void 0 ? _a : '未命名', component);
            });
        }
    };
};
export { components };
