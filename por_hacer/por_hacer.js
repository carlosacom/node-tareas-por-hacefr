const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar ' + err);
    })
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const PorHacer = {
    crear: descripcion => {
        cargarDB();
        let porHacer = {
            descripcion,
            completado: false,
        };
        const exists = listadoPorHacer.findIndex(tarea => tarea.descripcion.toLowerCase() == descripcion.toLowerCase());
        if (exists >= 0) throw new Error('La tarea Ya existe en la lista');
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    },
    listar: () => {
        cargarDB();
        return listadoPorHacer;
    },
    actualizar: (descripcion, completado) => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion.toLowerCase() == descripcion.toLowerCase());
        if (index < 0) throw new Error('No existe la descripcion a buscar');
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return listadoPorHacer[index];
    },
    borrar: descripcion => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion.toLowerCase() == descripcion.toLowerCase());
        if (index < 0) throw new Error('No existe la descripcion a buscar');
        listadoPorHacer.splice(index, 1);
        return true;
    }
}

module.exports = PorHacer;