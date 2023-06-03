function elegirHabitacion() {
  let mensaje = `Habitaciones
                 Seleccione la opcion:`;
  habitacion.forEach((el, index) => {
    mensaje += `
              ${index + 1}- ${el.nombre}  $${el.precio}
        `;
  });
  let eleccion = parseInt(prompt(mensaje));
  turismo.push(habitacion[eleccion - 1]);
}

function elegirServicio() {
  let mensaje = `Servicios
                 Seleccione la opcion:`;
  comida.forEach((el, index) => {
    mensaje += `
              ${index + 1}- ${el.nombre}  $${el.precio}
          `;
  });
  let eleccion = parseInt(prompt(mensaje));
  turismo.push(comida[eleccion - 1]);
}

function elegirExcursion() {
  let mensaje = `Excursiones
                Seleccione la opcion:`;
  excursion.forEach((el, index) => {
    mensaje += `
              ${index + 1}- ${el.nombre}  $${el.precio}
            `;
  });
  let eleccion = parseInt(prompt(mensaje));
  turismo.push(excursion[eleccion - 1]);
}

const mostrarReserva = () => {
  let mensaje = `Reserva: `;
  turismo.forEach((el, index) => {
    mensaje += `
                ${index + 1}- ${el.nombre}
          `;
  });

  let suma = 0;
  turismo.forEach((el) => {
    suma = suma + el.precio;
  });
  let totalReserva = `${mensaje}                      
            total a abonar es: $${suma}`;

  let opcionFinal = parseInt(
    prompt(`${totalReserva} 
                                    
        Quiere confirmar la reserva o volver a comenzar

        1 - Confirmar
        2 - Comenzar de nuevo

        `)
  );

  switch (opcionFinal) {
    case 1:
      alert("Su reserva fue confirmada, buen viaje!");
      break;
    case 2:
      turismo.splice(0, turismo.length);
      alert("Los datos han sido borrados");
      break;
    default:
      alert("La opcion ingresada es incorrecta");
      break;
  }
};

const turismo = [];

class productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hab1 = new productos("Habitacion para 1 persona", 10000);
const hab2 = new productos("Habitacion para 2 personas", 15000);
const desayuno = new productos("Desayuno", 5000);
const almuerzo = new productos("Almuerzo", 5000);
const cena = new productos("Cena", 5000);
const viaje1 = new productos("Glaciar Perito Moreno", 30000);
const viaje2 = new productos("El Chalten", 35000);

const habitacion = [hab1, hab2];
const comida = [desayuno, almuerzo, cena];
const excursion = [viaje1, viaje2];

let opcionPrincipal = 0;

const huesped = prompt(
  "Bienvenido a Turismo El Calafate \n  Ingrese su nombre para comenzar"
);

if (huesped === "") {
  alert("No ha ingresado ningun nombre");
  const huesped = prompt(
    "Bienvenido a El Calafate hotel\n  Ingrese su nombre para comenzar"
  );
} else if (huesped !== "") {
  opcionPrincipal = parseInt(
    prompt(
      "Hola! " +
        huesped + // no muestra el nombre?
        "\nElija una copcion para continuar\n 1 - Tipo de Habitacion\n 2 - Servicios\n 3 - Excursiones\n 4 - Mostrar reserva\n 5 - Salir de la reserva"
    )
  );
}

while (opcionPrincipal !== 5) {
  switch (opcionPrincipal) {
    case 1:
      elegirHabitacion();
      break;
    case 2:
      elegirServicio();
      break;
    case 3:
      elegirExcursion();
      break;
    case 4:
      mostrarReserva();
      break;
    default:
      alert("La opcion ingresada es incorrecta");
      break;
  }
  opcionPrincipal = parseInt(
    prompt(
      "Hola! " +
        huesped +
        "\nElija una copcion para continuar\n 1 - Elegir tipo de Habitacion\n 2 - Elegir servicios\n 3 - Elegir Excursion\n 4 - Mostrar reserva\n 5 - Salir de la reserva"
    )
  );

  if (opcionPrincipal == 5) {
    alert("Gracias, lo esperamos el proximo año");
  }
}
