let task = document.getElementById("task");
let Add = document.querySelector("#Add");
let liste = document.getElementById("liste");
let form = document.getElementById('form')

Add.addEventListener("click", ajouterTache); // displayText
let array = JSON.parse(localStorage.getItem("data")) || [];
console.log(array);

function displayText() {
  liste.innerHTML = ""; //pour vider le ul
  for (let item of array) {
    let li = document.createElement("li");
    //li.textContent = task.value
    li.textContent = item;
    let btn = document.createElement("button");
    btn.textContent = "supprimer";
    li.appendChild(btn);
    liste.appendChild(li);
    btn.addEventListener('click', function () {
        let indice = array.indexOf(item)
        console.log(indice);
        array.splice(indice,1)
        localStorage.setItem('data', JSON.stringify(array))
        displayText()
        
    })
  }
  // array.push(task.value)
  // task.focus()
  // task.value = ""; //pour vider le cache li
  // localStorage.setItem('data', JSON.stringify(array))
}

function ajouterTache() {
  if (array.find((el) => el === task.value) || task.value === "") {
    alert(`la valeur de ${task.value} existe deja ou la tache est vide`);
    task.focus();
  } else {
    array.push(task.value);
    localStorage.setItem("data", JSON.stringify(array));
    task.focus();
    task.value = "";
    displayText();
  }
}

displayText();
//form.addEventListener('submit',)

// let array = [1, 2, 4, 6, 77, 33, 9, 90]
// console.log(array.length);

// array.push(10) //ajouter un element
// console.log(array);

// //chercher un element

// array.find(element => element === 4)

// if (array.find(element => element === 4)) {
//     console.log("element trouvé");

// } else {
//     console.log("element non trouvé");
// }

// //récupérer l'index d'un element

// //console.log(array.indexOf(4));
// let index = array.indexOf(4)

// //supprimer un element

// //array.splice(index)
// //console.log(array);

// for (let i of array) {
//     console.log(i);
// }
// for (let i=0; i< array.length; i++) {
//     console.log(i);
//


let tab1 = ["pomme", "goyave", "citron", "ananas"]
let tab2 = ["tomate", "obergine", "menthe", "haricot"]
let tab3 = tab1.concat(tab2)
console.log(tab3);
tab1.forEach(item => {
    console.log(item);
})
let tab4 = tab1.filter(item => item.length === 6)
console.log(tab4);

let person = {
    nom: "Jean",
    age: 33,
    notes: [12, 14, 20],
    address: {
        ville: 'Pau',
        codepostale: 64000,
        rue: 'jean mermoz'
    }
}
console.log(person.nom);
console.log(person["nom"]);
console.log(person.address.ville);

person.notes.forEach(e => console.log(e));