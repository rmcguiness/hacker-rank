def print_rangoli(size):
    # your code goes here
    for n in [abs(r) for r in range( -(size-1), size)]:
        center='-'.join([ chr(ord('a')+abs(i)+n) for i in range(-(size-n-1), (size-n))])
        print(2*n*'-' + center + 2*n*'-')

if __name__ == '__main__':
    n = int(input('Type a Number:'))
    print_rangoli(n)

# You are given an integer, N. Your task is to print an alphabet rangoli of size N . (Rangoli is a form of Indian folk art based on creation of patterns.)

# Different sizes of alphabet rangoli are shown below: