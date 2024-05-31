// Factory function para crear usuarios
function crearUsuario(id, nombre, apellido, email, direccion, dpi, estado = true) {
    return {
        id,
        nombre,
        apellido,
        email,
        direccion,
        dpi,
        estado,
        mostrarInformacion() {
            console.log(`ID: ${this.id}`);
            console.log(`Nombre: ${this.nombre} ${this.apellido}`);
            console.log(`Email: ${this.email}`);
            console.log(`DPI: ${this.dpi}`);
            console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle}, No. ${this.direccion.numero}`);
            console.log(`Estado: ${this.estado}`);
        },
        recuperarClave() {
            console.log(`Recuperar clave para ${this.email}...`);
        },
        cambiarDireccion(nuevaDireccion) {
            this.direccion = nuevaDireccion;
            console.log(`La dirección ha sido cambiada para ${this.nombre} ${this.apellido}.`);
        },
        leerPropiedad_name() {
            console.log('Leyendo la propiedad nombre:', this.nombre);
        }
    };
}

// Crear usuarios explícitamente usando la factory function
let usuario1 = crearUsuario(1, 'Paola', 'Ortiz', 'paola@company.ru', { municipio: 'Jocotenango', calle: 'Calle ancha', numero: 25 }, '1234567890101');
let usuario2 = crearUsuario(2, 'Paolo', 'Ortega', 'paolo@company.ru', { municipio: 'Antigua Guatemala', calle: 'Calle del Arco', numero: 12 }, '1234567890102');
let usuario3 = crearUsuario(3, 'Ana', 'Perez', 'ana@company.ru', { municipio: 'Guatemala City', calle: 'Avenida Reforma', numero: 45 }, '1234567890103');
let usuario4 = crearUsuario(4, 'Luis', 'Garcia', 'luis@company.ru', { municipio: 'Mixco', calle: 'Boulevard El Naranjo', numero: 102 }, '1234567890104');
let usuario5 = crearUsuario(5, 'Maria', 'Lopez', 'maria@company.ru', { municipio: 'Quetzaltenango', calle: '12 Avenida', numero: 33 }, '1234567890105');
let usuario6 = crearUsuario(6, 'Carlos', 'Hernandez', 'carlos@company.ru', { municipio: 'Escuintla', calle: 'Calle Real', numero: 18 }, '1234567890106');

// Array para almacenar los objetos de usuario
const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6];

// Mostrar información de los usuarios en consola
for (const usuario of usuarios) {
    usuario.mostrarInformacion();
    usuario.recuperarClave();
    usuario.leerPropiedad_name();

    // Cambiar dirección
    usuario.cambiarDireccion({
        municipio: 'Nueva Direccion',
        calle: 'Nueva Calle',
        numero: 123
    });

    usuario.mostrarInformacion();
    console.log('---');
}
