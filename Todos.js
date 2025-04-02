import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";

export default class Todos
{

    #list = [];
    #pElem;
    #iPElem;

    constructor(pElem, iPElem, list)
    {
        this.#pElem = pElem;
        this.#iPElem = iPElem;
        this.#list = list;
        
        this.viewInput();

        this.viewTodos();

        this.removeEvent();
        this.addEvent();
        this.highlightEvent();

    }

    viewTodos()
    {
        for (let index = 0; index < this.#list.length; index++) 
        {
            if(this.#list[index].visible)
            {
                new Todo(this.#list[index].name, this.#pElem, index, this.#list[index].ready);
            }
        }
    }

    viewInput()
    {
        new TodoInput(this.#iPElem);
    }

    removeEvent()
    {
        window.addEventListener("remove", (event)=>{
            
            this.#pElem.innerHTML = "";

            console.log("REMOVE");

            this.#list[event.detail].visible = false;
            this.viewTodos();

        });

    }

    addEvent()
    {
        window.addEventListener("add", (event)=>{
/*             console.log("ADD lista: ");
            console.log(event.detail) */
            let tempname = this.#list.length+1 + `. ` + event.detail;
            this.#list.push({name: tempname, visible: true})
            this.#pElem.innerHTML = "";
            this.viewTodos();
        });
        
    }

    highlightEvent()
    {
        window.addEventListener("highlight", (event)=>{
            //console.log(event)
            this.#list[event.detail].ready = true;
            this.#pElem.innerHTML = "";
            this.viewTodos();
        });
        
    }
}