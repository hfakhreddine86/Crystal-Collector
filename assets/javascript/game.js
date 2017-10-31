//Global Variables
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;



//Counters
var wins = 0;
var losses = 0;
var totalScore;
var counter = 0;


//Functions

//Loads the whole page before Initialization
$(document).ready(function () {

    //reset the total score back to 0
    totalScore = 0;

    //generates random target number
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log(targetNumber);
    crystal1;
    console.log(crystal1);
    crystal2;
    console.log(crystal2);
    crystal3;
    console.log(crystal3);
    crystal4;
    console.log(crystal4);

    //HTML
    $("#target-number").html(targetNumber);
    $("#total").html(totalScore);
    $("#wins").html(wins);
    $("#losses").html(losses);

    //resets the game
    function reset() {
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#target-number").html(targetNumber);
        console.log(targetNumber);
        crystal1; 
        crystal2; 
        crystal3; 
        crystal4; 

        totalScore = 0;
        $("#total").html(totalScore);

    }

    //adds the wins to the counter
    function winOrLose() {
        if (totalScore === targetNumber) {
            alert("You Won!");
            wins++;
            $("#wins").text(wins);
            reset();
        } else if (totalScore >= targetNumber) {
            alert("You Lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    }
    //On click events for crystals
    $(".crystal1").on("click", function () {
        totalScore = totalScore += crystal1;
        console.log(totalScore);
        $("#total").html(totalScore);
        winOrLose();
    })

    $(".crystal2").on("click", function () {
        totalScore = totalScore += crystal2;
        console.log(totalScore);
        $("#total").html(totalScore);
        winOrLose();
    })

    $(".crystal3").on("click", function () {
        totalScore = totalScore += crystal3;
        console.log(totalScore);
        $("#total").html(totalScore);
        winOrLose();
    })

    $(".crystal4").on("click", function () {
        totalScore = totalScore += crystal4;
        console.log(totalScore);
        $("#total").html(totalScore);
        winOrLose();
    })
})