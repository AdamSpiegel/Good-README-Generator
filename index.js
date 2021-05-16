// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
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
        message: "Create a table of contents.",
        name: "tableofcontents"
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
        type: "input",
        message: "Please choose your project license",
        name: "license",
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-Clause Simplified License', 'BSD 3-Clause "New or "Revised', 'Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1','Mozilla Public License 2.0', 'The Unlicense']
    },

    {
        type: "input",
        message: "What contributed to the creation of this project?",
        name: "contributing"
    },

    {
        type: "input",
        message: "Where there any tests run on this project? Describe.",
        name: "tests"
    },

    {
        type: "input",
        message: "Do you have any futher questions?",
        name: "questions"
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

]).then(answers => {
    // console.log(answers);
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Bootstrap 5.0 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
    </head>
    
    <body>
    <p>Title: ${answers.title}</p>
    <p>Description: ${answers.description}</p>
    <p>TableOfContents: ${answers.tableofcontents}</p>
    <p>Installation: ${answers.installation}</p>
    <p>Usage: ${answers.usage}</p>
    <p>Contributing: ${answers.contributing}</p>
    <p>Tests: ${answers.tests}</p>
    <p>Questions ${answers.questions}</p>
    <p>Github ${answers.github}</p>
    <p>EmailAddress ${answers.emailaddress}</p>

        <!-- Bootstrap Bundlde w/ Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
    </body>
    
    </html>`
    // console.log(html);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.writeFile("index.html", html, err => err ? console.error(err) : "");
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
