"use strict";

function CreaIndice(ini = 0)
{
	var OL= document.getElementById("indice");

	// Elenco di h3
	const h3= document.querySelectorAll("h3"); //console.log(h3);

	for(var i= 0; i < h3.length; i++) { // Usa solo gli h3 con ID
		if(h3[i].id !== '') { //console.log(i + ' ' + h3[i].id);

			// Crea il link
			var a= document.createElement('a');
			a.href= '#' +  h3[i].id;
//			a.innerText= h3[i].innerText.substring(ini); // pagina TBT: toglie il numero d'ordine, parentesi e spazio
			a.innerHTML= h3[i].innerHTML.substring(ini) + '<br>';

			if(0) {
				// Crea <li>
				var li= document.createElement('li');
				li.appendChild(a);
				OL.appendChild(li);
			} else {
				OL.appendChild(a);
			}
			
		}
	}
}