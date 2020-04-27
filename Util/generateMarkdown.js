function generateMarkdown(data) {
    let profilePic = `https://avatars0.githubusercontent.com/u/60475383?s=460&u=36c6dbdcdb3eea009743535a88f2eb84c6a250ad&v=4`;
    let repoName = "README-generator";
    let badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
    let badgeHTTP = `https://img.shields.io/github/license/${data.githubUsername}/${repoName}`;
    return `## Badge${badgeHTTPOne}## Title* ${data.title}## Description* ${data.projectDescription}## Install* ${data.appInstall}## Table of Contents* ${data.tableOfContents}## Usage* ${data.usage}## License* ${data.badgeChoice}## Contributions* ${data.contributing}## Tests* ${data.tests}## Questions* Profile Pic- ${profilePic}* ${data.questions}* Username* - ${data.githubUsername}* * E-mail Address* - ${data.userEmail}## Badge* ${badgeHTTP}`;
}

module.exports = generateMarkdown;
