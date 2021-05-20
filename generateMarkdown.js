// All License Badge Variables called upon in the switch function. Includes let(s) for license text descriptions to be called upon as well - 5.20.21

let none = "No License"
letnoneText = ""
let apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
let apacheText = ""
let gnu = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
let gnuText = ""
let mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
letmitText = ""
let bsd2 = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
let bsd2Text = ""
let bsd3 = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
letbsd3Text = ""
letbsl1 = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
letbsl1Text = ""
letccz1 = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]"
letccz1Text = ""
let epl = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
let eplText = ""
letgnu3 = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
letgnu3Text = ""
letgnu2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
let gnu2Text = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
let gnulesser = ""
let mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
letmozillaText = ""
let theunlicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
let theunlicenseText = ""
// calls to return the URL and License Text descriptions
let url = ""
let licensetext = ""

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "None":
      url = ""
      break;
    case "Apache License 2.0":
      url = apache
      break;
    case "GNU General Public License v3.0":
      url = gnu
      break;
    case "MIT":
      url = mit
      break;
    case "BSD 2-Clause Simplified License":
      url = bsd2
      break;
    case "BSD 3-Clause New or Revised":
      url = bsd3
      break;
    case "Boost Software License 1.0":
      url = bsl1
      break;
    case "Creative Commons Zero v1.0 Universal":
      url = ccz1
      break;
    case "Eclipse Public License 2.0":
      url = epl
      break;
    case "GNU Affero General Public License v3.0":
      url = gnu3
      break;
    case "GNU General Public License v2.0":
      url = gnu2
      break;
    case "GNU Lesser General Public License v2.1":
      url = gnulesser
      break;
    case "Mozilla Public License 2.0":
      url = mozilla
      break;
    case "The Unlicense":
      url = theunlicense
      break;
  }
  return url
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "None":
      licensetext = ""
      break;
    case "Apache License 2.0":
      licensetext = ""
      break;
    case "GNU General Public License v3.0":
      licensetext = ""
      break;
    case "MIT":
      licensetext = ""
      break;
    case "BSD 2-Clause Simplified License":
      licensetext = ""
      break;
    case "BSD 3-Clause New or Revised":
      licensetext = ""
      break;
    case "Boost Software License 1.0":
      licensetext = ""
      break;
    case "Creative Commons Zero v1.0 Universal":
      licensetext = ""
      break;
    case "Eclipse Public License 2.0":
      licensetext = ""
      break;
    case "GNU Affero General Public License v3.0":
      licensetext = ""
      break;
    case "GNU General Public License v2.0":
      licensetext = ""
      break;
    case "GNU Lesser General Public License v2.1":
      licensetext = ""
      break;
    case "Mozilla Public License 2.0":
      licensetext = ""
      break;
    case "The Unlicense":
      licensetext = ""
      break;
  }
  return licensetext
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}
  ## Table of Contents
  ${data.tableofcontents}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Project Usage 
  ${data.usage}
  ## License Information
  ${renderLicenseSection(data.license)}
  ## Project Contributors 
  ${data.contributing}
  ## Testing 
  ${data.tests}
  ## Further Questions?
  ${data.questions}
  ### Github Profile Page
  [Github Profile](https://github.com/${data.github})
  ### Contact
  [Email](mailto:${data.emailaddress})
  `
    ;
}

module.exports = generateMarkdown;


