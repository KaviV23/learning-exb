const os = require("os");
const fs = require("fs");
const si = require('systeminformation');

/*

    Grab system info

*/
const systemInfo = {
    platform: os.platform(),
    arch: os.arch(),
    machineType: os.machine(),
    cpuModel: os.cpus()[0].model,
    gpuModel: si.graphics(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    username: os.userInfo().username,
    hostname: os.hostname(),
    release: os.release(),
    uptime: os.uptime(),
    version: os.version()
};

// console.log(systemInfo.gpuModel.then((value) => console.log(value)));

/*

    Print system info to console

*/
console.log(systemInfo.username + "@" + systemInfo.hostname);
console.log("-".repeat((systemInfo.username+"@"+systemInfo.hostname).length));
console.log("OS:", systemInfo.version, systemInfo.release, systemInfo.machineType);
console.log("Uptime:", Math.floor(systemInfo.uptime / 60), "minutes");
console.log("CPU:", systemInfo.cpuModel);
console.log("GPU:", );
console.log("Memory:", (systemInfo.freeMemory / 1024 / 1024).toFixed(2), "/", (systemInfo.totalMemory / 1024 / 1024).toFixed(2), "MB")
console.log();

/*

    CSV

*/
// structure data for output to csv
const header = ['platform', 'arch', 'machine_type', 'cpu_model', 'total_memory(bytes)', 'username', 'hostname', 'platform_release', 'uptime', 'version'];
const values = [
    systemInfo.platform,
    systemInfo.arch,
    systemInfo.machineType,
    systemInfo.cpuModel,
    systemInfo.totalMemory,
    systemInfo.username,
    systemInfo.hostname,
    systemInfo.release,
    systemInfo.uptime,
    systemInfo.version,
];

const csvContent = [
    header.join(","),
    values.join(",")
].join("\n");

// write file to current directory
fs.writeFileSync('systemInfo.csv', csvContent);
console.log("System info has been succesfully writen to systemInfo.csv");
