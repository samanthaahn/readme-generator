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
    case 'BSD':
        licenseBadges = '[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
    default:
        licenseBadges = '';
        break; 
}
return licenseBadges;
};

