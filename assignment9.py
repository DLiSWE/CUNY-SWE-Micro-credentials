#partA
myList = [2,4,7,10]
print(myList)
myList2 = myList[1:]
print(myList2)
myList2.append(15)
print(myList2)
myList2.pop(2)
print(myList2)
myList3 = myList2
print(myList3)

# partB
# count() is used to count the amount of times something appears in an array
arr1 = [1,1,2,1,1,1,6,7]
print('count:',arr1.count(1))#5 1s

#endswith() is used to check if there is an array, returns boolean
arr2 = 'There is something here'
print('endswith:',arr2.endswith('here'))

#find/index() is used to get the index of specific item
arr3 = ['a','b','c','d','e','f','g','h','i']
print('index:',arr3.index('e'))

#join() is used to join a "separator" to a list
seperate = '-'
print(seperate.join(arr3))

#replace() is used to replace a specific item
str1 = 'abvc fdsaf dog svsdx'
x = str1.replace('dog','third', 3)
print(x)

#split() splits items in a string to a list
str2 = 'this;is;another;example'
print(str2.split(';'))

#splitlines() splits items by new line
str3 = "this is \nstring example\nshow here"
print(str3.splitlines())

#startswith() is used to check is a string starts with something
str4 = "This is another method"
print('startswith:',str4.startswith('This'))

#strip() removes trailing and ending spaces
str5 = '   abghi    '
print(str5.strip())

#Part C Prime function
number = 25
def isPrime(num):
    check = False
    for i in range(2,num):
        if (num % i) == 0:
            check = True
            break
    
    if check:
        return '{} is not a prime number'.format(num)
    else:
        return 'is a prime number'

print(isPrime(number))

# Part D disStuInfo
def disStuInfo(sID, *names, **kwargs):
    school = sID
    namelist,last,email,result = [],[],[],[]

    for n in names:
        namelist.append(n)
    namelist.append('unmatched')

    for k,v in kwargs.items():
        last.append(k)
        email.append(v)

    if len(namelist) == len(last) == len(email):
        for i in range(len(namelist)):
            result.append([school,namelist[i], last[i], email[i]])

    return result

print(disStuInfo(10001,'John','Petter',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com"))