//
// 1. Ruta relativa
// 2. Paquetería de npm
// 3. Métodos nativos (node.js)

import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import pokemonInfo from "pokemon";
import superheroes from "superheroes";

import promises from "./js/promises";
console.log("promises", promises);

// PROCESOS ASÍNCRONOS

const double = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 0) {
        reject("El valor no puede ser negativo.");
      } else if (value === 0) {
        reject("El valor no puede ser cero.");
      } else {
        resolve(value * 2);
      }
    }, 3000);
  });
};

double(5)
  .then((currentValue) => {
    console.log("currentValue", `El valor es: ${currentValue}`);
    return currentValue;
  })
  .catch((error) => {
    console.log("error", error);
    return error;
  });

// console.log("superheroes", superheroes)

// EJEMPLO DE AUTENTICACIÓN

// 1. GENERAR LA PROMESA

const db = [
  {
    id: "123",
    username: "mikenieva",
    password: "holamundo"
  }
];

const authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    // SIMULACIÓN DE TIEMPO. SE VA A TARDAR 2 SEGUNDOS
    setTimeout(() => {
      // EVALUACIÓN DEL USUARIO, SI EXISTE EN BD O NO
      const user = db.find((foundUser) => {
        return foundUser.username && foundUser.password === password;
      });

      console.log("status del usuario:", user);

      // EVALUACIÓN DE PROMESA
      if (user) {
        resolve(`Usuario ${username} autenticado exitosamente`);
      } else {
        reject(
          `Usuario ${username} no existe o no fue autenticado correctamente.`
        );
      }
    }, 4000);
  });
};

// 2. INVOCAR LA PROMESA Y GESTIONAR SUS SOLUCIONES O ERRORES (ERROR HANDLING)

const firstUserName = "mikenieva";
const firstUserPass = "holamundo123";

authenticate(firstUserName, firstUserPass)
  .then((value) => {
    console.log("value:", value);
    return value;
  })
  .catch((error) => {
    console.log("error:", error);
    return error;
  });

// POKEMON
// console.log("pokemonInfo", pokemonInfo)

const getARandomPokemon = pokemonInfo.random();
// console.log("getARandomPokemon", getARandomPokemon)

// SUPERHEROES
const allSuperheroes = superheroes.all;
// console.log("allSuperheroes", allSuperheroes)

const newAllSuperheroes = allSuperheroes.map((superhero) => {
  return `El superhéroe es: ${superhero}`;
});

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hola mundo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
