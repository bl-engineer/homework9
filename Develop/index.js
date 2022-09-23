// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown.js');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'application_title',
        message: "Please Enter your application title: "
    },
    {
        type: 'input',
        name: 'description',
        message: "Please Enter a description for your application: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please Enter installation instructions for your application: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please Enter usage documentations for your application: "
    },
    {
        type: 'input',
        name: 'guidelines',
        message: "Please Enter contribution guidelines for your application: "
    },
    {
        type: 'input',
        name: 'test',
        message: "Please Enter test instructions for your application: "
    },
    {
        type: 'list',
        name: 'application_license',
        message: "Please Select a license for your application: ",
        choices: ['Apache 2.0', 'Creative Commons 0', 'BSD 3-Clause', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Unlicense'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'github_username',
        message: "Please Type your GitHub username: "
    },
    {
        type: 'input',
        name: 'email_address',
        message: "Please Type your email address: "
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
            writeToFile("readme.md", answers);
        })
        .catch((error) => {
            console.log(error);
    });
}

// Function call to initialize app
init();
