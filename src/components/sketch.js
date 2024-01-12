let points = [];
let numPoints = 60;
let pointSize = 3;
let rotationCenter;
let inclinationAngle;
let commonDirection;
let pointColors = []; // Create an array to store point colors
let lineBrightness = []; // Create an array to store line brightness
let hoverThreshold = 40; // Adjust the hover threshold

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Initialize the inclination angle here
  inclinationAngle = radians(30);

  // Calculate the center of rotation
  rotationCenter = createVector(width / 2, height / 2);

  // Define the common direction vector (you can adjust this)
  commonDirection = p5.Vector.fromAngle(radians(-57)); // Adjust the angle as needed

  // Initialize positions and colors of points
  for (let i = 0; i < numPoints; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let point = createVector(x, y);
    points.push(point);
    let ptColor = color(r, g, b); // Random RGB color
    pointColors.push(ptColor); // Store the color in the array
    lineBrightness.push(100); // Initialize line brightness
  }

  // Adjust the camera's position (move it further away)
  translate(0, 0, 0); // Move the camera further away in 3D space
}

function draw() {
  background(16, 23, 32);

  // Rotate the cloud of points
  let angle = radians(0.03);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    // Calculate the vector from the rotation center to the point
    let fromCenter = p5.Vector.sub(pt, rotationCenter);

    // Rotate the vector (including inclination)
    fromCenter.rotate(angle, inclinationAngle);

    // Update the point's position
    pt.set(rotationCenter.x + fromCenter.x, rotationCenter.y + fromCenter.y);

    // Calculate the line's end point that extends beyond the canvas
    let lineEnd = p5.Vector.add(pt, p5.Vector.mult(commonDirection, width * 2)); // Adjust the length as needed

    // Calculate the distance from the mouse to the line
    let distFromLine = distToLine(pt.x, pt.y, lineEnd.x, lineEnd.y, mouseX, mouseY);

    // Update line brightness based on hover
    if (distFromLine < hoverThreshold) {
      lineBrightness[i] = lerp(lineBrightness[i], 200, 0.1); // Smooth transition to hovered brightness
    } else {
      lineBrightness[i] = lerp(lineBrightness[i], 100, 0.1); // Smooth transition to default brightness
    }

    // Set the fill color for the point using the associated color
    fill(pointColors[i]);

    // Draw the point as an ellipse
    ellipse(pt.x, pt.y, pointSize);

    // Draw the line with a brightness value
    stroke(155, lineBrightness[i]);
    line(pt.x, pt.y, lineEnd.x, lineEnd.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Reset point positions when the window is resized
  points = [];
  pointColors = []; // Reset point colors
  lineBrightness = []; // Reset line brightness
  for (let i = 0; i < numPoints; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let point = createVector(x, y);
    points.push(point);
    let ptColor = color(r, g, b); // Random RGB color
    pointColors.push(ptColor); // Store the color in the array
    lineBrightness.push(100); // Initialize line brightness
  }

  // Recalculate the center of rotation
  rotationCenter = createVector(width / 2, height / 2);

  // Adjust the camera's position (move it further away) when the window is resized
  translate(0, 0, -100); // Move the camera further away in 3D space
}

// Function to calculate the distance from a point to a line
function distToLine(x1, y1, x2, y2, px, py) {
  let a = px - x1;
  let b = py - y1;
  let c = x2 - x1;
  let d = y2 - y1;
  let dot = a * c + b * d;
  let lenSq = c * c + d * d;
  let param = -1;
  if (lenSq != 0) {
    param = dot / lenSq;
  }
  let xx, yy;
  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * c;
    yy = y1 + param * d;
  }
  let dx = px - xx;
  let dy = py - yy;
  return sqrt(dx * dx + dy * dy);
}
