import textwrap

def wrap(string, max_width):
    arr = textwrap.wrap(string, max_width)
    # for i in arr:
    #     ans += i + "\n"
    ans = "\n".join(i for i in arr)
        
    return ans

if __name__ == '__main__':
    string, max_width = input('Enter a string to wrap: '), int(input('Enter width of paragraph: '))
    result = wrap(string, max_width)
    print(result)

# You are given a string and width.
# Your task is to wrap the string into a paragraph of width .

# Function Description

# Complete the wrap function in the editor below.

# wrap has the following parameters:
# string string: a long string
# int max_width: the width to wrap to

# Returns
# string: a single string with newline characters ('\n') where the breaks should be

# Input Format
# The first line contains a string, .
# The second line contains the width, .