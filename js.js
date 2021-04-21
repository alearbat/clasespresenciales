function consultar() {
  let respuesta = Math.random();
  console.log(respuesta);
  if (respuesta * 10 < 4 ) {
    document.getElementById("respuesta").innerHTML = "SI! Pero no te ilusiones!";
  } else if (respuesta * 10 > 7) {
    document.getElementById("respuesta").innerHTML = "Volve a consultar a las 4:00am";
  } else {
    document.getElementById("respuesta").innerHTML = "NO... seguí participando!";
  }
}
