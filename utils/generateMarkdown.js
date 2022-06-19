// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ## Table of Contents
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [Contributing](#contributions)
    - [Testing](#tests)
    - [Questions](#questions)

  ## Description <a name="description"></a>
  ${data.description}

  ## Installation <a name="install"></a>
  ${data.install}

  ## Usage <a name="usage"></a>
  ${data.usage}
  ![Media-Queries-Image](./utils/usage-image.jpg)

  ## Contributing <a name="contributions"></a>
  ${data.contributions}

  ## Testing <a name="tests"></a>
  ${data.tests}

  ## Questions <a name="questions"></a>
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
