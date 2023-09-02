class Characters extends HTMLElement{

    static get observedAttributes(){
        return["name","species","gender","house","yearofbirth", "alternate_names"]
    }
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.render();

    }
    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="/Public/src/components/Character/Character.css">
        <section>
        <h1>${this.name}</h1>
        <p><strong>Species:${this.species}</strong></p>
        <p><strong>Gender:${this.gender}</strong></p>
        <p><strong>House:${this.house}</strong></p>
        <p><strong>Year of birth:${this.yearofbirth}</strong></p>
        <p><strong>Alternate names:${this.alternate_names}</strong></p>
        </section>
        `
    }
}
customElements.define("my-characters", Characters);
export default Characters;