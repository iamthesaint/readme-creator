// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import prompt from 'inquirer/lib/ui/prompt.js';

// TODO: Create an array of questions for user input
// use prompt to ask user for input for the required readme sections
// title, description, installation, usage, contribution, test, license, github username, & email

const questions = [
    prompt ({
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }),
    prompt ({
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    }),
    prompt ({
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    }),
    prompt ({
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    }),
    prompt ({
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
    }),
    prompt ({
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.'
    }),
    prompt ({
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    }),
    prompt ({
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    }),
    prompt ({
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    })
];

// figure out how to create a function that will take the user input and generate a markdown file
// use fs to write the file
// use generateMarkdown.js to create the markdown file

// TODO: Create a function to write README file
// data must be a string -- already done
// use template literals to create the file sections
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
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
