const btn = document.querySelector("#boutonValider");
const resultDiv = document.querySelector("#resultat")

btn.addEventListener("click", (event) => {
////Catcher les erreurs possibles pour afficher l'erreur dans resultDiv
  try {const nombre1 = nombreValide (document.querySelector("#nombre1").value);
  const nombre2 = nombreValide (document.querySelector("#nombre2").value);
  const operation = operationValide (document.querySelector("#operation").value, nombre2);
  const resultat = calculer(nombre1, nombre2, operation);
  resultDiv.textContent = resultat;
}
catch (error) { resultDiv.textContent = error.message;
}
})

function nombreValide (nombre) {
  //verifier que nombre est bien un nombre sinon erreur
    nombre = parseFloat(nombre);
    if (isNaN(nombre)) {
      throw new Error('Veuillez écrire des nombres');
    }
    return nombre;
  }

function operationValide (operation, nombre2) {
  // si l'opération est / , verifier que nombre 2 n'est pas 0 sinon erreur
  if (operation === "/" && nombre2 === 0) {
    throw new Error('Impossible de diviser par 0');
  }
  // verifier que l'opération est bien + - * / sinon erreur
  else if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
  throw new Error('Veuillez choisir une opération valide');
  }
}

function calculer (nombre1, nombre2, operation) {
  switch (operation) {
    case "+" :
      return nombre1 + nombre2;
    case "-" :
      return nombre1 - nombre2;
    case "*" :
      return nombre1 * nombre2;
    case "/" :
      return nombre1 / nombre2;
  }
}