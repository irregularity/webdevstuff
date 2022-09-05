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

function display_results(rolls, stats, table){
    let head = table.getElementsByTagName("thead")[0]
    let body = table.getElementsByTagName("tbody")[0]
    let caption = document.createElement("caption")
    caption.innerText = `Dice rolled ${rolls} times...`
    caption.style = "caption-side: top"
    table.insertBefore(caption, head)
    
    let num, count, pct
    for(let i = 0; i< stats.length; i++) {
        num = i+2
        count = stats[i]
        pct = Math.round(count/rolls * 100);
        let row = document.createElement("tr")
        row.innerHTML = `<td>${num}</td><td>${count}</td><td>${pct}%</td>`
        body.appendChild(row)
    }
    
}