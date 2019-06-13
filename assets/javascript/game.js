
// Global variables

let rupee = {
    red:
    {
        name: "Red",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    silver:
    {
        name: "Silver",
        value: 0
    },
    gold:
    {
        name: "Gold",
        value: 0
    }
};

let currentScore = 0;
let targetScore = 0;
let winCount = 0;
let lossCount = 0;

// Functions

// gives you a random number
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// starts game and resets the value of the rupees 
function startGame() {
    
    currentScore = 0;
    
    targetScore = getRandom(19, 120);
   
    rupee.red.value = getRandom(1, 12);
    rupee.green.value = getRandom(1, 12);
    rupee.silver.value = getRandom(1, 12);
    rupee.gold.value = getRandom(1, 12);

    $('#yourScore').html(currentScore);
    $('#targetScore').html(targetScore);



}

// changes score based on rupee value from startGame();
function addValues(rupee) {

    currentScore = currentScore + rupee.value;
    $('#yourScore').html(currentScore);
    checkWin();

}

// checks win or loss
function checkWin() {

    if (currentScore > targetScore) {
        alert("You Lose");
        lossCount++;
        $('#lossCount').html(lossCount);
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("You Win");
        winCount++;
        $('#winCount').html(winCount);
        startGame();
    }
}

// Main process

startGame();

// click events
$('#red').click(function() {
    addValues(rupee.red);
})

$('#green').click(function() {
    addValues(rupee.green);
})

$('#silver').click(function() {
    addValues(rupee.silver);
})

$('#gold').click(function() {
    addValues(rupee.gold);
});

