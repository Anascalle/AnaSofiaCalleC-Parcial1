class Button extends HTMLElement{

    static get observedAttributes(){
        return["message"];
    }
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.onButtonClicked=this.onButtonClicked.bind(this);
    }
    onButtonClicked(){
        const currentValue=this.getAttribute("message");
        this.setAttribute("message","character");
    }
    connectedCallback(){
        this.mount();
    }
    mount(){
        this.render();
        this.addListeners();
    }
    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked);
    }
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.mount();

    }
    render(){
         this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="/Public/src/components/Button/Button.css">
        <section>
        <p>${this.message}</p>
        <button>Dar like</button> 
        </section>

        
        `
    }
}
customElements.define("my-button", Button);
export default Button;
