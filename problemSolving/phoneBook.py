# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())

phone_book = {} # create an empty phone book dictionary

# read and store each phone book entry in the dictionary
for i in range(n):
    name, number = input().split()
    phone_book[name] = number

# read queries and print the corresponding phone numbers
while True:
    try:
        query = input()
        if query in phone_book:
            print("{}={}".format(query, phone_book[query]))
        else:
            print("Not found")
    except:
        break