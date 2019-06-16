import sys

start = float(sys.argv[1])
reps = int(sys.argv[2])
char = sys.argv[3]

delta = 0.0635

if (start < 0):
	value = -start
else:
	value = start

file = open("out.html", "a")

for i in range(reps):
	line = "\t\t<b style=\"left:%.2fem;"
	if (i < 3):
		line = line + " color:#xxxxxx;"
	line = line + "\">" + char + "</b>"
	line = line % value

	file.write(line + "\n")

	reps = reps - 1
	if start < 0:
		value = value - delta
	else:
		value = value + delta

file.write("-------------------------------------\n")
file.close()