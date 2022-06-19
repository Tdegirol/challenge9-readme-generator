// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none'){
    const licenseBadge = '';
    return licenseBadge
  }else{
    const licenseBadge = '[![License](https://img.shields.io/badge/license-'+license+'-blue)](https://opensource.org/licenses/'+license+')';
    return licenseBadge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //i don't understand the purpose of this function? link/badge are together in function above.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //also don't understand why we would need this function?
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <a id="license"></a>
  ## Licensing:
  If applicable, please click on this badge to get more information on the chosen license:
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Contributing](#contributions)
  - [Testing](#tests)
  - [Questions](#questions)

  <a id="description"></a>
  ## Description
  ${data.description}

  <a id="install"></a>
  ## Installation 
  ${data.install}

  <a id="usage"></a>
  ## Usage 
  ${data.usage}
  ![Media-Queries-Image](./utils/usage-image.jpg)

  <a id="contributions"></a>
  ## Contributing
  ${data.contributions}

  <a id="tests"></a>
  ## Testing
  ${data.tests}

  <a id="questions"></a>
  ## Questions 
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
