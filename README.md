# Logo Generator

## Description
The Logo Generator is a Node.js command-line application that allows users to generate a simple logo for their projects. It prompts the user to enter text, select a color and shape, and saves the generated logo as an SVG file. This application is designed to provide an easy and cost-effective solution for freelance web developers who need logos without relying on graphic designers.

## Installation
To use the Logo Generator, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project's root directory in your terminal.
3. Run the command `npm install` to install the required dependencies.

## Usage
To use the Logo Generator, follow these steps:
1. Open your terminal and navigate to the project's root directory.
2. Run the command `node index.js` to start the application.
3. You will be prompted to enter up to three characters for the logo text.
4. Next, you will be asked to enter the color keyword or hexadecimal number for the text color.
5. You will then be presented with a list of shapes (circle, triangle, and square) to choose from. Enter the corresponding number for your desired shape.
6. Finally, enter the color keyword or hexadecimal number for the shape's color.
7. Once you have entered input for all the prompts, an SVG file named `logo.svg` will be created.
8. The application will display the message "Generated logo.svg" in the command line.
9. Open the `logo.svg` file in a browser to view the 300x200 pixel image that matches the criteria you entered.

## Walkthrough Video
Click [here](https://drive.google.com/file/d/1TamBa3ym0GjGGeYe0E0ZSgPz49ks333h/view) to watch a walkthrough video demonstrating the functionality of the Logo Generator and its successful execution of all tests.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Questions or Issues
If you have any questions or issues with the Logo Generator, please feel free to [open an issue](https://github.com/jamalm06/svg-logo-maker/issues) on the GitHub repository. We will be happy to assist you.

## Contributing
We welcome contributions to the Logo Generator. To contribute, follow these steps:
1. Fork this repository.
2. Create a new branch.
3. Make your desired changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes.


