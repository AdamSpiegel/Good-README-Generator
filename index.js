// Inquire and fs installed packages necessary to run application.
// generateMardown function need to for module.export and rawListeners needed for raw list via line 36
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown.js');
const { rawListeners } = require("process");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please enter your project description.",
        name: "description"
    },

    {
        type: "input",
        message: "What are your installation instructions?",
        name: "installation"
    },

    {
        type: "input",
        message: "How would you describe your project usage?",
        name: "usage"
    },

    {
        type: "rawlist",
        message: "Please choose your project license (Arrow Down)",
        name: "license",
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-Clause Simplified License', 'BSD 3-Clause "New or "Revised', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },

    {
        type: "input",
        message: "Who contributed to the creation of this project?",
        name: "contributing"
    },

    {
        type: "input",
        message: "What are your testing instructions?",
        name: "tests"
    },

    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "emailaddress"
    }

]

// Creating the writeToFile function utilizing the fs package to generate data to README.md
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    );
}

// Utilizes init function to prompt user with questions, and then console log there answers. Finally proceeding to write the actual file via the generateMardown function
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    })

}

// Function call to initialize app
init();