let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalID;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

