// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter your project title: "
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a description for your application: "
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: "Enter installation instructions for your application: "
    },
    {
        type: 'input',
        name: 'usage_information',
        message: "Enter usage information for your application: "
    },
    {
        type: 'list',
        name: 'License',
        message: "Select a license for your application: ",
        choices: ['Apache 2.0', 'Creative Commons 0', 'BSD 3-Clause', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Unlicense'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: "Enter contribution guidelines to your application: "
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Enter test instructions for your application: "
    },
   
    {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address: "
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    var readmeFile = generateMarkdown(data);
    fs.appendFile(fileName, readmeFile, (err) =>
    err ? console.error(err) : console.log('Done!')
);
}

// A function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README.md", answers);
        })
        .catch((error) => {
            console.log(error);
    });
}

// Function call to initialize app
init();
