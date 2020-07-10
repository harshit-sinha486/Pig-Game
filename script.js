let score,roundScore,gamePlaying;

const init=()=>{
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying=true
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
};
const nextplayer=()=>{activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';}
init();

// document.querySelector('#current-'+activePlayer).textContent=dice;
// let x=document.querySelector('#current-'+activePlayer).textContent;

// document.querySelector('dice').style.display=none;
// document.querySelector('.btn-roll').addEventListener('click');

document.querySelector('.btn-roll').addEventListener('click',() => {
        if(gamePlaying){
            let dice = Math.floor(Math.random()*6) + 1;
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '/media/dice-' + dice + '.png';

        if(dice !== 1){
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else{
            nextplayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click',()=>{

        if(gamePlaying){
            score[activePlayer]+=roundScore;
        document.getElementById('score-'+activePlayer).textContent=score[activePlayer];

        if(score[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
        }
        else{
            nextplayer();
        }
    }
});



    document.querySelector('.btn-new').addEventListener('click',init);