// dbdiscos: para guardar los dbdiscos//



const dbDiscos = [{
    nombre : 'Megadeto',
    autor: 'Los artistas Anonimos',
    codigo: 1,
    Pistas:[
        {
            nombre:'Una vaina loca',
            duracion:200
        }
    ]
},
{
nombre: 'Rock',
autor: 'Los artistas de siempre',
codigo: 1,
Pistas: [
	{
	nombre: 'Mi primer tema',
	duracion:200
	}
	]
},
{
Nombre: 'Nomecle',
Autor: 'Los Anónimos',
Codigo: 2,
Pistas: [
    {
        nombre:'Bajo presion',
        Duración: 240,
    }
    ]
},

];



//
let disco = {
    pistas : []
};

let pista = {};



// Funcion Cargar//


function validarNombre (nombre) {
    if(nombre == null){
        return true;
    } 
    return false;
};


    
function validadCodigo (codigo) {
  if(codigo < 1 || codigo > 999){
    return true;
  }
  return false;
};




function cargarDisco() {
    let nombre, cargar;
    let codigo;
    do {
        nombre = prompt("Ingrese el nombre del disco");
    } while (validarNombre(nombre));
    do {


        cargar = prompt("Ingrese el nombre del autor o banda");
    } while (validarNombre(cargar));

    do {

        codigo = prompt("Ingrese Codigo");
    } while (validadCodigo(codigo));

    disco.nombre = nombre;
    disco.cargar = cargar;
    disco.codigo = codigo;
    let text = "";
    let sigue = false;

    do {
        cargarDisco();
        res = prompt("Desea Continuar:");
        res = res.toLowercase();
        if (res === "s"){
            sigue = true;
        } else if(res === "n"){
            sigue = false;
        }
    }while (sigue);
  

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

     MostrarInfo(html);
 }

// Ejecutar la "funcion MostrarInfo"//



