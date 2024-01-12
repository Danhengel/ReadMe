const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');



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

function renderLicenseBadge(license) {
  const licenseBadges = {    
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU Public v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Boost Software 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Creative Commons Zero v1.0 Universal': '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
    'Eclipse Public 2.0': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'GNU Affero General Public v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'Mozilla Public 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  };

  if (license in licenseBadges) {
     return `![License Badge](${licenseBadges[license]})`;
  }
    return '';
}
  
//   if (licenseLinks.hasOwnProperty(license)) {
//     return licenseLinks[license];
//   } else {
//     return 'https://example.com/default-license';
//   }
// }

// function renderLicenseSection(license) {}


// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
//   } else {
//   //   return '## Licenses 
//   //   This project is covered under the ${license} license.'
//   }
// }

function generateMarkdown(data) {

  return `# ${data.title}'
  }

${renderLicenseBadge(data.licenses)}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  # ${data.ProjectTitle} 
  ## Description:
  ${data.ProjectDescription}
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
  ${data.Installation}
  ## Usage:
  ${data.Usage}
  ## Credits:
  ${data.Credits}
  ## License:
  ${data.License}
  ## Badges:
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  THis application can be found at the following: 
  ${data.Badges}
  ## Features:
  ${data.Features}
  ## Contributing:
  ${data.HowtoContribute}
  ## Tests:
  ${data.Tests}
  ## Questions:
  Please send your questions [here](mailto:${data.emailAddress}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.GitHubUsername}](https://github.com/${data.GitHubUsername}).`;
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