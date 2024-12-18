let scene = 0; // Tracks the current comic scene
let captions = [
  "Good morning! Time to start the day.",
  "The daily train commute begins...",
  "Time for class! MMP 100 on the whiteboard.",
  "Putting on my green apron - time to work!",
  "The day winds down. Goodnight!",
  "Relaxing with NBA highlights on TV."
];

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(240); // Neutral gray background

  if (scene === 0) {
    morningScene();
  } else if (scene === 1) {
    commuteScene();
  } else if (scene === 2) {
    schoolScene();
  } else if (scene === 3) {
    workScene();
  } else if (scene === 4) {
    eveningScene();
  } else if (scene === 5) {
    tvScene();
  }

  // Caption Box
  fill(0, 0, 0, 180); // Semi-transparent black for captions
  rect(0, height - 80, width, 80);
  fill(255); // White text
  textSize(24);
  text(captions[scene], width / 2, height - 40);

  // Instructions
  textSize(16);
  fill(200);
  text("Click to continue...", width / 2, height - 20);
}

// Add the character with chains to each scene
function drawCharacter(x, y, withApron = false) {
  const headSize = 50;
  const bodyWidth = 40;
  const bodyHeight = 90;
  const legHeight = 80;

  // Brown skin for the character
  fill(139, 69, 19); 
  ellipse(x, y - 100, headSize); // Head (closer to body)

  // Body and Legs connected properly
  fill(0);
  rect(x - bodyWidth / 2, y - 50, bodyWidth, bodyHeight); // Body

  // Chains - bright yellow (now on the body)
  fill(255, 223, 0); // Bright yellow color for chains
  strokeWeight(3);
  noFill();
  arc(x, y - 20, 60, 50, 0, PI); // Chain 1
  arc(x, y + 10, 70, 60, 0, PI); // Chain 2

  // Arms
  fill(139, 69, 19); // Arm color (brown)
  rect(x - 55, y - 50, 20, 60); // Left arm
  rect(x + 35, y - 50, 20, 60); // Right arm

  // Legs (together)
  fill(0); // Black for pants
  rect(x - 20, y + 40, 20, legHeight); // Left leg
  rect(x, y + 40, 20, legHeight); // Right leg
  
  // Apron (only in work scene)
  if (withApron) {
    fill(34, 139, 34); // Green apron
    rect(x - 40, y - 50, 80, 150, 10); // Apron
  }

  // Eyes and smile
  fill(0);
  ellipse(x - 10, y - 110, 5, 5); // Left eye
  ellipse(x + 10, y - 110, 5, 5); // Right eye
  noFill();
  arc(x, y - 100, 30, 20, 0, PI); // Smile
}

// Scene 0: Morning Sunshine
function morningScene() {
  background(255, 223, 186); // Soft sunrise color
  fill(255, 204, 0); // Sun color
  ellipse(width / 2, height / 2 - 150, 150, 150); // Sun placed higher

  drawCharacter(width / 2 - 200, height / 2 + 50); // Move the character away from the visual

  fill(0);
  textSize(28);
  text("Morning Scene", width / 2, 50);
}

// Scene 1: Train Commute
function commuteScene() {
  background(135, 206, 235); // Sky blue

  // Train on the floor (raised to a more level position)
  fill(100);
  rect(width / 2 - 200, height - 180, 400, 100, 10); // Train body
  fill(255);
  rect(width / 2 - 150, height - 160, 70, 60); // First window
  rect(width / 2 - 50, height - 160, 70, 60); // Second window
  rect(width / 2 + 50, height - 160, 70, 60); // Third window

  fill(0);
  ellipse(width / 2 - 100, height - 80, 40); // Left wheel
  ellipse(width / 2 + 100, height - 80, 40); // Right wheel

  drawCharacter(width / 2 - 200, height - 250); // Move the character away from the visual

  fill(0);
  textSize(28);
  text("Train Commute", width / 2, 50);
}

// Scene 2: School Classroom
function schoolScene() {
  background(255); // White background for classroom

  // Draw whiteboard
  fill(255);
  rect(100, 100, 600, 200); // Whiteboard

  // Draw "MMP 100" on the whiteboard
  fill(0);
  textSize(48);
  text("MMP 100", width / 2, height / 2 - 50); // Centered text

  // Draw character sitting in front of the board
  drawCharacter(width / 2 - 200, height / 2 + 100); // Move the character away from the visual

  fill(0);
  textSize(28);
  text("School Scene", width / 2, 50);
}

// Scene 3: Work with Green Apron
function workScene() {
  background(220, 200, 170); // Cafe-like background

  // Barista Character with apron
  drawCharacter(width / 2 - 200, height / 2 + 50, true); // Move the character away from the visual and add apron

  fill(0);
  textSize(28);
  text("Time to Work", width / 2, 50);
}

// Scene 4: Evening Rest
function eveningScene() {
  background(20, 20, 50); // Night sky

  fill(255, 255, 200);
  ellipse(width - 100, 100, 80); // Moon

  fill(100, 50, 0);
  rect(300, height - 300, 200, 250); // House

  fill(150, 75, 0);
  rect(370, height - 150, 60, 120); // Door
  fill(255, 223, 186);
  ellipse(420, height - 90, 12); // Doorknob

  drawCharacter(width / 2 - 200, height / 2 + 100); // Move the character away from the visual

  fill(255);
  textSize(28);
  text("Evening Rest", width / 2, 50);
}

// Scene 5: Watching NBA on TV
function tvScene() {
  background(30, 30, 30); // Dark living room

  // Character
  drawCharacter(width / 2 - 150, height / 2 + 100); // Move the character away from the visual

  // TV
  fill(50);
  rect(width / 2, height / 2 - 50, 250, 150); // TV frame
  fill(0, 150, 255);
  rect(width / 2 + 10, height / 2 - 40, 230, 130); // TV screen
  fill(255);
  textSize(40);
  text("NBA", width / 2 + 125, height / 2 + 20);

  fill(255);
  textSize(28);
  text("Relaxing with NBA", width / 2, 50);
}

// Change Scene on Mouse Click
function mousePressed() {
  scene++;
  if (scene > 5) {
    scene = 0; // Reset to the first scene
  }
}
