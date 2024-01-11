const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


function renderLicenseBadge(license) {
if (!license) {
  return '';
} else {
  return '[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})'
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://1besson.mit-license.org/'
  }
  if (license === 'GPL') {
    return 'https://perso.crans.org/besson/LICENSE/by-nd/4.0'
  }
  if (license === 'CC--0') {
    return 'https://creativecommons.org/license/by-nd/4.0'
  }
}

// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
//   } else {
//     return '## Licenses 
//     This project is covered under the ${license} license.'
//   }
// }

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licenses)}

  # ${data.ProjectTitle} 
  ## Description:
  ###${data.ProjectDescription}
  ## Table of Contents:
  ###* [Installation](#Installation)
  ###* [Usage](#Usage)
  ###* [Credits](#Credits)
  ###* [License](#License)
  ###* [Badges](#Badges)
  ###* [Features](#Features)
  ###* [Contributing](#Contributing)
  ###* [Tests](#Tests)
  ## Installation:
  ###${data.Installation}
  ## Usage:
  ###${data.Usage}
  ## Credits:
  ###${data.Credits}
  ## License:
  ###${data.License}
  ## Badges:
  ###${data.Badges}
  ## Features:
  ###${data.Features}
  ## Contributing:
  ###${data.HowtoContribute}
  ## Tests:
  ###${data.Tests}
  ## Questions:
  Please send your questions [here](mailto:${data.emailAddress}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.GitHubUsername}](https://github.com/${data.GitHubUsername}).`;
  }
  
  module.exports = generateMarkdown;