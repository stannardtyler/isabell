var state = 0;

function preload() {
  // Load the CSV file
  table = loadTable('bountydata.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  background(220);

  if (state == '1') {
    draw1();
  } else if (state == '2') {
    draw2();
  } else if (state == '3') {
    draw3();
  } else if (state == '4') {
    draw4();
  } else if (state == '5') {
    draw5();
  } else if (state == '6') {
    draw6();
  } else if (state == '7') {
    draw7();
  } else if (state == '8') {
    draw8();
  } else if (state == '9') {
    draw9();
  } else if (state == '0') {
    draw0();
  }
}

function keyPressed() {
  state = key;
  }


function draw1(){//east blue
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
    for (let a = 0; a < rowCount; a++) {
      let name = table.getString(a, 'character name');
      let bounty1 = table.getNum(a, 'East Blue');
      let barWidth = map(bounty1, 0, 100, 10, 100); 
      let barHeight = 10;
      let x1 = random(width); 
      let y1 = (a + 1) * barSpacing; // horizontal spacing
  
      // Draw the bar
      fill(0, 0, 255);
      rect(x1, y1, barWidth, barHeight);
    }
}

function draw2(){// loop data for Alabasta
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
  for (let b = 0; b < rowCount; b++) {
    let name = table.getString(b, 'character name');
    let bounty2 = table.getNum(b, 'Alabasta');
    let barWidth = map(bounty2, 0, 100, 10, 100); 
    let barHeight = 10;
    let x2 = random(width); 
    let y2 = (b + 1) * barSpacing; // horizontal spacing

    // Draw the bar
    fill(0, 255, 0);
    rect(x2+10, y2, barWidth, barHeight);
  }
}

function draw3(){ // loop data for Sky Island
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
 for (let c = 0; c < rowCount; c++){
  let name = table.getString(c, 'character name');
  let bounty3 = table.getNum(c, 'Sky Island');
  let barWidth = map(bounty3, 0, 100, 10, 100); 
  let barHeight = 10;
  let x3 = random(width); 
  let y3 = (c + 1) * barSpacing; // horizontal spacing

  // Draw the bar
  fill(255, 0, 0);
  rect(x3+10, y3, barWidth, barHeight);

  }
}

function draw4(){// loop data for Water 7
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
 for (let d = 0; d < rowCount; d++) {
  let name = table.getString(d, 'character name');
  let bounty4 = table.getNum(d, 'Water 7');
  let barWidth = map(bounty4, 0, 100, 10, 100); 
  let barHeight = 10;
  let x4 = random(width); 
  let y4 = (d + 1) * barSpacing; // horizontal spacing

  // Draw the bar
  fill(255, 255, 0);
  rect(x4+10, y4, barWidth, barHeight);
}
}

function draw5(){ // loop data for Thriller Bark
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
  for (let e = 0; e < rowCount; e++) {
    let name = table.getString(e, 'character name');
    let bounty5 = table.getNum(e, 'Thriller Bark');
    let barWidth = map(bounty5, 0, 100, 10, 100); 
    let barHeight = 10;
    let x5 = random(width); 
    let y5 = (e + 1) * barSpacing; // horizontal spacing

    // Draw the bar
    fill(0, 255, 255);
    rect(x5+10, y5, barWidth, barHeight);
  }
}

function draw6(){ // loop data for Summit War
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
  for (let f = 0; f < rowCount; f++) {
    let name = table.getString(f, 'character name');
    let bounty6 = table.getNum(f, 'Summit War');
    let barWidth = map(bounty6, 0, 100, 10, 100); 
    let barHeight = 10;
    let x6 = random(width); 
    let y6 = (f + 1) * barSpacing; // horizontal spacing

    // Draw the bar
    fill(255, 0, 255);
    rect(x6+10, y6, barWidth, barHeight);
  }
}

function draw7(){ // loop data for Fish-Man Island
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
for (let g = 0; g < rowCount; g++) {
  let name = table.getString(g, 'character name');
  let bounty7 = table.getNum(g, 'Fish-Man Island');
  let barWidth = map(bounty7, 0, 100, 10, 100); 
  let barHeight = 10;
  let x7 = random(width); 
  let y7 = (g + 1) * barSpacing; // horizontal spacing

  // Draw the bar
  fill(100, 100, 230);
  rect(x7+10, y7, barWidth, barHeight);
}
}

function draw8(){// loop data for Dressrosa
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
for (let h = 0; h < rowCount; h++) {
  let name = table.getString(h, 'character name');
  let bounty8 = table.getNum(h, 'Dressrosa');
  let barWidth = map(bounty8, 0, 100, 10, 100); 
  let barHeight = 10;
  let x8 = random(width); 
  let y8 = (h + 1) * barSpacing; // horizontal spacing

  // Draw the bar
  fill(230, 230, 0);
  rect(x8+10, y8, barWidth, barHeight);
}
}

function draw9(){ // loop data for Whole Cake Island
  let rowCount = table.getRowCount();
  let barSpacing = height / (rowCount + 1);
for (let i = 0; i < rowCount; i++) {
  let name = table.getString(i, 'character name');
  let bounty9 = table.getNum(i, 'Whole Cake Island');
  let barWidth = map(bounty9, 0, 100, 10, 100); // adjustments
  let barHeight = 10;
  let x9 = random(width); 
  let y9 = (i + 1) * barSpacing; //horizontal spacing

  // Draw the bar
  fill(230, 0, 0);
  rect(x9+10, y9, barWidth, barHeight);
}
}

function draw0(){
// loop data for Wano Country
let rowCount = table.getRowCount();
let barSpacing = height / (rowCount + 1);
for (let j = 0; j < rowCount; j++) {
  let name = table.getString(j, 'character name');
  let bounty10 = table.getNum(j, 'Wano Country');
  let barWidth = map(bounty10, 0, 100, 10, 100); // adjustments
  let barHeight = 10;
  let x10 = random(width); 
  let y10 = (j + 1) * barSpacing; //horizontal spacing

  // Draw the bar
  fill(0, 0, 230);
  rect(x10+10, y10, barWidth, barHeight);
}
}