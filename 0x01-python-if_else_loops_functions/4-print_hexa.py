#!/usr/bin/python3
"""Print numbers 0 to 98 in decimal and hexadecimal."""
for num in range(99):
    print("{} {}".format(num, hex(num)), end=" ")
