import random
list = ["rock","paper","scissor"]
computer_choice = random.choice(list)
while True:
    user_choice = input("""What are you want (rock,paper,scissor): """)
    if computer_choice == user_choice:
        print("You win")
        break
    else:
        print("You Lose.Try again!!!")
