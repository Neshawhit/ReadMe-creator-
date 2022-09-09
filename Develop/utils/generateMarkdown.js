// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT")
  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if ( license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

# Table of Contents
1. [Description](#description)
2. [License](#license)
3. [Usage](#usage)
## Description

${data.description}
## License

${data.license}
## Usage
${data.usage}
## installation
${data.installation}
## test
${data.test}
## contribution
${data.contribution}

## questions
For any questions you can reach out to me @
${data.email} 
</br>
 http://github.com/${data.github}
 </br>
 http://linkedin.com/${data.linkedin}
`;
}

module.exports = generateMarkdown;
