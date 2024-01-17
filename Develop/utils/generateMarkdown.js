
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[badge](https://img.sheilds.io/badge/License-${license}-green.svg)`
  }
  return ``;
}

function renderLicenseLink(license) {  
  if (license !== "none") {
    return `- [License](#license)`
  }
  return ``;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
    This application is covered by the ${license} license.`
  }
  return ``;

}
//   const licenseBadges = {    
//     'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
//     'GNU Public v3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
//     'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
//     'Boost Software 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
//     'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
//     'Eclipse Public 2.0': 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
//     'GNU Affero General Public v3.0': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
//     'GNU General Public v2.0': 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
//     'Mozilla Public 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
//   };

//   if (license in licenseBadges) {
//     return licenseBadges[license];
//   } else {
//     return '';
//   }
// }

// function renderLicenseLink() {

//   const licenseLinks = {

//   'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
//   'GNU Public v3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
//   'MIT': 'https://opensource.org/licenses/MIT',
//   'Boost Software 1.0': 'https://www.boost.org/users/license.html',
//   'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
//   'Eclipse Public 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
//   'GNU Affero General Public v3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
//   'GNU General Public v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
//   'Mozilla Public 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
//   };

// }

// function generateLicenseSection(license) {
  
//   let licenseText = '';

//   if (license === 'Apache 2.0') {
//     licenseText = 'This project is licensed under Apache 2.0 license.'
//   } else if (license === 'GNU Public v3.0') {
//     licenseText = 'This project is licensed under GNU Public v3.0 license.'
//   } else if (license === 'MIT') {
//     licenseText = 'This project is licensed under MIT license.'
//   } else if (license === 'Boost Software 1.0') {
//     licenseText = 'This project is licensed under Boost Software 1.0 license.'
//   } else if (license === 'Creative Commons Zero v1.0 Universal') {
//     licenseText = 'This project is licensed under Creative Commons Zero v1.0 Universal license.'
//   } else if (license === 'Eclipse Public 2.0') {
//     licenseText = 'This project is licensed under Eclipse Public 2.0 license.'
//   } else if (license === 'GNU Affero General Public v3.0') {
//     licenseText = 'This project is licensed under GNU Affero General Public v3.0 license.'
//   } else if (license === 'GNU General Public v2.0') {
//     licenseText = 'This project is licensed under GNU General Public v2.0 license.'
//   } else if (license === 'Mozilla Public 2.0') {
//     licenseText = 'This project is licensed under Mozilla Public 2.0 license.'
//   }
  
//   return licenseText;
//   }





function generateMarkdown(data) {
  
  return`
  
  # ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.projectDescription}

  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  ${renderLicenseLink(data.license)}
  * [Badges](#Badges)
  * [Features](#Features)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Badges:  
  ${data.badges}

  ## Features:
  ${data.features}

  ## Contributing:
  ${data.howtoContribute}

  ## Tests:
  ${data.tests}

  ## Questions:
  If you have any questions, please reach out to me at ${data.emailAddress}. You can also find more of my work on [GitHub](https://github.com/${data.gitHubUsername}).
  `;

}
  module.exports = generateMarkdown;


