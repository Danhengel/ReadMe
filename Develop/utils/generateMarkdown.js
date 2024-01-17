
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
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
    This project is licensed under ${license} license.`
  }
  return ``;

}

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


