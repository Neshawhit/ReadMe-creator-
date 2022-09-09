// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
//const quetions =require('.data/questions')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    // question: "What is your Project's name?",
    // "what is a description of your project?",
    // "what type of license does your project require?",
    // "what is the usage for this project?",
    // "what type of installations are needed for your project?"
{ 
  type: "input",
  name: "title",
  message: "What is your Project's name?",  
},
{ 
  type: "input",
  name: "description",
  message: "what is a description of your project?",  
},
{ 
  type: "list",
  name: "license",
  message: "what type of license does your project require?",
  choices: [
    "MIT",
    "Apache",
    "ISC",
    "none",

  ],  
},
{ 
  type: "input",
  name: "usage",
  message: "what is the usage for this project?",  
},
{ 
  type: "input",
  name: "installation",
  message: "what type of installations are needed for your project?",  
},
{ 
  type: "input",
  name: "contribution",
  message: "what are the contribution guidelines of this project?",  
},
{ 
  type: "input",
  name: "test",
  message: "What type of test was used for your project?",  
},
{ 
  type: "input",
  name: "email",
  message: "What's your email?",  
},
{ 
  type: "input",
  name: "linkedin",
  message: "What's your LinkedIn?", 
  default: "http://linkedin.com" 
},
{ 
  type: "input",
  name: "github",
  message: "What's your github?",
  default:"http://github.com"  ,
},


];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
fs.writeFileSync("readme.md", generateMarkdown(response))
    })
};

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README