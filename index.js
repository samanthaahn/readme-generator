const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


const questions = [
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
{
type: 'list',
name: 'license',
message: 'Which license would you like to use for your project?',
choices: ['MIT', 'Apache', 'ISC', 'None'],
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'Please enter your GitHub user name:',
},
{
    type: 'input',
    name: 'githubEmail',
    message:'Please enter your GitHub email:',
},
{
    type: 'input',
    name: 'githubLink',
    message: 'Please enter the link to your GitHub:'
},
];

inquirer.prompt(questions)
.then(answers => {

    const markdown = generateMarkdown(answers);

    fs.writeFile('./dist/readme.md', markdown, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md file!')
    );
});





