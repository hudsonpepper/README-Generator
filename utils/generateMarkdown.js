const fs = require('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Badge Information coming from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // Obj contains the 10 most common licenses: source https://github.blog/2015-03-09-open-source-license-usage-on-github-com/
  license = license.toLowerCase();
  let licenseObj = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    gplv3: " [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return licenseObj[license];
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license = license.toLowerCase();
  let licenseObj = {
    mit: "https://mit-license.org/",
    apache: "https://apache.org/licenses/LICENSE-2.0.txt",
    gplv3: "https://www.gnu.org/licenses/gpl-3.0.txt"
  }
  return licenseObj[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data, license) {
  let licenseObj = {
    mit: ` The MIT License (MIT)

    Copyright © 2023 ${data.fullname}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `,
    apache: `Copyright 2023 ${data.fullname}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,
    gplv3: `Copyright (C) 2023  ${data.fullname}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
  return licenseObj[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownText = `
  # ${data.projectName}${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents (Optional)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  <!---
      ![alt text](assets/images/screenshot.png)
  -->
  ## Credits

  ${data.credit}

  ## License

  ${renderLicenseSection(data, data.license)}


  ## Badges

  ${renderLicenseBadge(data.license)}

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.testing}

  ## Questions

  github.com/${data.username}
  `
  //console.log(markdownText)
  fs.writeFile("./output/README.md", markdownText, (error => error?console.log("failure", error):console.log("success")));
  //fs.writeFile('./results.txt', JSON.stringify(response), (error => error ? console.log(error): console.log("success"))

}

module.exports = { generateMarkdown };
