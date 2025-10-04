const container = document.querySelector("#container");
//Executes Round
function playround(humanchoice, computerchoice){
    const results = document.createElement("h4");
    const humanplay = document.createElement("h4");
    const computerplay = document.createElement("h4");
    humanplay.textContent = `Human Played: ${humanchoice}`;
    computerplay.textContent = `Computer Played : ${computerchoice}`;
    container.appendChild(humanplay);
    container.appendChild(computerplay);
    if(humanchoice === computerchoice){
        //console.log('Draw!');
        results.textContent = "Draw!";
        container.appendChild(results);
        return 0;
    }
    if(humanchoice === 'scissors' ){
        if(computerchoice === 'rock'){
            //console.log('Computer wins!, rock beats scissors');
            results.textContent = "Computer wins!, rock beats scissors";
            container.appendChild(results);
            return -1;
        }else{
            //console.log('Human wins!, scissors beats paper');
            results.textContent = "Human wins!, scissors beats paper";
            container.appendChild(results);
            return 1;    
        }
    }else if(humanchoice === 'rock' ){
        if(computerchoice === 'paper'){
            //console.log('Computer wins!, paper beats rock');
            results.textContent = "Computer wins!, paper beats rock";
            container.appendChild(results);
            return -1
        }else{
            //console.log('Human wins!, rock beats scissors');
            results.textContent = "Human wins!, rock beats scissors";
            container.appendChild(results);
            return 1;  
        }
    }else{
        if(computerchoice === 'scissors'){
            //console.log('Computer wins!, scissors beats paper');
            results.textContent = "Computer wins!, scissors beats paper";
            container.appendChild(results);
            return -1;
        }else{
            //console.log('Human wins!, paper beats rock');
            results.textContent = "Human wins!, paper beats rock";
            container.appendChild(results);
            return 1;    
        }
    }
}
// // Redundant, was used to get humans play of choice
// function gethuman(){
//     const container = document.querySelector("#container");
//     const choice = container.addEventListener("click" , (event) =>{
//         return event.target.id;
//     });
//     return choice;
// }

//computers play
function getComputer(){
    let arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

//Enables the entire game 
function playgame(num){
    let humanscore = 0;
    let computerscore = 0;
    //get humans choice dynamically
    const choice = container.addEventListener("click" , (event) =>{
        const humanselection = event.target.id;
        if(humanselection == 'end'){
            const results = document.createElement("h4");
            if(humanscore == computerscore){
                //console.log('Its a Draw! With a score of: ' + humanscore);
                results.textContent = 'Its a Draw! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }else if(humanscore > computerscore){
                console.log('Human Wins! With a score of: ' + humanscore);
                results.textContent = 'Human Wins! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }else{
                console.log('Computer Wins! With a score of: ' + computerscore);
                results.textContent = 'Computer Wins! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }
            humanscore = 0;
            computerscore = 0;
            return;
        }

        const computerselection = getComputer();

        let k = playround(humanselection,computerselection);

        if(k > 0){
            humanscore++;
        }else if (k < 0){
            computerscore++;
        }

        //end game if target score reached
        if(humanscore === num || computerscore === num){
            const results = document.createElement("h4");
            if(humanscore == computerscore){
                //console.log('Its a Draw! With a score of: ' + humanscore);
                results.textContent = 'Its a Draw! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }else if(humanscore > computerscore){
                console.log('Human Wins! With a score of: ' + humanscore);
                results.textContent = 'Human Wins! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }else{
                console.log('Computer Wins! With a score of: ' + computerscore);
                results.textContent = 'Computer Wins! HumanScore: ' + 
                    humanscore + ' ComputerScore: ' + computerscore;
                container.appendChild(results);
            }
            humanscore = 0;
            computerscore = 0;
            return;
        }
    });
        
}

//get target score
let n = parseInt(prompt("Enter score till which you wanna play"));
playgame(n);
