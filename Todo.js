export default class Todo
{
    #text;
    #index;
    pElem;
    textElem;
    OkElem;
    deleteElem;
    #ready;

    constructor(text, pElem, index, ready)
    {
        this.pElem = pElem;
        this.#text = text;
        this.#index = index;
        this.#ready = ready;
        /* console.log(this.pElem); */
        this.view();

        this.textElem = document.querySelector(".text:last-child");
        this.OkElem = this.textElem.querySelector(".ready");
        this.deleteElem = this.textElem.querySelector(".delete:last-child")

        this.OkEventListener();
        this.remEventListener();
    };

    OkEventListener()
    {
        this.OkElem.addEventListener("click",(event)=>{
            console.log("OK: ", event.target)
            this.textElem.classList.add("highlight");
            window.dispatchEvent(new CustomEvent("highlight", {detail: this.#index}));
        });

    };

    remEventListener()
    {
        this.deleteElem.addEventListener("click",()=>{
            console.log(this.#index)

            const e = new CustomEvent("remove", {detail: this.#index})
            window.dispatchEvent(e);
        })
    };

    view()
    {
        let html = `<p class="text ${this.#ready ? "highlight" : ""}">${this.#text}
                        <button class="ready">✔</button>
                        <button class="delete">❌</button>                    
                    </p>`;


        this.pElem.insertAdjacentHTML("beforeend", html);
    };

}