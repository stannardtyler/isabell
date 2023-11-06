let table; // variable to hold the data

function preload() {
  // Load the CSV file
  table = loadTable('episodedata.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  background(220);

  // Get the number of rows in the CSV
  let rowCount = table.getRowCount();

  // Calculate the vertical space between bars
  let barSpacing = height / (rowCount + 1);

  // Loop through the data
  for (let i = 0; i < rowCount; i++) {
    let area = table.getString(i, 'area');
    let episodes = table.getNum(i, 'episodes');
    let barWidth = map(episodes, 0, 100, 10, 100); // Adjust the mapping as needed
    let barHeight = 10;
    let x = random(width); // Generate a random starting position for x
    let y = (i + 1) * barSpacing; // Adjust the spacing between bars as needed

    // Draw the bar
    fill(0, 0, 255);
    rect(x, y, barWidth, barHeight);
  }
}
