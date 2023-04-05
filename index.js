const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) => {
    const { title, description, installation, usage, contributing, tests, license, licenseBadges, githubUsername, githubEmail, githubLink } = answers;  

`# ${title}

${licenseBadges}

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
The license used for the project was: ${license}

## Questions
If there are any questions regarding this project, repo, or issues, you can go to my GitHub profile: ${githubLink}. You can also search me up by my username: ${githubUsername}, and/or email me at: ${githubEmail}.
`;
};

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
{
type: 'list',
name: 'license',
message: 'Which license would you like to use for your project?',
choices: ['MIT', 'Apache', 'BSD'],
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
])

.then((answers) => {

    const readMeContent = generateReadMe(answers);

    let licenseBadges;
switch (answers.license) {
    case 'MIT':
        licenseBadges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    case 'Apache':
        licenseBadges = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'BSD':
        licenseBadges = '[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
    default:
        licenseBadges = '';
}

    fs.writeFile('/dist/readme.md', Buffer.from(readMeContent), 'utf8', (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md file!')
    );
});




