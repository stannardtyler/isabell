let table; 

function preload() {
  
  table = loadTable('appearances.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  background(220);

  let rowCount = table.getRowCount();

  let barSpacing = height / (rowCount + 1);

  // Loop through the data
  for (let i = 0; i < rowCount; i++) {
    let name = table.getString(i, 'name');
    let total = table.getNum(i, 'total');
    let barWidth = map(total, 0, 100, 10, 100); 
    let barHeight = 10;
    let x = random(width); 
    let y = (i + 1) * barSpacing; //horizontal spacing

    // Draw the bar
    fill(0, 0, 255);
    rect(x, y, barWidth, barHeight);
  }
}
