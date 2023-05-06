import * as components from "./components"

import "./styles/stylebase.scss"

export default {
    install(app) {
        for (const component in components) {
            app.component(component.name, components[component])
        }
    }
}