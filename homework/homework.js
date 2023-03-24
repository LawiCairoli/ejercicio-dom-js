// Obtener la referencia de todos los divs en una constante llamada "divs".
//Escriba aquí su código:
  const divs = document.querySelectorAll("div");
  for(let i = 0, i < divs.length; i++) {
    const box = divs[i];
    box.innerText = "box " + box.innerText;
    if (i == 0){
      box.style.backgroundColor = "red";
    }else if (i == 1){
      box.style.backgroundColor = "green";
    }else {
      box.style.backgroundColor = "blue";
    }
  }

/*
Al obtener la referencia de los divs, usted podrá iterar estos mismos contenedores con métodos de javascript, cómo while o for.
*/

//Paso 1: recorra todos los divs del document.
//Paso 2: En cada iteración usted tendrá que agregarle el texto "box" a cada una de las cajas, dejando como resultado "box 1", "box 2" y "box 3"
//Pista: repasar la propiedad innerText
//Paso 3: Con la propiedad "style" pintar cada uno de las cajas de un color: box 1 en rojo, box 2 en verde, y box 3 en azul.
// Usted podría seleccionar cada elemento div, pero no tendría sentido si ya tenemos la referencia divs, aprovechar la iteración y realizar condicionales para obtener el resultado.
//Escriba aquí su código:



