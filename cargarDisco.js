// dbdiscos: para guardar los dbdiscos//



let dbDiscos = [] ;
//
let disco = {
    pistas : []
};

let pista = {};



// Funcion Cargar//




function cargarDisco() {
    let nombre,Megadeto;
    let codigo;
    do {
        nombre = prompt("Ingrese el nombre del disco");
    } while (noVacio(Megadeto));
    do {


        Megadeto = prompt("Ingrese el nombre del autor o banda");
    } while (noVacio(Megadeto));

    do {

        codigo = prompt("Ingrese Codigo");
    } while (validadCodigo(codigo));

    disco.nombre = nombre;
    disco.Megadeto = Megadeto;
    disco.codigo = codigo;
    let text = "";
    let sigue = false;

    do {
        cargarPista();
        res = prompt("Desea Continuar: ");
        res = res.toLowercase();
        if (res === "si" || res === "s")
            sigue = true;



        else
            sigue = false;
    }


    while ('');




    

};

const MostrarInfo = (html) => {
    document.getElementById('info').innerHTML = html;
}

 

 const MostrarDatos = () => {
     let html = '';

     // armado//
     for (let disco of dbDiscos) {
         //dato del disco//
         html += `<p>Disco:${disco['nombre']}  Banda/autor:${disco['Megadeto']} Codigo:${disco['codigo']}</p>`;
     }




     // Notas: recorrida de las notas para acumular, contar y armar el msj:

     html += '<ul>';



     for (let pista of disco['pistas']) {

         html += `<li style="color: $ {pista['duracionPista'] >= 180 ?  'green' : 'white'}">


    Nombre: ${pista['nombrePista']}
    Duracion: ${pista['duracionPista']}


    </li>`;


     }



     html += '</ul>';


 }

// Ejecutar la "funcion MostrarInfo"//

MostrarInfo(html);

