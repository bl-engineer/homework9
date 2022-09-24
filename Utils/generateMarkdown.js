// A function that returns a license badge based on which license is passed in
// If there is no license,then it returns an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license == 'Creative Commons 0') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license == 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license == 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  return '';
}


// A function that returns the license section of README
// If there is no license,then it returns an empty string
function renderLicenseSection(license) {
  return `## License:
This application is published under the ${license} license.
`;
}

// A function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.License);
  var output = renderLicenseBadge(data.License)
  output += `
 # ${data.Project_title}
`;

// Give a description
output += `${data.Description}
`;

//Adds table of contents
output += `## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
`;
if(license != '') {
  output += `
3. [License](#license)
4. [Credits](#credits)
5. [Tests](#tests)
6. [Contact](#contact)
`;
} else {
  output += `
3. [Credits](#credits)
4. [Tests](#tests)
5. [Contact](#contact)
`;
}

// Installation
output += `## Installation 
${data.Installation}
`;

// Usage
output += `## Usage
${data.Usage}
`;

// License
if(license != '') {
  output += license;
}

// Contributing
output += `## Credits
${data.Credits}
`;

// Tests
output += `## Tests
${data.Tests}
`;

// Questions asked by contacting creator of the app
output += `## Contact
Github:(https://github.com/${data.GitHub_username})  
Email: ${data.Email_address}`;

return output;

}

module.exports = generateMarkdown;
