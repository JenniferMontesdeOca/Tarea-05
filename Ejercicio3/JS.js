// Definimos una clase Usuario
class Usuario {
    constructor(id, nombre, apellido, email, direccion, dpi, estado = true) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.dpi = dpi;
        this.estado = estado;
    }

    // Método para mostrar información del usuario
    mostrarInformacion() {
        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`DPI: ${this.dpi}`);
        console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle}, No. ${this.direccion.numero}`);
        console.log(`Estado: ${this.estado}`);
    }

    // Método para recuperar la clave
    recuperarClave() {
        console.log(`Recuperar clave para ${this.email}...`);
    }

    // Método para cambiar la dirección
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`La dirección ha sido cambiada para ${this.nombre} ${this.apellido}.`);
    }
}

// Arrays con los datos de los usuarios
const nombres = ['Paola', 'Paolo', 'Ana', 'Luis', 'Maria', 'Carlos'];
const apellidos = ['Ortiz', 'Ortega', 'Perez', 'Garcia', 'Lopez', 'Hernandez'];
const emails = ['paola@company.ru', 'paolo@company.ru', 'ana@company.ru', 'luis@company.ru', 'maria@company.ru', 'carlos@company.ru'];
const dpis = ['1234567890101', '1234567890102', '1234567890103', '1234567890104', '1234567890105', '1234567890106'];
const direcciones = [
    { municipio: 'Jocotenango', calle: 'Calle ancha', numero: 25 },
    { municipio: 'Antigua Guatemala', calle: 'Calle del Arco', numero: 12 },
    { municipio: 'Guatemala City', calle: 'Avenida Reforma', numero: 45 },
    { municipio: 'Mixco', calle: 'Boulevard El Naranjo', numero: 102 },
    { municipio: 'Quetzaltenango', calle: '12 Avenida', numero: 33 },
    { municipio: 'Escuintla', calle: 'Calle Real', numero: 18 },
];

// Array para almacenar los objetos de usuario
const usuarios = [];

// Crear usuarios usando un ciclo for
for (let i = 0; i < nombres.length; i++) {
    const usuario = new Usuario(i + 1, nombres[i], apellidos[i], emails[i], direcciones[i], dpis[i]);
    usuarios.push(usuario);
}

// Agregar propiedades dinámicas y métodos a cada usuario y mostrar la información en la consola
for (const usuario of usuarios) {
    usuario.recuperarClave = function() {
        console.log(`Recuperar clave para ${this.email}...`);
    };

    usuario.cambiarDireccion = function(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`La dirección ha sido cambiada para ${this.nombre} ${this.apellido}.`);
    };

    usuario.leerPropiedad_name = function() {
        console.log('Leyendo la propiedad nombre:', this.nombre);
    };

    // Mostrar información antes de cambiar la dirección
    usuario.mostrarInformacion();
    usuario.recuperarClave();
    usuario.leerPropiedad_name();

    // Cambiar dirección
    usuario.cambiarDireccion({
        municipio: 'Nueva Direccion',
        calle: 'Nueva Calle',
        numero: 123
    });

    // Mostrar información después de cambiar la dirección
    usuario.mostrarInformacion();
    console.log('---');
}
