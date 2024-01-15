const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const license = ['Apache 2.0', 'GNU Public v3.0','MIT', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public 2.0', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'Mozilla Public 2.0']


const questions = [
      
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Add Application Name / Project Title?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of Application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Directions on how to install Application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this application?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add Credits related to the Application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license from following:',
            choices: [
              "Apache 2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "Mozilla Public 2.0",
              "Open",
            ],
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Add any Badges realted to Application.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Add Features realted to Application.',
    },
    {
        type: 'input',
        name: 'howtoContribute',
        message: 'How does anyone Contribute to the building of this Application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How and what tests are related to this Application.',
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    }
    ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    
        console.log("Done! You will find your README file available.");
    });
};

function init () {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};
 
init()