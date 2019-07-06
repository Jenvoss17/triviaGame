var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timer = 21;
var index = 0;
var playing = false;

var myQuestions = [
    {
        question: "Complete the lyric: 'If he drops my name then I owe him nothing…'",
        answers: {
            a: "don't regret it one bit cause he had it coming,",
            b: "and if he spends my change then he had it coming",
            c: "should have seen the flames and started running",
            d: "never knew the pain of lovers running"
        },
        correctAnswer: 'b'
    },
    {
        question: "How many albums has Taylor Swift released?",
        answers: {
            a: "3",
            b: "6",
            c: "7",
            d: "10",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of Taylor Swift's upcoming album?",
        answers: {
            a: "Lover",
            b: "Sunset and Vine",
            c: "Broken Hearted",
            d: "Mine",
        },
        correctAnswer: 'a'
    },
    {
        question: "Complete the lyric: 'Loving him was like...'",
        answers: {
            a: "wishing you never found out it could be that strong",
            b: "watching your knight arrive just on time",
            c: "a fairytale everyday",
            d: "driving a new maserati down a dead end street"
        },
        correctAnswer: 'd'
    },
    {
        question: "Which of the names below is NOT one of Taylor Swift's Cats",
        answers: {
            a: "Meridith Grey",
            b: "Thomas Jefferson",
            c: "Olivia Benson",
            d: "Benjamin Button"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of these titles is an unreleased song by Taylor Swift?",
        answers: {
            a: "Battle",
            b: "Sweeter than Fiction",
            c: "Eyes Open",
            d: "Sparks Fly"
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the name of Taylor Swift's current record label?",
        answers: {
            a: "Pop City Records",
            b: "Big Machine Records",
            c: "Universal Music Group",
            d: "Nashville Night Music"
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is Taylor Swift's current boyfriend?",
        answers: {
            a: "Harry Styles",
            b: "John Mayer",
            c: "Louis Stringer",
            d: "Joe Alwyn"
        },
        correctAnswer: 'd'
    },
];

$(document).ready(function () {
    setInterval(() => {
        if (playing) {
            timer--;
            $("#timer").text(timer + 's');
            if (timer == 0) checkAnswer()
        }
    }, 1000);
})

$("#Start").on("click", function (event) {
    console.log("Start")
    startGame();
    $("#Start").hide();
})
$("#answerA").on("click", function (event) {
    checkAnswer("a")
})
$("#answerB").on("click", function (event) {
    checkAnswer("b")
})
$("#answerC").on("click", function (event) {
    checkAnswer("c")
})
$("#answerD").on("click", function (event) {
    checkAnswer("d")
})
$("#startAgain").on("click", function (event) {
    $("#timer").text(timer + 's');
    $("#correct").text("");
    $("#incorrect").text("");
    $("#unanswered").text("");
    $("#startAgain").hide();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    index = 0;
    startGame();
}
)

function checkAnswer(answer) {
    if (answer && myQuestions[index].correctAnswer == answer) {
        correctAnswers++;
    } else if (answer) {
        incorrectAnswers++;
    } else {
        unanswered++;
    }
    index++;
    if (myQuestions.length <= index) {
        endGame();
    } else {
        startGame();
    }
}


function startGame() {
    playing = true;
    timer = 21;
    $("#timer").show();
    $("#Question").text(myQuestions[index].question);
    $("#answerA").text("A: " + myQuestions[index].answers.a);
    $("#answerB").text("B: " + myQuestions[index].answers.b);
    $("#answerC").text("C: " + myQuestions[index].answers.c);
    $("#answerD").text("D: " + myQuestions[index].answers.d);
}

function endGame() {
    playing = false;
    $("#timer").hide();
    $("#Question").text("");
    $("#answerA").text("");
    $("#answerB").text("");
    $("#answerC").text("");
    $("#answerD").text("");

    $("#correct").text("Correct: " + correctAnswers);
    $("#incorrect").text("Incorrect: " + incorrectAnswers);
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#startAgain").show();
}


