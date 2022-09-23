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
  const license = renderLicenseSection(data.application_license);
  var output = renderLicenseBadge(data.application_license)
  output += `
 # ${data.application_title}

`;
//   return `# ${data.title}

// `;

// Description
output += `${data.description}
`;

//Table of contents
output += `## Application's Table of Contents
1. [Installation](#installation-instructions)
2. [Usage](#usage-guide)
`;
if(license != '') {
  output += `3. [License](#license)
4. [Guidelines](#contribution-guide)
5. [Instructions](#test-instructions)
6. [Questions](#questions)
`;
} else {
  output += `3. [Guidelines](#contribution-guide)
4. [Instructions](#test-instructions)
5. [Questions](#questions)
`;
}

// Installation
output += `## Installation Instructions
${data.installation}
`;

// Usage
output += `## Usage Guide
${data.usage}
`;

// License
if(license != '') {
  output += license;
}

// Contributing
output += `## Contribution Guide
${data.guidelines}
`;

// Tests
output += `## Test Instructions
${data.test}
`;

// Questions
output += `## Questions
Github: [${data.github_username}](https://github.com/${data.github_username})  
Email: ${data.email_address}`;

return output;
}

module.exports = generateMarkdown;
