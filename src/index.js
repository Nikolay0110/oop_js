/* eslint-disable no-unused-vars */
// import './css/style.css';


import Character from "./js/character";
import Bowman from "./js/bowman";
import Swordsman from "./js/swordsman";
import Magician from "./js/magician";
import Daemon from "./js/daemon";
import Undead from "./js/undead";
import Zombie from "./js/zombie";


const bowman = new Bowman('Sina');
console.log(bowman);
const zombie = new Zombie('Snork');
bowman.damage(zombie.attack)
console.log(bowman)