//     init     test   increment
let temp = roll_dice(get_input("Enter rolls"))
//display_results(temp[0], temp[1])
let table = document.getElementById("results")
display_results(temp[0], temp[1], table)

table.classList.remove("hide")