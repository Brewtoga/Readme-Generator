function generateMarkdown(data) {
    let profilePic = `https://avatars2.githubusercontent.com/u/60475383?s=460&u=36c6dbdcdb3eea009743535a88f2eb84c6a250ad&v=4`;
    let repoName = "README-generator";
    let badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
    let badgeHTTP = `
    https://img.shields.io/github/license/${data.githubUsername}/${repoName}`
    return`
## ${data.title}
## Description
* ${data.projectDescription}
## Install
* ${data.appInstall}
* Click Image below to watch an instatllation video.
[![](https://drive.google.com/file/d/1FLZZWgH06Q3NnY3DyD74FlExj3N5Ocky/view?usp=sharing)](https://drive.google.com/file/d/1q66ickztYMdGeLJH29y8Hj2GqY06Rvjh/view?usp=sharing)
## Table of Contents
* ${data.tableOfContents}
## Usage
* ${data.usage}
## License
* ${data.badgeChoice}
## Contributions
* ${data.contributing}
## Tests
* ${data.tests}
## Questions
* Profile Pic
- ${profilePic}
* ${data.questions}
* Username
- ${data.githubUsername}
* E-mail Address
- ${data.userEmail}
## Badge* ${badgeHTTPOne}`;
}

module.exports = generateMarkdown;
