#!/bin/bash
echo "{\"scan\":[" `sudo rtl_power -f 10M:11M:100K -g 50 -i 1 -1 -d 0 | sed 's/\\,//g' | cut -c 21- | sed 's/ /,/g' `"]}" > teste.json





#echo "{\"dados\":[" `sudo rtl_power -f 10M:11M:100K -g 50 -i 1 -1 -d 0 | sed 's/\\,//g' | awk '{for(i=7;i<=NF;i++){printf ",%s\n", $i}}' | xargs | cut -c 2- `"]}" > teste.json
