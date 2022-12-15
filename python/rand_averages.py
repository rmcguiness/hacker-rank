total, num_students, idx_marks = 0, int(input('Number of Students: ')), input('Enter Columns(any order in format : ID MARKS CLASS NAME )').split().index('MARKS')
for i in range(num_students): 
    total += int(input('Enter Students Stats in Order:').split()[idx_marks])
print(total/num_students)

# Task
# Dr. John Wesley has a spreadsheet containing a list of student's ID's,MARKS,CLASS and NAME.
# Your task is to help Dr. Wesley calculate the average marks of the students.

# Note:
# 1. Columns can be in any order. IDs, MARKS, CLASS and NAME can be written in any order in the spreadsheet.
# 2. Column names are ID, MARKS, CLASS and NAME. (The spelling and case type of these names won't change.)

# Input Format
# The first line contains an integer N , the total number of students.
# The second line contains the names of the columns in any order.
# The next N lines contains the ID's, MARKS , CLASS and NAME, under their respective column names.

# Constraints
# 0 < N <= 100
# Solution must be 4 lines or less

# Output Format
# Print the average marks of the list corrected to 2 decimal places.

