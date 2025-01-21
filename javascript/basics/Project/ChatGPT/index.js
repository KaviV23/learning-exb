// Collecting basic system information
function getSystemInfo() {
  const systemInfo = {
    platform: navigator.platform, // OS platform
    userAgent: navigator.userAgent, // User agent string
    language: navigator.language, // Language
    screenWidth: window.screen.width, // Screen width
    screenHeight: window.screen.height, // Screen height
    browser: navigator.appName, // Browser name
    version: navigator.appVersion, // Browser version
  };

  return systemInfo;
}

// Convert the system info object to CSV format
function convertToCSV(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  
  const csv = keys.join(',') + '\n' + values.join(',');
  return csv;
}

// Trigger download of CSV
function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

// Get system info, convert it to CSV and download the file
const systemInfo = getSystemInfo();
const csvContent = convertToCSV(systemInfo);
downloadCSV(csvContent, 'system_info.csv');
