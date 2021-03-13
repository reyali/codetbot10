global.owner = ['6285668190592','6281545878010'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
    nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://api.vhtear.com',
  mnazar: 'https://mnazria.herokuapp.com',
  melodic: 'http://api-melodicxt-2.herokuapp.com',
  vinz: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  vf: 'https://videfikri.com',
  tobz: 'https://tobz-api.herokuapp.com'
  
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.vhtear.com' : 'sensorom',
  'http://api-melodicxt-2.herokuapp.com' : 'administrator',
  'https://api.zeks.xyz' : 'apivinz',
  'https://tobz-api.herokuapp.com' : 'BotWeA'
}




let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
