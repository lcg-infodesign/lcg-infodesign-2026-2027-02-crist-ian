function setup() {
  createCanvas(windowWidth, windowHeight);  

  background(15, 23, 42); 

  let numeroglifi = 30; 
  let colonne = ceil(sqrt(numeroglifi));
  let righe = sqrt(numeroglifi);
  
  let margineVerticale = 40;
  let discolonna = windowWidth / colonne;
  let disriga = (windowHeight - margineVerticale) / righe;
  
  let xcorrente = 0;
  let ycorrente = margineVerticale / 2; 

  for(let g = 0; g < numeroglifi; g++) {
    let dimensioneMano = disriga * random(0.75, 0.9);
    
    glifo(xcorrente + discolonna/2, ycorrente + disriga/2, dimensioneMano);
    xcorrente = xcorrente + discolonna;

    if(xcorrente >= windowWidth - 1) {
      xcorrente = 0;
      ycorrente = ycorrente + disriga;
    }
  }
}

function draw() {
}

function glifo(_x, _y, _size) {
  push();
  translate(_x, _y);

  let specchio = random([1, -1]);
  scale(specchio, 1);

  let larghPalmo = _size * 0.45;
  let altPalmo = _size * 0.45;

  noStroke();

  push();
  fill(random(50, 255), random(100, 255), random(150, 255));
  rectMode(CENTER);
  rect(0, altPalmo * 0.7, larghPalmo * 0.6, altPalmo * 0.5);
  pop();

  push();
  angleMode(DEGREES);
  let angoloPalmo = -4;
  rotate(angoloPalmo);

  fill(random(50, 255), random(100, 255), random(150, 255));
  rectMode(CENTER);
  rect(0, 0, larghPalmo, altPalmo);

  let larghDito = larghPalmo / 4;
  let altDitoBase = _size * 0.4; 
  let baseYDito = -altPalmo / 2;

  for (let i = 0; i < 4; i++) {
    push();
    angleMode(DEGREES);

    let fattoreAltezza = 1.0;
    if (i === 0 || i === 3) {
      fattoreAltezza = 0.85; 
    }
    let altDitoCorrente = altDitoBase * fattoreAltezza;

    fill(random(50, 255), random(100, 255), random(150, 255));

    let xRett = -larghPalmo / 2 + i * larghDito + larghDito / 2;
    let yRett = baseYDito - altDitoCorrente / 2;

    rectMode(CENTER);
    rect(xRett, yRett, larghDito * 0.8, altDitoCorrente);
    pop();
  }

  push();
  angleMode(DEGREES);
  let latoPollice = random([1, -1]); 
  
  translate((larghPalmo / 2) * latoPollice, altPalmo * 0.1);
  rotate(35 * latoPollice); 

  fill(random(50, 255), random(100, 255), random(150, 255));
  rectMode(CENTER);
  rect(0, 0, larghDito * 1.15, altDitoBase * 0.75);
  pop();

  pop(); 

  pop(); 
}
