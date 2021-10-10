class Cell {
  constructor(xx, yy, zz) {
    this.celllength = celllength;
    this.alive = true;
    this.dead = false;
    this.cellcol = xx;
    this.cellrow = yy;
    this.celldepth = zz;
    this.alivecount = 0;
    this.frequency = 0;
  }

  show2D() {
    if (this.alive) {
      fill(255);
    } else {
      fill(0);
    }
    rect(this.x, this.y, celllength, celllength);
  }

  checkNeighbors2D() {
    this.alivecount = 0;
    //check north
    if (this.cellrow > 0) {
      if (cell[this.cellcol][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-west
    if (this.cellrow > 0 && this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check west
    if (this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow].alive) {
        this.alivecount += 1;
      }
    }

    //check south-west
    if (this.cellrow < row - 1 && this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south
    if (this.cellrow < row - 1) {
      if (cell[this.cellcol][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-east
    if (this.cellrow < row - 1 && this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check east
    if (this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow].alive) {
        this.alivecount += 1;
      }
    }

    //check north-east
    if (this.cellrow > 0 && this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }
  }

  show3D() {
    if (this.alive) {
      fill(255);
      box(this.celllength, this.celllength, this.celllength, 10, 10);
    }
  }

  checkNeighbors3D() {
    this.alivecount = 0;

    //check neighbors in same z-plane
    //check north
    if (this.cellrow > 0) {
      if (cell[this.cellcol][this.cellrow - 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check north-west
    if (this.cellrow > 0 && this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow - 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check west
    if (this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check south-west
    if (this.cellrow < row - 1 && this.cellcol > 0) {
      if (cell[this.cellcol - 1][this.cellrow + 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check south
    if (this.cellrow < row - 1) {
      if (cell[this.cellcol][this.cellrow + 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check south-east
    if (this.cellrow < row - 1 && this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow + 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check east
    if (this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check north-east
    if (this.cellrow > 0 && this.cellcol < col - 1) {
      if (cell[this.cellcol + 1][this.cellrow - 1][this.celldepth].alive) {
        this.alivecount += 1;
      }
    }

    //check neighbors with -1 z value
    //check north
    if (this.cellrow > 0 && this.celldepth > 0) {
      if (cell[this.cellcol][this.cellrow - 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-west
    if (this.cellrow > 0 && this.cellcol > 0 && this.celldepth > 0) {
      if (cell[this.cellcol - 1][this.cellrow - 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check west
    if (this.cellcol > 0 && this.celldepth > 0) {
      if (cell[this.cellcol - 1][this.cellrow][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-west
    if (this.cellrow < row - 1 && this.cellcol > 0 && this.celldepth > 0) {
      if (cell[this.cellcol - 1][this.cellrow + 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south
    if (this.cellrow < row - 1 && this.celldepth > 0) {
      if (cell[this.cellcol][this.cellrow + 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-east
    if (this.cellrow < row - 1 && this.cellcol < col - 1 && this.celldepth > 0) {
      if (cell[this.cellcol + 1][this.cellrow + 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check east
    if (this.cellcol < col - 1 && this.celldepth > 0) {
      if (cell[this.cellcol + 1][this.cellrow][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-east
    if (this.cellrow > 0 && this.cellcol < col - 1 && this.celldepth > 0) {
      if (cell[this.cellcol + 1][this.cellrow - 1][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check cell directly behind 
    if (this.celldepth > 0) {
      if (cell[this.cellcol][this.cellrow][this.celldepth - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check neighbors with a z value +1
    //check north
    if (this.cellrow > 0 && this.celldepth < depth - 1) {
      if (cell[this.cellcol][this.cellrow - 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-west
    if (this.cellrow > 0 && this.cellcol > 0 && this.celldepth < depth - 1) {
      if (cell[this.cellcol - 1][this.cellrow - 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check west
    if (this.cellcol > 0 && this.celldepth < depth - 1) {
      if (cell[this.cellcol - 1][this.cellrow][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-west
    if (this.cellrow < row - 1 && this.cellcol > 0 && this.celldepth < depth - 1) {
      if (cell[this.cellcol - 1][this.cellrow + 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south
    if (this.cellrow < row - 1 && this.celldepth < depth - 1) {
      if (cell[this.cellcol][this.cellrow + 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-east
    if (this.cellrow < row - 1 && this.cellcol < col - 1 && this.celldepth < depth - 1) {
      if (cell[this.cellcol + 1][this.cellrow + 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check east
    if (this.cellcol < col - 1 && this.celldepth < depth - 1) {
      if (cell[this.cellcol + 1][this.cellrow][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-east
    if (this.cellrow > 0 && this.cellcol < col - 1 && this.celldepth < depth - 1) {
      if (cell[this.cellcol + 1][this.cellrow - 1][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check cell directly in front
    if (this.celldepth < depth - 1) {
      if (cell[this.cellcol][this.cellrow][this.celldepth + 1].alive) {
        this.alivecount += 1;
      }
    }
  }

  updateDeadvar() {
    //over or under population rule
    if (this.alive && this.alivecount != 2 && this.alivecount != 3) {
      this.alive = false;
      this.dead = true;
    }

    //reproduction rule
    if (this.dead && this.alivecount == 3) {
      this.alive = true;
      this.dead = false;
    }
  }

  checkSound() {
    if (this.alive) {
      this.frequency = ((this.cellcol + this.cellrow + this.celldepth) / 3) * 80;
      freqlist.push(this.frequency);
    }
  }
}

class Cell2D {
  constructor(X, Y) {
    this.x = X;
    this.y = Y;
    this.cellcol = this.x / celllength;
    this.cellrow = this.y / celllength;
    this.alive = false;
    this.dead = true;
    this.alivecount = 0;
    this.freq = 0;
  }

  show() {
    if (this.alive) {
      fill(255);
    } else {
      fill(0);
    }
    rect(this.x, this.y, celllength, celllength);
  }

  checkNeighbors() {
    this.alivecount = 0;
    //check north
    if (this.cellrow > 0) {
      if (cell2D[this.cellcol][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check north-west
    if (this.cellrow > 0 && this.cellcol > 0) {
      if (cell2D[this.cellcol - 1][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }

    //check west
    if (this.cellcol > 0) {
      if (cell2D[this.cellcol - 1][this.cellrow].alive) {
        this.alivecount += 1;
      }
    }

    //check south-west
    if (this.cellrow < row - 1 && this.cellcol > 0) {
      if (cell2D[this.cellcol - 1][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south
    if (this.cellrow < row - 1) {
      if (cell2D[this.cellcol][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check south-east
    if (this.cellrow < row - 1 && this.cellcol < col - 1) {
      if (cell2D[this.cellcol + 1][this.cellrow + 1].alive) {
        this.alivecount += 1;
      }
    }

    //check east
    if (this.cellcol < col - 1) {
      if (cell2D[this.cellcol + 1][this.cellrow].alive) {
        this.alivecount += 1;
      }
    }

    //check north-east
    if (this.cellrow > 0 && this.cellcol < col - 1) {
      if (cell2D[this.cellcol + 1][this.cellrow - 1].alive) {
        this.alivecount += 1;
      }
    }
  }

  updateDeadvar() {
    //over or under population rule
    if (this.alive && this.alivecount != 2 && this.alivecount != 3) {
      this.alive = false;
      this.dead = true;
    }

    //reproduction rule
    if (this.dead && this.alivecount == 3) {
      this.alive = true;
      this.dead = false;
    }
  }

  checkSound() {
    if (this.alive) {
      this.freq = ((this.cellcol + this.cellrow) / 2) * 50;
      freqlist.push(this.freq);
    }
  }
}

let cell = []; //3d array of cells
let cell2D = [];
let col, row, depth;
let degrees = 0;
let celllength = 25;
let gap = 0; //between 3D blocks
let h, s, b;
let osc;
let freqlist = [];
let threeD = false;
let mute = true;
let threeDbutton, soundbutton, framerateinput, frameratebutton;
let fr;

function setup() {
  createCanvas(roundtocelllength(windowWidth - 72), roundtocelllength(windowHeight - 200), WEBGL);

  //sound
  osc = new p5.Oscillator();

  //initialize conway game of life in 2D to start
  setup2D();

  //buttons & inputs
  threeDbutton = select('#threeDbutton');
  soundbutton = select('#soundbutton');
  frameratebutton = select('#changefrbutton');
  framerateinput = select('#framerate');
}

function draw() {
  background(0);

  //buttons
  threeDbutton.mouseClicked(changeThreeD);
  soundbutton.mouseClicked(sound);
  frameratebutton.mouseClicked(changeFrameRate);

  freqlist = []; //clear list everytime

  if (threeD) {
    threeDbutton.html("2D Version");
    draw3D();
  } else {
    threeDbutton.html("3D Version");
    draw2D();
  }

  //sound
  osc.freq(avg(freqlist));
}

function sound() {
  mute = !mute;
  if (mute) {
    soundbutton.html("Music On")
    osc.stop()
  } else {
    soundbutton.html("Music Off")
    osc.start();
  }
}

function changeThreeD() {
  threeD = !threeD;
  if (threeD) {
    setup3D();
  } else {
    setup2D();
  }
}

function changeFrameRate() {
  fr = parseFloat(framerateinput.value());
  if (isNaN(fr) == false) {
    frameRate(fr);
  }
}

function setup2D() {
  camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  celllength = 25;
  col = width / celllength;
  row = height / celllength;
  for (let i = 0; i < col; i++) {
    cell2D[i] = [];
    for (let j = 0; j < row; j++) {
      cell2D[i][j] = new Cell2D(i * width / col, j * height / row);
    }
  }

  //few cells in middle start off alive
  for (let x = 0; x < col; x++) {
    for (let y = 0; y < row; y++) {
      if (random(1) < 0.3) {
        cell2D[x][y].alive = true;
      }
    }
  }
}

function draw2D() {
  translate(-width / 2, -height / 2);
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      cell2D[i][j].show();
      cell2D[i][j].checkNeighbors();
      cell2D[i][j].checkSound();
      cell2D[i][j].updateDeadvar();
    }
  }
}

function setup3D() {
  col = 10;
  row = 10;
  depth = 10;
  celllength = 5;

  //light colors
  colorMode(HSB);
  h = random(0, 255);
  s = 100;
  b = 100;

  //initialize 3D array
  for (let x = 0; x < col; x++) {
    cell[x] = [];
    for (let y = 0; y < row; y++) {
      cell[x][y] = [];
      for (let z = 0; z < depth; z++) {
        cell[x][y][z] = new Cell(x, y, z);
      }
    }
  }

  //starter alive and dead values
  for (let x = 0; x < col; x++) {
    for (let y = 0; y < row; y++) {
      for (let z = 0; z < depth; z++) {
        if (x < 6 && x > 3 && y < 6 && y > 3 && z > 3 && z < 6) {
          cell[x][y][z].alive = true;
          cell[x][y][z].dead = false;
        } else {
          cell[x][y][z].alive = false;
          cell[x][y][z].dead = true;
        }
      }
    }
  }
}

function draw3D() {
  h += 1;
  if (h > 330) {
    h = 0;
  }

  //lights
  directionalLight(h, s, b, 1, 0, -1);
  directionalLight(h, s, b, 0, 1, 0);
  directionalLight(h, s, b, 0, 0, 1);
  directionalLight(h, s, b, 1, -1, 0);
  directionalLight(h, s, b, -1, 1, 0);
  directionalLight(h, s, b, 0, 0, -1);

  //camera
  let r = 125;
  let x = r * (cos(radians(degrees)));
  let z = r * (sin(radians(degrees)));
  camera(x, 0, z, 0, 0, (depth / 2) * celllength, 0, 1, 0);
  degrees += 1;

  push()
  translate(-(col / 2) * celllength, -(row / 2) * celllength, 0);
  for (let x = 0; x < col; x++) {
    for (let y = 0; y < row; y++) {
      for (let z = 0; z < depth; z++) {
        push();
        translate(x * (celllength + gap), y * (celllength + gap), z * (celllength + gap));
        cell[x][y][z].show3D();
        cell[x][y][z].checkNeighbors3D();
        cell[x][y][z].updateDeadvar();
        cell[x][y][z].checkSound();
        pop();
      }
    }
  }
  pop();
}

function avg(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum / list.length;
}

function roundtocelllength(value) {
  return round(value / celllength) * celllength;
}