
function playround(humanchoice, computerchoice){
    if(humanchoice === computerchoice){
        console.log('Draw!');
        return 0;
    }
    if(humanchoice === 'scissors' ){
        if(computerchoice === 'rock'){
            console.log('Computer wins!, rock beats scissors');
            return -1;
        }else{
            console.log('Human wins!, scissors beats paper');
            return 1;    
        }
    }else if(humanchoice === 'rock' ){
        if(computerchoice === 'paper'){
            console.log('Computer wins!, paper beats rock');
            return -1
        }else{
            console.log('Human wins!, rock beats scissors');
            return 1;  
        }
    }else{
        if(computerchoice === 'scissors'){
            console.log('Computer wins!, scissors beats paper');
            return -1;
        }else{
            console.log('Human wins!, paper beats rock');
            return 1;    
        }
    }
}
function gethuman(){
    let human = prompt("Enter your Move");
    human = human.toLowerCase();
    if(human == 'scissor') return 'scissors';
    return human;
}
function getComputer(){
    let a = Math.random();
    if(a < 0.33){
        return 'rock';
    }else if(a < 0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}
function playgame(num){
    let humanscore = 0;
    let computerscore = 0;
    for(let i = 0 ; i < num ; i++){
        const humanselection = gethuman();
        const computerselection = getComputer();
        let k = playround(humanselection,computerselection);
        if(k > 0){
            humanscore++;
        }else if (k < 0){
            computerscore++;
        }
    }
    if(humanscore == computerscore){
        console.log('Its a Draw! With a score of: ' + humanscore);
    }else if(humanscore > computerscore){
        console.log('Human Wins! With a score of: ' + humanscore);
    }else{
        console.log('Computer Wins! With a score of: ' + computerscore);
    }
}
let n = parseInt(prompt("Enter number of rounds you wanna play"));
playgame(n);