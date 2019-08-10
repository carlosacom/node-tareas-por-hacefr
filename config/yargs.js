const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de elemento', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado la tarea'
        }
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};