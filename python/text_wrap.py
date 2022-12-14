import textwrap

def wrap(string, max_width):
    arr = textwrap.wrap(string, max_width)
    ans = "\n".join(i for i in arr)
    # for i in arr:
    #     ans += i + "\n"
        
    return ans

if __name__ == '__main__':
    string, max_width = input(), int(input())
    result = wrap(string, max_width)
    print(result)