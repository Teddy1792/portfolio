import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { useDarkMode } from './DarkModeContext';

const P5Sketch = () => {
  const sketchRef = useRef();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const s = (sketch) => {
      let points = [];
      let numPoints = 60;
      let pointSize = 3;
      let rotationCenter;
      let inclinationAngle;
      let commonDirection;
      let pointColors = [];
      let lineBrightness = [];
      let hoverThreshold = 40;

      sketch.setup = () => {
        let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        canvas.parent("frontPage");
        sketch.noStroke();

        inclinationAngle = sketch.radians(30);

        rotationCenter = sketch.createVector(sketch.width / 2, sketch.height / 2);

        // Use p5.Vector.fromAngle() to create a vector from an angle
        commonDirection = p5.Vector.fromAngle(sketch.radians(-57));

        for (let i = 0; i < numPoints; i++) {
          let x = sketch.random(sketch.width);
          let y = sketch.random(sketch.height);
          let r = sketch.random(255);
          let g = sketch.random(255);
          let b = sketch.random(255);
          let point = sketch.createVector(x, y);
          points.push(point);
          let ptColor = sketch.color(r, g, b);
          pointColors.push(ptColor);
          lineBrightness.push(100);
        }

        sketch.translate(0, 0, 0);
      };

      sketch.draw = () => {
        if (darkMode) {
          sketch.background(16, 23, 42); // Dark mode background
        } else {
          sketch.background(200, 212, 227); // Light mode background
        }

        let angle = sketch.radians(0.03);

        for (let i = 0; i < points.length; i++) {
          let pt = points[i];
          let fromCenter = sketch.createVector(
            pt.x - rotationCenter.x,
            pt.y - rotationCenter.y
          );
          fromCenter.rotate(angle, inclinationAngle);
          pt.set(rotationCenter.x + fromCenter.x, rotationCenter.y + fromCenter.y);

          let lineEnd = sketch.createVector(
            pt.x + commonDirection.x * sketch.width * 2,
            pt.y + commonDirection.y * sketch.width * 2
          );

          let distFromLine = distToLine(
            pt.x,
            pt.y,
            lineEnd.x,
            lineEnd.y,
            sketch.mouseX,
            sketch.mouseY
          );

          if (!darkMode) {
            // Decrease lineBrightness when hovered if dark mode is not active
            if (distFromLine < hoverThreshold+20) {
              lineBrightness[i] = sketch.lerp(lineBrightness[i], 10, 0.1);
            } else {
              lineBrightness[i] = sketch.lerp(lineBrightness[i], 50, 0.1);
            }
          } else {
            if (distFromLine < hoverThreshold) {
              lineBrightness[i] = sketch.lerp(lineBrightness[i], 900, 0.1);
            } else {
              lineBrightness[i] = sketch.lerp(lineBrightness[i], 50, 0.1);
            }
          }

          sketch.fill(pointColors[i]);
          sketch.ellipse(pt.x, pt.y, pointSize);

          sketch.stroke(50, lineBrightness[i]);
          sketch.line(pt.x, pt.y, lineEnd.x, lineEnd.y);
        }
      };

      sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);

        points = [];
        pointColors = [];
        lineBrightness = [];
        for (let i = 0; i < numPoints; i++) {
          let x = sketch.random(sketch.width);
          let y = sketch.random(sketch.height);
          let r = sketch.random(255);
          let g = sketch.random(255);
          let b = sketch.random(255);
          let point = sketch.createVector(x, y);
          points.push(point);
          let ptColor = sketch.color(r, g, b);
          pointColors.push(ptColor);
          lineBrightness.push(100);
        }

        rotationCenter = sketch.createVector(sketch.width / 2, sketch.height / 2);

        sketch.translate(0, 0, -100);
      };

      // Function to calculate the distance from a point to a line
      const distToLine = (x1, y1, x2, y2, px, py) => {
        let a = px - x1;
        let b = py - y1;
        let c = x2 - x1;
        let d = y2 - y1;
        let dot = a * c + b * d;
        let lenSq = c * c + d * d;
        let param = -1;
        if (lenSq !== 0) {
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
        return sketch.sqrt(dx * dx + dy * dy);
      };
    };

    // Create a new p5.js instance with the sketch and store it in the ref
    sketchRef.current = new p5(s);

    return () => {
      // Cleanup code if needed
      sketchRef.current.remove();
    };
  }, [darkMode]);

  return null; 
};

export default P5Sketch;
