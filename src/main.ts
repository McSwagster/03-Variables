import "./style.css";

interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
};

const grupoA: Grupo = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};

const grupoB: Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock",
};

const grupoC: Grupo = {
    nombre: "AC/DC",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
};

const grupoD: Grupo = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica",
};

const grupoE: Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock",
};

console.log("%c"+grupoA.nombre, "font-size: 24px; font-weight: bold; background-color: green");
console.log("Año: "+grupoA.año+",", "Activo: "+grupoA.activo+",", "Género: "+grupoA.genero);
console.log("*");
console.log("%c"+grupoB.nombre, "font-size: 24px; font-weight: bold; background-color: green");
console.log("Año: "+grupoB.año+",", "Activo: "+grupoB.activo+",", "Género: "+grupoB.genero);
console.log("*");
console.log("%c"+grupoC.nombre, "font-size: 24px; font-weight: bold; background-color: green");
console.log("Año: "+grupoC.año+",", "Activo: "+grupoC.activo+",", "Género: "+grupoC.genero);
console.log("*");
console.log("%c"+grupoD.nombre, "font-size: 24px; font-weight: bold; background-color: green");
console.log("Año: "+grupoD.año+",", "Activo: "+grupoD.activo+",", "Género: "+grupoD.genero);
console.log("*");
console.log("%c"+grupoE.nombre, "font-size: 24px; font-weight: bold; background-color: green");
console.log("Año: "+grupoE.año+",", "Activo: "+grupoE.activo+",", "Género: "+grupoE.genero);
console.log("*");