#!/bin/bash
tmpoutput=`echo -e 5 '\n' 6 | python add.py`
CORRECT=0
f1=`echo $tmpoutput | grep -q '11'`
if [ $? = 0 ]; then
let CORRECT=CORRECT+1
fi
tmpoutput=`echo -e 15 '\n' 8 | python add.py`
f1=`echo $tmpoutput | grep -q '23'`
if [ $? = 0 ]; then
let CORRECT=CORRECT+1
fi

exit $CORRECT
