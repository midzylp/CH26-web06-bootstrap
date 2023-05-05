function calcularDia() {
    const dia = Number(document.getElementById("diadado").value);
    const mes = Number(document.getElementById("mesdado").value);
    const año = Number(document.getElementById("añodado").value);
    const fecha = new Date(año, mes-1, dia);
    let diaDeLaSemana;
    switch (fecha.getDay()) {
      case 0:
        diaDeLaSemana = "Domingo, es fin de semana";
        break;
      case 1:
        diaDeLaSemana = "Lunes, es día laborable";
        break;
      case 2:
        diaDeLaSemana = "Martes, es día laborable";
        break;
      case 3:
        diaDeLaSemana = "Miércoles, día laborable";
        break;
      case 4:
        diaDeLaSemana = "Jueves, día laborable";
        break;
      case 5:
        diaDeLaSemana = "Viernes, día laborable";
        break;
      case 6:
        diaDeLaSemana = "Sábado, es fin de semana";
        break;
      default:
        diaDeLaSemana = "Error";
        break;
    }
    const getReference = getReferenceOfIdCambiar();
    getReference.innerHTML = (`El día de la semana correspondiente a la fecha ${dia}/${mes}/${año} es ${diaDeLaSemana}.`);
  }
  
  function getReferenceOfIdCambiar (){
    return document.getElementById("diaobjetivo");
  }
  