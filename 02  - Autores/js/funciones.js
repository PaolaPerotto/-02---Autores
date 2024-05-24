class CAutores{
    constructor(name,lastname,nacionality,best,publishyear,publishage){
        this.nombre = name,
        this.apellido = lastname,
        this.nacionalidad = nacionality,
        this.mejorObra = best,
        this.añoPublicacion = publishyear,
        this.edadPublicacion = publishage
    }

    getNombre() {
        return this.nombre
    }

    getApellido() {
        return this.apellido
    }

    getNacionalidad(){
        return this.nacionalidad
    }

    getMejorObra(){
        return this.mejorObra
    }
    
    getPublishYear() {
        return this.añoPublicacion
    }

    getPublishAge() {
        return this.edadPublicacion
    }

    ListaNacionalidad(array, nac){
        let lista = new Array(0)
    
        array.forEach(element => {
            if(element.getNacionalidad() == nac) lista.push(element)
        });
    
        return lista
    }

    PublicadoEntre(array, x, y){
        let lista = new Array(0)
    
        array.forEach(element => {
            if(element.getPublishYear() >= x && element.getPublishYear() <= y) lista.push(element)
        });
    
        return lista
    }

    PromedioEdad(array){
        let suma = 0
    
        array.forEach(element => {
            suma += element.getPublishAge()
        });
    
        return suma/array.length
    }
    
    MostrarTabla(array){
        let cont ="<table><th id='TableTitle'>Autores</th>"
        
        cont += "<tr><th>Nombre</th><th>Apellido</th><th>Nacionalidad</th><th>Mejor Obra</th><th>Año de Publicacion</th><th>Edad en Publicacion</th></tr>"
    
        array.forEach(element => {
            cont += "<tr><td>"+element.getNombre()+"</td><td>"+element.getApellido()+"</td><td>"+element.getNacionalidad()+"</td><td>"+element.getMejorObra()+"</td><td>"+element.getPublishYear()+"</td><td>"+element.getPublishAge()+"</td></tr>"
        });
    
        cont+="</table>"
    
        document.write(cont)
    }
}

function autoresArgentinos(Autores){
    let listaArgentina = Autores[0].ListaNacionalidad(Autores,"Argentino")
    let cont = "<ul>Lista autores Argentinos"
    listaArgentina.forEach(element => {
        cont += "<li>"+element.getNombre()+" "+element.getApellido()+"</li>"
    });
    cont += "</ul>"

    document.write(cont)
}

function publi(Autores){
    let cont = "<ul>Publicaciones entre 1960 y 1980"
    let listaAño = Autores[0].PublicadoEntre(Autores, 1960, 1980)
    listaAño.forEach(element => {
        cont += "<li>"+element.getNombre()+" "+element.getApellido()+"</li>"
    });
    cont += "</ul>"
    document.write(cont)
}

let Autores = new Array(0)

Autores.push(new CAutores("Gabriel","Garcia Marquez", "Colombiano", "Cien años de soledad", 1967, 40))
Autores.push(new CAutores("Julio","Cortazar", "Argentino", "Rayuela", 1963, 48))
Autores.push(new CAutores("Isabel","Allende", "Chilena", "La casa de los espiritus", 1982, 40))
Autores.push(new CAutores("Jorge Luis","Borges", "Argentino", "Ficciones", 1944, 45))
Autores.push(new CAutores("Clarice","Lispector", "Brasileña", "La hoja de la estrella", 1977, 56))
Autores.push(new CAutores("Juan","Rulfo", "Mexicano", "Pedro Paramo", 1955, 38))
Autores.push(new CAutores("Carlos","Fuentes", "Mexicano", "La region mas transparente", 1958, 29))
Autores.push(new CAutores("Eduardo","Galeano", "Uruguayo", "Las venas abiertas de America Latina", 1971, 31))


autoresArgentinos(Autores)

publi(Autores)

let cont = "<p> Promedio de la Edad de Publicacion: " + Autores[0].PromedioEdad(Autores) + "</p><br>" 
document.write(cont)

Autores[0].MostrarTabla(Autores)