#!/bin/bash
# tested on: ubuntu18.04 x64

PRJ_NAME="PiedPiperProject"
AN_NAME="Angus"
AP_NAME="Api"

# Create the folder system
echo -e "[+] Creating folder $PRJ_NAME"
mkdir ${PRJ_NAME}
cd ${PRJ_NAME}
clear

# Install the needed packages
echo "[+] Install the needed apt packages..."
sudo apt install git nodejs npm apache2 mysql-server phpmyadmin -y
clear

# Install npm packages
echo "[+] Install the needed npm packages..."
sudo npm install -g nodemon
clear

# Get the repositories (PiedPiperProject/)
echo "[+] Get the projects from GitHub..."
git clone http://github.com/sebejbaldin/NodePiedPiper.git ${AP_NAME}/
git clone http://github.com/simone98dm/Angus.git ${AN_NAME}/
clear

# Install npm packages for those projects
echo "[+] Install the dependeces for $AP_NAME..."
cd ${AP_NAME}/
npm i
cd ..
echo "[+] Install the dependeces for $AN_NAME..."
cd ${AN_NAME}/
npm i
cd ..
clear

# Install the mysql db
echo "[+] Install the database SQL (you might insert the password)..."
# If /root/.my.cnf exists then it won't ask for root password
cd ${AN_NAME}/
if [ -f /root/.my.cnf ]; then
	dbname="db_piedpiper"
	username="piedpiper"
	userpass="PiedPiper2018"
	mysql -uroot -e "CREATE DATABASE ${dbname};"
	mysql -uroot -e "CREATE USER ${username}@localhost IDENTIFIED WITH mysql_native_password BY '${userpass}';"
	mysql -uroot -e "GRANT INSERT, SELECT, UPDATE PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
	mysql -uroot -e "FLUSH PRIVILEGES;"
  mysql -uroot db_piedpiper < db_piedpiper.sql
	echo "You're good now :)"
# If /root/.my.cnf doesn't exist then it'll ask for root password
else
	echo "Please enter root user MySQL password!"
	read rootpasswd
  dbname="db_piedpiper"
	username="piedpiper"
	userpass="PiedPiper2018"
	mysql -uroot -p${rootpasswd} -e "CREATE DATABASE ${dbname};"
	mysql -uroot -p${rootpasswd} -e "CREATE USER ${username}@localhost IDENTIFIED WITH mysql_native_password BY '${userpass}';"
	mysql -uroot -p${rootpasswd} -e "GRANT INSERT, SELECT, UPDATE PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
	mysql -uroot -p${rootpasswd} -e "FLUSH PRIVILEGES;"
  mysql -uroot -p${rootpasswd} db_piedpiper < db_piedpiper.sql
	echo "You're good now :)"
fi

# Done
clear
echo "Done :)"
