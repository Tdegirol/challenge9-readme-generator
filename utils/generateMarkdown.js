// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = '[![License](https://img.shields.io/badge/license-${'+license+'}-blue)](https://shields.io)';
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = '(https://opensource.org/licenses/'+license+')';
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [Contributing](#contributions)
    - [Testing](#tests)
    - [Questions](#questions)

  <a name="description"></a>
  ## Description
  ${data.description}

  <a name="install"></a>
  ## Installation 
  ${data.install}

  <a name="usage"></a>
  ## Usage 
  ${data.usage}
  ![Media-Queries-Image](./utils/usage-image.jpg)

  <a name="contributions"></a>
  ## Contributing
  ${data.contributions}

  <a name="tests"></a>
  ## Testing
  ${data.tests}

  <a name="questions"></a>
  ## Questions 
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
