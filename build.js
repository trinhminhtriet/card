'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Trinh Minh Triet'),
  handle: chalk.white('trinhminhtriet'),
  work: chalk.white('Software Engineer'),
  facebook: chalk.gray('https://facebook.com/') + chalk.blue('trinhminhtriet'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('trinhminhtriet'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~trinhminhtriet'),
  github: chalk.gray('https://github.com/') + chalk.green('trinhminhtriet'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('triet-trinh'),
  web: chalk.cyan('https://trinhminhtriet.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('trinhminhtriet'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelFacebook: chalk.white.bold('Facebook:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const facebooking = `${data.labelFacebook}  ${data.facebook}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               webing + newline + // data.labelWeb + data.web
               facebooking + newline + // data.labelLinkedIn + data.linkedin
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline +// data.labelGitHub + data.github
               npming + newline + newline +// data.labelGitHub + data.github
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
