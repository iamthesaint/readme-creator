// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// license badge = image that shows the license

function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)])`;
    } else if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } else if (license === 'Eclipse') {
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    } else if (license === 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    } else {
        return '';
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// license link = url link to license info

function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache 2.0') {
        return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Eclipse') {
        return `[Eclipse](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license === 'Mozilla') {
        return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`;
    } else {
        return '';
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// license section = section of README that describes the license from user input

function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License
        This project is utilizing the ${license} license.`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}