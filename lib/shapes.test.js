// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape color settings and SVG rendering', () => {
  it('should create a Triangle and set its color and render SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('#ff0000'); // Setting color to red
    expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="#ff0000" />');
  });

  it('should create a Circle and set its color and render SVG', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="blue" />');
  });

  it('should create a Square and set its color and render SVG', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="100" y="75" width="100" height="100" fill="green" />');
  });

  // Add more tests if necessary
});


