const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');+

function renderLicenseBadge(license) {
  const licenseBadges = {    
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU Public v3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Boost Software 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
    'Eclipse Public 2.0': 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'GNU Affero General Public v3.0': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'GNU General Public v2.0': 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'Mozilla Public 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  };

  if (license in licenseBadges) {
     return `![license Badge](${licenseBadges[license]})`;
  }
    return '';
}

function renderLicenseLink(license) {
  const licenseLinks = {
  'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  'GNU Public v3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  'MIT': 'https://opensource.org/licenses/MIT',
  'Boost Software 1.0': 'https://www.boost.org/users/license.html',
  'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'Eclipse Public 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
  'GNU Affero General Public v3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
  'GNU General Public v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  'Mozilla Public 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
  'none': '',
  };

  if (licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  }
  return 'https://opensource.org/licenses';
}


function generateMarkdown(data) {
  return`# ${data.projectTitle}<br>
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  ## Description:
  ${data.projectDescription}
  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
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
  ## License:
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)] <br>
  ${data.license} <br>
  ${data.license.licenseLinks} <br>
  ## Badges:  
  ${data.badges}
  ## Features:
  ${data.features}
  ## Contributing:
  ${data.howtoContribute}
  ## Tests:
  ${data.tests}
  ## Questions:
  Please send your questions to
   - Emial: [${data.emailAddress}](mailto:user@example.com) <br>
  or visit 
   - GitHub: [${data.gitHubUsername}](https://github.com/${data.gitHubUsername}).`;
  }

  module.exports = generateMarkdown;



















  // 'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  // 'GNU Public v3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  // 'MIT': 'https://opensource.org/licenses/MIT',
  // 'Boost Software 1.0': 'https://www.boost.org/users/license.html',
  // 'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  // 'Eclipse Public 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
  // 'GNU Affero General Public v3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
  // 'GNU General Public v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  // 'Mozilla Public 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
  // 'none': '',











  
// function renderLicenseBadge(license) {

// const licenseBadges = {
//   if (license === 'Apache 2.0') {
//     return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//   }
//   if (license === 'GNU Public v3.0') {
//     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//   }
//   if (license === 'MIT') {
//     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   }
//   if (license === 'Boost Software 1.0') {
//     return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
//   }
//   if (license === 'Creative Commons Zero v1.0 Universal') {
//     return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
//   }
//   if (license === 'Eclipse Public 2.0') {
//     return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
//   }
//   if (license === 'GNU Affero General Public v3.0') {
//     return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
//   }
//   if (license === 'GNU General Public v2.0') {
//     return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
//   }
//   if (license === 'Mozilla Public 2.0') {
//     return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
//   }
//   if (license === 'none') {
//     return '[none]'
//   }
// }