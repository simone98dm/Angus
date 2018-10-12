# Angus - real time dashboard

This project aim to create a simple real time dashboard. 


---
### How to install

If you are brave and in a linux machine, you can try the ```Installer-Linux.sh```🙃...

OR

Use the following steps:  

- Get the project
```bash
~$ cd C:\
~$ git clone https://github.com/simone98dm/Angus.git
~$ cd Angus/
~$ npm install
```

- After you need to install the database (you should first install mysql)
```bash
~$ pwd
 C:\Angus
~$ mysql -uroot -p
 (login)

 mysql> CREATE DATABASE 'db_piedpiper';
 mysql> CREATE USER 'piedpiper'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PiedPiper2018';
 mysql> GRANT SELECT, INSERT, UPDATE ON `db_piedpiper`.* TO 'piedpiper'@'localhost';
 mysql> FLUSH PRIVILEGES;
 (exit)

~$ mysql -uroot -p db_piedpiper < db_piedpiper.sql
```
(If you want to change some part of the process remember to change the file 'config.js' which contains all the information to get the access to database)

---
### How to run

Before: run the API (the api inside the project are deprecated, the updated API can be found [here](https://github.com/sebejbaldin/NodePiedPiper))
```bash
[ UPDATED ]
~$ pwd
  C:\
~$ git clone https://github.com/sebejbaldin/NodePiedPiper.git Api/ && cd Api/
~$ npm install
  (check and fix the config.js with the correct credentials)
~$ nodemon index.js

[ DEPRECATED ] 
~$ pwd
  C:\Angus
~$ cd src/api/
~$ nodemon app.js
```

After: run the project
```bash
~$ pwd
  C:\Angus
~$ npm start
```

For the first run the default credentials are: (😊)
```
user: c.override
pass: 123456
```

### Run as a Linux deamon
This project can be run in linux server.
```bash
~$ chmod +x Installer-Linux.sh
~$ ./Installer-Linux.sh
  (follow the steps)
```

To run the webapp in local network, you must have to specify the host (```0.0.0.0```), as we use port ```80``` the script must be runned as ```root``` (N.B: disable ```apache2``` service) at least with ```disable-host-check``` we allow to get access to the webapp by disabling some checks 
```bash
sudo ng serve --host 0.0.0.0 --port 80 --disable-host-check
```

To get a better look you may add this line to ```hosts``` file in ```/etc/network/``` (linux) or 
```C:\Windows\System32\drivers\etc\```
```bash
<vm-address>	dashboard.piedpiper.asdf
```

---
### Gource✨
View the progress of the project by [Gource](https://gource.io/)
```bash
~$ cd Angus/
~$ Gource-View.sh
or
~$ gource -f -s 1 -a 1 --key --max-files 0 --disable-progress
```

### Repository contributors:
(Andrea Salata)[https://github.com/salatandre]: UX & UI developer (html, css, ts)
(Sebastiano Emy Jari Baldin)[https://github.com/sebejbaldin]: Back-end developer (nodejs, ts)
(Simone Dal Mas)[http://github.com/simone98dm/]: Front-end developer (angular2, nodejs)
