// Capstone Project
// Newell Devera
// START DATE : 11/25/2026
//

let player;
let playerSettings = {
  x : 0,
  y : 0,
  dx : 0,
  dy : 0,
  walkspeed : 10,
  size : 50,
} ;

let inventory;

let keys = {
  w : false,
  a : false,
  s : false,
  d : false,
} ;




class Weapons {
  constructor() {

  }
}

class Entities {
  constructor() {

  }
}

class Player extends Entities {
  constructor(settings) {
    this.x = settings.x;
    this.y = settings.y;
    this.dx = settings.dx;
    this.dy = settings.dy;
    this.walkspeed = settings.walkspeed;
    this.size = settings.size;
  }

  move() {
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recordIfKeyDown(key);


}


function recordIfKeyDown(e) {
  if (`${e}` in keys && keyIsDown(e)) {
    let find = keys.find(thing => thing.e )
    console.log(keys.hasOwnProperty(e));
  }
}




