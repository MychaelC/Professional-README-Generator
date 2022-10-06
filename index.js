// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe installation instructions for your project"
    },
    {
        type: "list",
        name: "license",
        message: "What license is your project covered under?",
        choices: ["None", "LGPL", "MIT", "MPL", "Unlicensed", "AGPL", "GPL", "Apache", "Open Source"]
    },
    {
        type: "input",
        name: "tests",
        message: "Describe the test instructions for your project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe the contribution guidelines of your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
    },
];

// then((answers) => {
//     console.log(answers);
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent,(err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// }) 
// TODO: Create a function to write README file
function promptUser() {
    return inquirer.prompt([...questions]);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await promptUser();
        const md = generateMarkdown(data);

        await writeFileAsync("README.md", md);
    } catch (err){
        console.log(err);
    }
}

// Function call to initialize app
init();
