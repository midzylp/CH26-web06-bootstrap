function calcularDia() {
    const dia = Number(document.getElementById("diadado").value);
    const mes = Number(document.getElementById("mesdado").value);
    const año = Number(document.getElementById("añodado").value);
    const fecha = new Date(año, mes-1, dia);
    let diaDeLaSemana;
    switch (fecha.getDay()) {
      case 0:
        diaDeLaSemana = "Domingo";
        break;
      case 1:
        diaDeLaSemana = "Lunes";
        break;
      case 2:
        diaDeLaSemana = "Martes";
        break;
      case 3:
        diaDeLaSemana = "Miércoles";
        break;
      case 4:
        diaDeLaSemana = "Jueves";
        break;
      case 5:
        diaDeLaSemana = "Viernes";
        break;
      case 6:
        diaDeLaSemana = "Sábado";
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
  