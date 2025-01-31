fileName="$HOME/system_info.txt"

echo "===MEMORY INFO===" > $fileName
echo "$(cat /proc/meminfo | grep Mem)" >> $fileName

echo -e "\n===STORAGE INFO===" >> $fileName
echo "$(df -h)" >> $fileName

echo -e "\n===OPERATING SYSTEM INFO===" >> $fileName
echo "$(cat /etc/os-release)" >> $fileName
echo "$(hostnamectl)" >> $fileName

echo "System info saved to $fileName"
