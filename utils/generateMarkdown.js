
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// license badge = image that shows the license

function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "MIT":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Apache":
      badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "Eclipse":
      badge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      break;
    case "Mozilla":
      badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
    default:
      badge = "";
      break;
  }
  return badge + `\n`;
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// license link = url link to license info

function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// license section = section of README that describes the license from user input

function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "None") {
    licenseSection += `## License\n`;
    licenseSection += renderLicenseBadge(license) + `\n`;
    licenseSection += `This project is licensed under the ${license} license.\n` + `Please see ` + renderLicenseLink(license) + ` for more information.\n`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// generate markdown

function generateMarkdown(data) {
  let markdown = `# ${data.title}\n`;
  markdown += renderLicenseBadge(data.license) + `\n`;
  markdown += `## Description\n`;
  markdown += `${data.description}\n`;
  markdown += `## Table of Contents\n`;
  markdown += `- [Installation](#installation)\n`;
  markdown += `- [Usage](#usage)\n`;
  markdown += `- [License](#license)\n`;
  markdown += `- [Contributing](#contributing)\n`;
  markdown += `- [Tests](#tests)\n`;
  markdown += `- [Questions](#questions)\n`;
  markdown += `## Installation\n`;
  markdown += `${data.installation}\n`;
  markdown += `## Usage\n`;
  markdown += `${data.usage}\n`;
  markdown += `## License\n`;
  markdown += renderLicenseSection(data.license) + `\n`;
  markdown += `## Contributing\n`;
  markdown += `${data.contributing}\n`;
  markdown += `## Tests\n`;
  markdown += `${data.testing}\n`;
  markdown += `## Questions\n`;
  markdown += `If you have any questions, please contact me at ${data.email} or visit my GitHub page: [${data.username}](http://github.com/${data.username})\n`;

  return markdown;
}


export default generateMarkdown;