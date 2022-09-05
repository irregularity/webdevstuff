let solution, max
let guesses = []

function get_max_return_num(){
    let valid = false
    let input, range
    let prompt = "What should the maximum number be?"
    let desc = document.getElementById("guesstext") 
    while(!valid){ //validate input
        input = window.prompt(prompt)
        range = Number(input)
        if(range && range > 0){
            valid = true
            max = Number(Math.round(range))
            desc.innerHTML = `Guess between 1 and ${max}!` //Change text based on input
        }
        else { prompt = "Invalid input! Please enter a valid number for the maximum number." } //return error on bad input
    }
    solution = Math.floor(Math.random() * max) + 1
}

function get_input() {  
    let guess = (document.getElementById("guess").value) // get the user guess
    let results = document.getElementById("results")
    console.log(guess)
    if(guess && guess < max + 1 && guess > 0) { // make sure it falls in the bounds
        if (guesses.includes(guess)) { results.innerHTML = "You've already guessed that number!" } // check for duplicate guesses 
        else { // if guess is valid and new
            guesses.push(guess) // record valid guesses
            if(guess == solution) { results.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses}.` }
            else if (guess > solution) { results.innerHTML = "No, go lower." }
            else { results.innerHTML = "No, go higher." }
        }  
    }
    else if (guess === "") {results.innerHTML = "That is not a number!"} // strict check for empty input - JS converts empty string to 0 in the next elseif, so its passed as 0 rather than empty input
    else if (guess > max || guess <= 0) { results.innerHTML = "That number is not in range, try again." } //  guess out of bounds
    else { results.innerHTML = "That is not a number!" } // guess is not a number or empty
}

