function get_input(prompt){
    let valid = false
    let rolls, input
    while(!valid){
        input = window.prompt(prompt);
        rolls = Number(input);
        if(rolls){
            valid = true
        }
    }
    return rolls
}

function roll_dice(num){
    let stats = init_stats()
    let die1, die2, roll
    for (let i = 0; i < num; i++){
        
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1;
        roll = die1 + die2
        stats[roll-2]++;
    }
    return [num, stats]
}

function init_stats(){
    let stats = []
    for (let i = 0; i<11; i++) {
        stats.push(0);
    }

    return stats
}

function display_results(rolls,stats){
    console.log(`Dice rolled ${rolls} times`)
    let num, count, pct
    for(let i = 0; i<stats.length; i++) {
        num = i+2
        count = stats[i]
        pct = Math.round(count/rolls * 100);
        console.log(`${num} was rolled ${count} times (${pct})`)
    }
    
}