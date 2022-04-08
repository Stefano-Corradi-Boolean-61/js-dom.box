

// <div class="box">x</div>

// salvo il container in una const
const container = document.querySelector('.container');
console.log(container);

// stabilisco il numero di iterazioni
const limit = 1000;

// effettuo il cliclo in base a quante sono le iterazioni
for(let i = 0; i < limit; i++){

 // creo l'elemento da aggiungere
 const boxEl = document.createElement('div');
 // gli scrivo la classe
 boxEl.className = 'box';
 // aggiungo il contenuto
 boxEl.append(i);

 console.log(boxEl);
 // lo aggiungo al contenitore
 container.append(boxEl);

}