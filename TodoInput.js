export default class TodoInput
{
    pElem;
    inputElem;
    buttonElem;

    constructor(pElem)
    {
        this.pElem = pElem;
        this.view();
        
        this.inputElem = document.querySelector(".textinput");
        this.buttonElem = document.querySelector(".add");      
        this.add();
    }


    view()
    {
        let html = `<div class="inputfield">
                        <input class="textinput" type="text" placeholder="Tevékenység..">
                        <p><button class="add">➕</button></p>
                    </div>`;

        this.pElem.insertAdjacentHTML("beforeend", html);
    }

    add()
    {
        this.buttonElem.addEventListener("click", ()=>{
            console.log(this.inputElem.value)
        
            window.dispatchEvent(new CustomEvent("add", {detail:this.inputElem.value}));
        });
        
    }

    
}