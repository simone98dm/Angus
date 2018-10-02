# Angus - real time dashboard

This project aim to create a simple real time dashboard. 


---
### How to install

- Get the project
```bash
~$ git clone https://github.com/simone98dm/Angus.git
~$ cd Angus/
~$ npm install
```

- After you need to install the database (you should first install mysql)
```bash
~$ cd src/api/
~$ mysql -u root -p
 (login)

 mysql> CREATE DATABASE db_piedpiper;
 mysql> CREATE USER 'piedpiper'@'localhost' IDENTIFIED BY 'PiedPiper2018';
 mysql> GRANT SELECT, INSERT, UPDATE ON `piedpiper`.* TO 'piedpiper'@'localhost';
 mysql> FLUSH PRIVILEGES
 (exit)

~$ mysql -u root -p db_piedpiper < db_piedpiper.sql
```
(If you want to change some part of the process remember to change the file 'config.js' which contains all the information to get the access to database)

---
### How to run

Before: run the API
```bash
~$ cd src/api/
~$ nodemon app.js
```

After: run the project
```bash
~$ cd  ../../
~$ npm start
```

For the first run the default credentials are:
```
user: fake.account
pass: thisissparta
```

---
### Gource
Little thing to view the progress of the project by [Gource](https://gource.io/)
```bash
~$ cd Angus/
~$ gource -f -s 1 -a 1 --key --max-files 0 --disable-progress
```
