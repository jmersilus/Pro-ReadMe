// TODO: Include packages needed for this application - 
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your Project?'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
          },
        ])
    }
    const promptBody = descriptionData => {
        console.log(`
        ==================
        Description below
        ==================
        `);

        if (!descriptionData.info) {
            descriptionData.info =[];
        }
        return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Explain how to install your project',
          },
          {
            type: 'input',
            name: 'Credits',
            message: 'Who helped you accomplish this feat',
          },
          {
            type: 'confirm',
            name: 'license1',
            message: 'Would you like to include a Community License',
            default: true
          },
          {
            type: 'confirm',
            name: 'license2',
            message: 'Would you like to include a MIT License',
            default: true
          },
          {
            type: 'confirm',
            name: 'license3',
            message: 'Would you like to include a GNU GPLv3 License',
            default: true
          }
        ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
userPrompts()
.then(promptBody)


