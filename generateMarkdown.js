function renderLicenseBadge(license) {
if (!license) {
    return '';
}

let licenseBadges;
switch (license) {
    case 'MIT':
        licenseBadges = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    case 'Apache':
        licenseBadges = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'ISC':
        licenseBadges = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        break;
    default:
        licenseBadges = '';
        break; 
}
return licenseBadges;
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