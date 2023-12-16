// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMd = require('./utils/generateMarkdown.js');


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'what is your full name?',
        name: 'fullname'
      },
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName'
      },
      { // MIT
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['mit', 'apache', 'gplv3']
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project: '
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should this be used?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?'
      },
      {
        type: 'input',
        name: 'testing',
        message: 'How should this be tested?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'credit',
        message: 'Who would you like to give credit to for this project?'
      }
    ])
    .then((response) => {
      genMd.generateMarkdown(response);
    })
}

// Function call to initialize app
init();
