function get_input(input){
    let result
    if (input > 1){result = "Heads"}     
    else{ result = "Tails" }
    compare_flips(result, flip_coin())
}

function flip_coin() {
    let input = Math.floor(Math.random()*2)+1
    if (input == 1){result = "Heads"}     
    else{result = "Tails"}
    return result
}

function compare_flips(x, y){
    let text1, text2, text3
    text1 = document.createElement("p")
    text2 = document.createElement("p")
    text3 = document.createElement("p")
    let head = document.getElementById("results")
    text1.innerText = `You guessed ${x}...`
    text2.innerText = `The coin flips and comes up ${y}!`
    if (x == y) {text3.innerText = "Good Guess!"}
    else {text3.innerText = "Unlucky..."}
    head.appendChild(text1)
    head.appendChild(text2)
    head.appendChild(text3)
}   