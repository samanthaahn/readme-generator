function renderLicenseBadge(license) {
if (!license) {
    return '';
}

let badge;
switch (license) {
    case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    case 'Apache':
        badge = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'ISC':
        badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        break;
    default:
        badge = '';
        break; 
}
return badge;
};

function renderLicenseLink(license) {
if (!license) {
    return '';
}

let link;
switch (license) {
    case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
    case 'Apache':
        link = 'https://opensources.org/licenses/Apache-2.0';
        break;
    case 'ISC':
        link = 'https://opensource.org/licenses/ISC';
        break;
    default:
        link = '';
        break;
}
return link; 
}

function renderLicenseSection(license) {
if (!license || license === 'None') {
    return `## License
    This project does not have a license.`;
}
const link = renderLicenseLink(license);
return `## License
This project uses the licese [${license}](${link}).`;
}

function generateMarkdown(data) {

    const licenseSection = renderLicenseSection(data.license);    
const licenseBadge = renderLicenseBadge(data.license);


return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
The license used for the project was: ${license}

## Questions
If there are any questions regarding this project, repo, or issues, you can go to my GitHub profile: ${data.githubLink}. You can also search me up by my username: ${data.githubUsername}, and/or email me at: ${data.githubEmail}.
`;
};

module.exports = generateMarkdown; 