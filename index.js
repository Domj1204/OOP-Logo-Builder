const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt configuration
const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'What text do you want on the logo (up to three characters)?',
    validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want the text to be (color keyword or hexadecimal)?',
    default: 'white'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want the shape to be (color keyword or hexadecimal)?',
    default: 'green'
  }
];

// Main function to run the application
async function main() {
  const answers = await inquirer.prompt(prompts);
  let shape;

  // Create the shape instance based on user input
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }

  // Set the color of the shape
  shape.setColor(answers.shapeColor);

  // Generate the SVG content
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="30" font-family="Arial">${answers.text}</text>
    </svg>`;

  // Write the SVG to a file
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

// Run the main function
main();

