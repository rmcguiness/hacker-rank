#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def migratoryBirds(arr):
    # Write your code here
    arr.sort()
    a = Counter(arr)
    maxi = max(a.values())
    for i,v in a.items():
        if(v==maxi):
            return i

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

    
# Function Description

# Complete the migratoryBirds function in the editor below.

# migratoryBirds has the following parameter(s):

# int arr[n]: the types of birds sighted
# Returns

# int: the lowest type id of the most frequently sighted birds