#!/bin/bash
if [ $(dpkg-query -W -f='${Status}' gource 2>/dev/null | grep -c "ok installed") -eq 0 ]; then
  apt-get install nano;
else
  gource -f -s 1 -a 1 --key --max-files 0 --disable-progress
fi

