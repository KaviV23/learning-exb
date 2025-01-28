# This script can be scheduled using `Task Scheduler` on Windows

$SystemInfo = Get-ComputerInfo
$CDriveInfo = Get-PSDrive -Name C

$AllInfo = ""
$AllInfo += "OS Version: " + $SystemInfo.OsVersion + "`n"
$AllInfo += "OS Arch:" + $SystemInfo.OsArchitecture + "`n" 
$AllInfo += "Uptime:" + $SystemInfo.OsUptime + "`n"

$AllInfo += "Time Zone: " + $SystemInfo.TimeZone + "`n"
$AllInfo += "Last Boot: " + $SystemInfo.OsLastBootUpTime + "`n"
$AllInfo += "No. of Processes: " + $SystemInfo.OsNumberOfProcesses + "`n"
$AllInfo += "Total Memory: " + ([math]::Floor($SystemInfo.OsTotalVisibleMemorySize / 1024)) + " MB" + "`n"
$AllInfo += "Available Memory: " + ([math]::Floor($SystemInfo.OsFreePhysicalMemory / 1024)) + " MB" + "`n"
$AllInfo += "Total Disk Space: " + ([math]::Round(($CDriveInfo.Used / 1024 / 1024 / 1024), 2)) + " GB" + "`n"
$AllInfo += "Available Disk Space: " + ([math]::Round(($CDriveInfo.Free / 1024 / 1024 / 1024), 2)) + " GB" + "`n"

Write-Host $AllInfo
$AllInfo | Out-File -FilePath "C:\Users\Kaviraj\code\learning-exb\shell-scripting\powershell\task\System_Info.txt"
