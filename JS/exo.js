const ul = document.querySelector("#list");
const input = document.querySelector("#taches");
const btn = document.querySelector("#btn");

btn.addEventListener("click", add);
suprimer()

function add() {
    const item = document.createElement("li");
    const supprime = document.createElement("button");
    supprime.textContent = "supprimer";
    const text = input.value;
    item.textContent = text
    ul.appendChild(item);
    item.appendChild(supprime);
    supprime.classList.add("sup");
    input.value = "";
    input.focus()
    suprimer()
}

function suprimer() {
    const del = document.querySelectorAll(".sup");
    del.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
        
        })
    })
}
