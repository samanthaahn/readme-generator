const inquirer = require('inquirer');
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
    name: 'Usage',
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
.then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('readme.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md file!')
    );
});




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
