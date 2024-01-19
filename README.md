# OOP Logo Builder

## Description
The OOP Logo Builder is a command-line application designed to automate the creation of simple logo designs for developers who may lack the resources or need to engage a graphic designer for preliminary project branding. The motivation behind this tool is to provide a quick, customizable solution for generating logos with basic shapes and text, addressing the need for speed and simplicity in the early stages of project development. Through developing this application, I have honed my skills in Node.js, working with SVGs programmatically, and creating an interactive CLI with user input. This project solidifies my understanding of object-oriented programming principles and the practical application of user stories and acceptance criteria in software development.

## Table of Contents
- [Installation](#installaion)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
To install the OOP Logo Builder, follow these steps:

Clone the repository from GitHub to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install all dependencies.
Ensure that you have Node.js installed on your system to execute the application.

## Usage
To use the OOP Logo Builder, follow these instructions:

Run node index.js in your terminal from the project root directory.
Answer the prompts provided by Inquirer to specify the logo text, text color, shape, and shape color.
Upon completion, the application will generate an logo.svg file in your directory.
Open this SVG file in a browser to view your generated logo.

![Screenshot](<examples/Screenshot 2024-01-19 at 00.20.29.png>)
![RKS-Photo](<examples/Screenshot 2024-01-19 at 00.26.12.png>)

Credits
This application was built by https://github.com/Domj1204/OOP-Logo-Builder

Helpful SVG resources:
- https://developer.mozilla.org/en-US/docs/Web/SVG
- https://www.w3schools.com/graphics/svg_intro.asp

Stack Overflow discussions that provided insights:
- https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle
- https://stackoverflow.com/questions/9709169/svg-understanding-the-translate-command

## License
This project is released under the MIT License: https://www.mit.edu/~amini/LICENSE.md.

## Features
Command-line interaction for custom logo generation.
Dynamic SVG creation based on user input.
Support for basic geometric shapes: circle, triangle, and square.

## How-to-Contribute
Contributions to the OOP Logo Builder are welcome! To contribute:
- Fork the repository.
- Create a new branch for your feature.
- Add your feature or enhancement.
- Push your branch and open a pull request.

## Tests
To run the test suite for the OOP Logo Builder, execute npm test. The tests ensure that shapes are correctly instantiated and rendered in SVG format.

Example test:
const { Triangle } = require('./lib/shapes');

describe('Triangle Shape', () => {
  it('renders correctly with color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});
This test checks that a Triangle object can be created, have its color set to blue, and render the correct SVG markup.