function generateMarkdown(data) {
    let profilePic = `https://avatars2.githubusercontent.com/u/60475383?s=460&u=36c6dbdcdb3eea009743535a88f2eb84c6a250ad&v=4`;
    let repoName = "README-generator";
    let badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
    let badgeHTTP = `
    https://img.shields.io/github/license/${data.githubUsername}/${repoName}`
    return`
## ${data.title}
## Table of Contents
* [Description](#Description)
* [Installation](#Install)
* [Usage](#Usage)
* [Tests](#Tests)
* [Github](#Github)
* [Contact](#Email)
## Description
* ${data.projectDescription}
## Install
* ${data.appInstall}
* Click Image below to watch an instatllation video.
[![](./assets/Screenshot.png)](https://drive.google.com/file/d/1q66ickztYMdGeLJH29y8Hj2GqY06Rvjh/view?usp=sharing)
## Usage
* ${data.usage}
## Contributions
* ${data.contributing}
## Tests
* ${data.tests}
## Questions
* Profile Pic
- ${profilePic}
## Issues
* ${data.questions}
## Github Username
- ${data.githubUsername}
## Email
- ${data.userEmail}
## License
* ${data.badgeChoice}
## Badge* ${badgeHTTPOne}`;
}

module.exports = generateMarkdown;
