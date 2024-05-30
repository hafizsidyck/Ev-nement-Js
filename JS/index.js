//

function recupererTaches() {
  let taches = JSON.parse(localStorage.getItem("taches")) || [];
  return taches;
}
let tabs = recupererTaches();
for (let taches of tabs) {
  console.log(taches);
}
function afficherTaches() {       //methode pour afficher un element
  const tasks = recupererTaches(); //tasks.forEach(task => console.log(task))
  console.log(tasks);              //tasks.map(task => console.log(task))
  for (let task of tasks) {
    console.log(task);
    let li = document.createElement("li");
    let btn = document.createElement('button')
    btn.textContent = 'supprimer'
    li.textContent = task;
    li.appendChild(btn)
    btn.addEventListener('click', function() {
        supprimer(task)
        
    })
    listeTaches.appendChild(li);
  }
}
function ajouterTask() {
    let tasks = recupererTaches()
    tasks.push(nouvelleTache.value)
    localStorage.setItem('taches', JSON.stringify(ta))
    
}