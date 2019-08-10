const argv = require('./config/yargs').argv;
const colors = require('colors');
const PorHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = PorHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        const listado = PorHacer.listar();
        for (const tarea of listado) {
            console.log('====================== POR HACER ===================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('====================================================='.green);
        }
        break;
    case 'actualizar':
        const tareaActualizada = PorHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tareaActualizada);
        break;
    case 'borrar':
        const tareaBorrada = PorHacer.borrar(argv.descripcion);
        console.log(tareaBorrada);
        break;
    default:
        console.log('comando no es reconocido');
        break;
}