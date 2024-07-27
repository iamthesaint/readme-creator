// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// use prompt to ask user for input for the required readme sections
// title, description, installation, usage, contribution, test, license, github username, & email
const questions = [
    {
        type: 'input',
        name: 'title', // key
        message: 'What is the title of your project? :'
    },
    {
        type: 'input',
        name: 'description', // key
        message: 'Provide a detailed description of what your project is/does :'
    },
    {
        type: 'input',
        name: 'installation', // key
        message: 'Does it require any specific installation instructions? :'
    },
    {
        type: 'input',
        name: 'usage', // key
        message: 'Provide guidelines for usage :'
    },
    {
        type: 'input',
        name: 'contributing', // key
        message: 'Provide contribution guidelines :'
    },
    {
        type: 'input',
        name: 'testing', // key
        message: 'List any test instructions :'
    },
    {
        type: 'list',
        name: 'license', // key
        message: 'Choose a license for your project :',
        choices: ['MIT', 'Apache', 'Eclipse', 'Mozilla', 'None']
    },
    {
        type: 'input',
        name: 'username', // key
        message: 'Enter your GitHub username :'
    },
    {
        type: 'input',
        name: 'email', // key
        message: 'Enter your email address :',
        validate: function (email) {
            // validate email format
            const re = /\S+@\S+\.\S+/;
            return re.test(email) ? true : 'Please enter a valid email address.';
        }
    }
];
// TODO: Create a function to write README file
// make sure file uses utf8 encoding

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Thanks for using README creator! Your file has been created.');
        }
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();

