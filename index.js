const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./utils/generateSVG.js');
const colorNames = require('color-name');

// Function to validate the company name/abbreviation
const validateText = (input) => {
    if (input.length > 3) {
        return 'Please enter a maximum of 3 characters.';
    }
    return true;
};

// // Function to validate color inputs
// const validateColor = (input) => {
//     if (input.startsWith('#')) {
//         // Check if the input is a valid color code
//         const colorCodeRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
//         if (!colorCodeRegex.test(input)) {
//             return 'Please enter a valid color code (e.g., #FF0000).';
//         }
//     } else {
//         // Check if the input is a valid color name
//         const colorName = input.toLowerCase();
//         if (!colorNames[colorName]) {
//             return 'Please enter a valid color name.';
//         }
//     }
//     return true;
// };

// User questions array
const questions = [
    {
        type: 'input',
        message: 'Please enter a 3 character company name/abbreviation.',
        name: 'text',
        validate: validateText
    },
    {
        type: 'input',
        message: 'Please enter a color or color code for the company name.',
        name: 'color',
        // validate: validateColor
    },
    {
        type: 'list',
        message: 'What shape would you like to use for your logo?',
        name: 'shape',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        message: 'Please enter a color or color code for the background of the shape.',
        name: 'background',
        // validate: validateColor
    }
];

inquirer.prompt(questions).then(answers => {
    let shape;

    switch (answers.shape) {
        case 'triangle':
            shape = new Triangle(answers.text, answers.color, answers.background);
            break;
        case 'circle':
            shape = new Circle(answers.text, answers.color, answers.background);
            break;
        case 'square':
            shape = new Square(answers.text, answers.color, answers.background);
            break;
        default:
            console.error('Invalid shape.');
            return;
    }

    const svgContent = shape.generateSvgContent();

    fs.writeFile('./examples/logo.svg', svgContent, err => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('SVG file generated successfully!');
        }
    });
});
