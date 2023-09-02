import * as components from "./components/indexhijo.js"
import data from "./data.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback() {
        this.render();}

    render(){
        data.forEach((characters) => {
            this.shadowRoot.innerHTML += `
            <my-characters name="${characters.name}" gender="${characters.gender}" species="${characters.species}" house="${characters.house}" alternate_names="${characters.alternate_names}" yearofbirth="${characters.yearOfBirth}"></my-characters>
            <my-button message="other-character"></my-button>`
        })
    }
}

customElements.define("app-container", AppContainer);