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
letccz1 = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
letccz1Text = ""
let epl = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
let eplText = ""
letgnu3 = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
letgnu3Text = ""
letgnu2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
let gnu2Text = ""
let gnulesser = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
let gnulesserText = ""
let mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
letmozillaText = ""
let theunlicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
let theunlicenseText = ""
// calls to return the URL and License Text descriptions
let url = ""
let licensetext = ""

// Function utizliing switch which pulls in url holding the License Badges
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

// Function utizliing switch which pulls in license text  holding the License Badge descriptions for each user selected badge.
function renderLicenseSection(license) {
  switch (license) {
    case "None":
      licensetext = ""
      break;
    case "Apache License 2.0":
      licensetext = "Apache License Version 2.0 January 2004 http://www.apache.org/licenses/"
      break;
    case "GNU General Public License v3.0":
      licensetext = "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users."
      break;
    case "MIT":
      licensetext = "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility."
      break;
    case "BSD 2-Clause Simplified License":
      licensetext = "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements."
      break;
    case "BSD 3-Clause New or Revised":
      licensetext = "A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent."
      break;
    case "Boost Software License 1.0":
      licensetext = "Copyright Joe Coder 2004 - 2006 Distributed under the Boost Software License, Version 1.0."
      break;
    case "Creative Commons Zero v1.0 Universal":
      licensetext = " CC0 is a universal instrument that is not adapted to the laws of any particular legal jurisdiction, similar to many open source software licenses. And while no tool, not even CC0, can guarantee a complete relinquishment of all copyright and database rights in every jurisdiction, we believe it provides the best and most complete alternative for contributing a work to the public domain given the many complex and diverse copyright and database systems around the world."
      break;
    case "Eclipse Public License 2.0":
      licensetext = "The Eclipse Public License is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License and removes certain terms relating to litigations related to patents."
      break;
    case "GNU Affero General Public License v3.0":
      licensetext = "The GNU Affero General Public License is a free, copyleft license for software and other kinds of works, specifically designed to ensure cooperation with the community in the case of network server software.The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, our General Public Licenses are intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users."
      break;
    case "GNU General Public License v2.0":
      licensetext = "The GNU General Public License v2 (GPL v2 for short) is the most commonly used open source licence. Approximately 70% of the projects in the software repository Sourceforge use the GPL v2. This document attempts to draw together the main features of the GNU General Public License v2 into a friendly and comprehensible digest and, in addition, to note some details about its history and usage. The licence itself can be read at http://www.opensource.org/licenses/gpl-license.php."
      break;
    case "GNU Lesser General Public License v2.1":
      licensetext = "1 (LGPL v2. 1 for short) is a variation of the regular GNU General Public License (GPL). Originally known as the GNU Library General Public License, it was drafted by the Free Software Foundation (FSF) to provide a weaker (or Lesser) form of copyleft for use in certain specific circumstances."
      break;
    case "Mozilla Public License 2.0":
      licensetext = "The MPL is a simple copyleft license. The MPL's file-level copyleft is designed to encourage contributors to share modifications they make to your code, while still allowing them to combine your code with code under other licenses (open or proprietary) with minimal restrictions."
      break;
    case "The Unlicense":
      licensetext = "The Unlicense is a public domain equivalent license with a focus on an anti-copyright message. ... The Unlicense offers a public domain waiver text with a fall-back public-domain-like license, inspired by permissive licenses but without an attribution clause."
      break;
  }
  return licensetext
}

// GenerateMardown function which returns all data to the readme.md file creation
function generateMarkdown(data) {
  console.log(data);
  return `
  # **${data.title}**
  ${renderLicenseBadge(data.license)} 

  ## Table of Contents
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Project Usage](#Project-Usage)
   4. [License Information](#License-Information)
   5. [Contributors](#Project-Contributors)
   6. [Testing Instructions](#Testing-Instructions )
   7. [Contact Info](#Questions)
   
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

  ## Testing Instructions 
  ${data.tests}
  
  ## Questions?
  ### Please find my contact information below to reach out! 

  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.emailaddress})  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.github})  

  `
    ;
}

module.exports = generateMarkdown;


