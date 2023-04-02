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
    name: 'title',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'What is your project about?'
},
{
    type: 'input',
    name: 'installation',
    message: 'Describe installation procedure or write N/A if not applicable.'
},
{
    type: 'input',
    name: 'usage',
    messag: 'Describe the usage features of your project.',
},
{
    type: 'input',
    name: 'contributing',
    message: 'List out any contributing sites or sources you used.'
},
{
    type: 'input',
    name: 'tests',
    messag: 'Provide code examples and how to run them in this section, if applicable.',
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
