// Definimos una clase Usuario
class Usuario {
    constructor(nombre, apellido, email, direccion, estado = true) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.estado = estado;
    }

    // Método para mostrar información del usuario
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle}, No. ${this.direccion.numero}`);
        console.log(`Estado: ${this.estado}`);
    }

    // Método para recuperar la clave
    recuperarClave() {
        console.log(`Recuperar clave para ${this.email}...`);
    }
}

// Arrays con los datos de los usuarios
const nombres = ['Paola', 'Paolo', 'Ana', 'Luis', 'Maria', 'Carlos'];
const apellidos = ['Ortiz', 'Ortega', 'Perez', 'Garcia', 'Lopez', 'Hernandez'];
const emails = ['paola@company.ru', 'paolo@company.ru', 'ana@company.ru', 'luis@company.ru', 'maria@company.ru', 'carlos@company.ru'];
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
    const usuario = new Usuario(nombres[i], apellidos[i], emails[i], direcciones[i]);
    usuarios.push(usuario);
}

// Mostrar información de los usuarios en consola
for (const usuario of usuarios) {
    usuario.mostrarInformacion();
    usuario.recuperarClave();
    console.log('---');
}
