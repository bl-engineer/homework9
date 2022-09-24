// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project_title',
        message: "Enter your project title: "
    },
    {
        type: 'input',
        name: 'Description',
        message: "Enter a description for your application: "
    },
    {
        type: 'input',
        name: 'Installation',
        message: "Enter installation instructions for your application: "
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Enter usage documentations for your application: "
    },
    {
        type: 'input',
        name: 'Credits',
        message: "Enter collaborators or contributors to your application: "
    },
    {
        type: 'input',
        name: 'Tests',
        message: "Enter testing instructions for your application: "
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
        name: 'GitHub_username',
        message: "Type your GitHub username: "
    },
    {
        type: 'input',
        name: 'Email_address',
        message: "Type your email address: "
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
