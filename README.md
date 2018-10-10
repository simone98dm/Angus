# Angus - real time dashboard

This project aim to create a simple real time dashboard. 


---
### How to install

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
[ DEPRECATED ] 
~$ pwd
  C:\Angus
~$ cd src/api/
~$ nodemon app.js

[ UPDATED ]
~$ pwd
  C:\
~$ git clone https://github.com/sebejbaldin/NodePiedPiper.git Api/ && cd Api/
  (check and fix the config.js with the correct credentials)
~$ nodemon index.js
```

After: run the project
```bash
~$ pwd
  C:\Angus
~$ npm start
```

For the first run the default credentials are:
```
user: c.override
pass: 123456
```

---
### Gource
Little thing to view the progress of the project by [Gource](https://gource.io/)
```bash
~$ cd Angus/
~$ gource -f -s 1 -a 1 --key --max-files 0 --disable-progress
```
