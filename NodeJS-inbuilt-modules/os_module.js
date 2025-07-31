const os = require('os')

// to get the os platform and use info
console.log("OS platform: ", os.platform())
console.log("User info: ", os.userInfo())

// to get the os architecture, free memory and total memory
console.log("OS architecture: ", os.arch())
console.log("Free memory: ", os.freemem())
console.log("Total memory: ", os.totalmem())

// to get the system uptime 
console.log("System uptime in seconds: ", os.uptime())

// to get the home directory and hostname
console.log("Home directory: ", os.homedir())
console.log("Hostname: ", os.hostname())

// to get the network interfaces
console.log("Network interfaces: ", os.networkInterfaces())

// to get details about the cpu/core and temporary files
console.log("CPU / core: ", os.cpus())
console.log("Temporary files: ", os.tmpdir())