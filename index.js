const inquirer = required('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, contributing, tests, license }) => 

`# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}`;



inquirer
.prompt([
{
    type: 'input',
    name: 'description',
    message: 'What is your project about?'
},
])
.then((answer) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('readme.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created read.me file!')
    );
});


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
