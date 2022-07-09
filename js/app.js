let counter = 0;
while(counter <= 50){
    console.log(counter);
    counter = counter + 1;
}

for(let counter = 0; counter <=50; counter ++) {
    console.log(counter);
}


let counter_negative = 0;
while(counter_negative >= -50){
    console.log(counter_negative);
    counter_negative = counter_negative - 1;
}

for(let counter_negative = 0; counter_negative >= -50; counter_negative -= 1){
    console.log(counter_negative);
}

let counter_even = 0;
while(counter_even <= 100) {
    if(counter_even % 2 === 0){
        console.log(counter_even);
    }
    
    counter_even += 1;
}

for(let counter_even = 0; counter_even <= 100; counter_even ++) {
    if(counter_even % 2 === 0){
        console.log(counter_even);
    }
}

let players_name = [`Neymar`, `Messi`, `Cristiano`];
let players_score = [92, 125, 140];
let players_injured = [true, false, false];

let counter_players = 0;
while(counter_players < players_name.length) {
    
    if(!players_injured[counter_players]) {
        console.log(players_name[counter_players]);
        console.log(players_score[counter_players]);
    }
    counter_players += 1;
}

