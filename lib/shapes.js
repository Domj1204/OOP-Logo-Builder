// lib/shapes.js

// Base Shape class
class Shape {
    constructor() {
      this.color = '#000000'; // Default color is black
    }
  
    setColor(color) {
      if (/^#([0-9A-F]{3}){1,2}$/i.test(color) || /^[a-z]+$/i.test(color)) {
        this.color = color;
      } else {
        throw new Error('Invalid color format');
      }
    }
  }
  
  // Circle class
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  // Triangle class
  class Triangle extends Shape {
    render() {
      // This sets the points for an equilateral triangle centered in the SVG
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
  // Square class
  class Square extends Shape {
    render() {
      // Square centered in the SVG
      return `<rect x="100" y="75" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  