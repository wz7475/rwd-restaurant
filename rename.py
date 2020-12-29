import os
import shutil

print("Przeciągnij folder lub wpisz ścieżkę:\n")
path = input()

#path = "c:\\Users\\wojte\\Desktop\\test"
#path = "/mnt/c/users/wojte/Desktop/test"
print(path)
os.chdir(path)

counter = 1
for i in os.listdir():
    if os.path.isfile(i):
        extension = os.path.splitext(i)[1]
        new_name = str(counter) + extension
        os.rename(i, os.path.join(path, new_name))
        counter += 1;
        
