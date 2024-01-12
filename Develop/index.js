const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');


function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt([
      
    {
        type: 'input',
        name: 'ProjectTitle',
        message: 'Add Application Name / Project Title?',
    },
    {
        type: 'input',
        name: 'ProjectDescription',
        message: 'What is the description of Application?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Directions on how to install Application.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the purpose of this application?',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Add Credits related to the Application.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Select license(s) from following:',
            choices: [
              "Apache2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "Mozilla Public 2.0",
              "none",
            ],
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Add any Badges realted to Application.',
    },
    {
        type: 'input',
        name: 'Features',
        message: 'Add Features realted to Application.',
    },
    {
        type: 'input',
        name: 'HowtoContribute',
        message: 'How does anyone Contribute to the building of this Application?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How and what tests are related to this Application.',
    },
    {
        type: 'input',
        name: 'GitHubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    }

    ]).then(function(data) {
        console.log("Generating Markdown...");
        writeToFile("README.md", generateMarkdown({...data}));  
  });
  }
 
  init()