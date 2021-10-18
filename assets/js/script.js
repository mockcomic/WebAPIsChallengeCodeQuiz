let timeLeft = 60;
let shuffledQuestions = null;
let currentQuestion = 0;
let timePenalty = 10;
let isGameOver = false;
const questions = [{
        question: 'Is JavaScript a case-sensitive language?',
        answers: [{
                text: 'true',
                correct: true
            },
            {
                text: 'false',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following is the correct syntax to print a page using JavaScript?',
        answers: [{
                text: 'window.print();',
                correct: true
            },
            {
                text: 'browser.print();',
                correct: false
            },
            {
                text: 'navigator.print();',
                correct: false
            },
            {
                text: 'document.print();',
                correct: false
            }
        ]
    },
    {
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        answers: [{
                text: 'last()',
                correct: true
            },
            {
                text: 'put()',
                correct: false
            },
            {
                text: 'push()',
                correct: true
            },
            {
                text: 'None of the above.',
                correct: false
            }
        ]
    },
    {
        question: 'All user-defined objects and built-in objects are descendants of an object called Object?',
        answers: [{
                text: 'true',
                correct: true
            },
            {
                text: 'false',
                correct: false
            }
        ]
    },
    {
        question: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        answers: [{
                text: 'toSource()',
                correct: false
            },
            {
                text: 'valueOf()',
                correct: false
            },
            {
                text: 'toString()',
                correct: true
            },
            {
                text: 'None of the above.',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following function of String object extracts a section of a string and returns a new string?',
        answers: [{
                text: 'slice()',
                correct: true
            },
            {
                text: 'split()',
                correct: false
            },
            {
                text: 'replace()',
                correct: false
            },
            {
                text: 'search()',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following function of String object returns the calling string value converted to upper case?',
        answers: [{
                text: 'toLocaleUpperCase()',
                correct: true
            },
            {
                text: 'toUpperCase()',
                correct: true
            },
            {
                text: 'toString()',
                correct: false
            },
            {
                text: 'substring()',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',
        answers: [{
                text: 'concat()',
                correct: true
            },
            {
                text: 'every()',
                correct: false
            },
            {
                text: 'filter()',
                correct: true
            },
            {
                text: 'some()',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following function of Array object removes the first element from an array and returns that element?',
        answers: [{
                text: 'reverse()',
                correct: false
            },
            {
                text: 'shift()',
                correct: true
            },
            {
                text: 'slice()',
                correct: false
            },
            {
                text: 'some()',
                correct: false
            }
        ]
    },
    {
        question: 'If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;',
        answers: [{
                text: 'true',
                correct: true
            },
            {
                text: 'false',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        answers: [{
                text: 'alertBox(“Hello DataFlair!”);',
                correct: false
            },
            {
                text: 'alert(Hello DataFlair!);',
                correct: false
            },
            {
                text: 'msgAlert(“Hello DataFlair!”);',
                correct: false
            },
            {
                text: 'alert(“Hello DataFlair!”);',
                correct: true
            }
        ]
    },
    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        answers: [{
                text: 'min(x,y);',
                correct: false
            },
            {
                text: 'Math.min(x,y)',
                correct: true
            },
            {
                text: 'Math.min(xy)',
                correct: false
            },
            {
                text: 'min(xy);',
                correct: false
            }
        ]
    },
    {
        question: 'If the value of x is 40, then what is the output of the following program? (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);',
        answers: [{
                text: 'ReferenceError',
                correct: false
            },
            {
                text: 'Divisible by 10',
                correct: true
            },
            {
                text: ' Not divisible by 10',
                correct: false
            },
            {
                text: 'None of the above',
                correct: false
            }
        ]
    },
    {
        question: 'Which JavaScript label catches all the values, except for the ones specified?',
        answers: [{
                text: 'catch',
                correct: false
            },
            {
                text: 'label',
                correct: false
            },
            {
                text: 'try',
                correct: false
            },
            {
                text: 'default',
                correct: true
            }
        ]
    },
    {
        question: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
        answers: [{
                text: ' if(x 2)',
                correct: false
            },
            {
                text: 'if(x = 2)',
                correct: false
            },
            {
                text: 'if(x == 2)',
                correct: true
            },
            {
                text: 'if(x != 2 )',
                correct: false
            }
        ]
    }

]

function setNextQuestion() {
    if (!isGameOver) {
        console.log(`Question ${currentQuestion}`);
        $('#answer-buttons').empty();
        showQuestion(questions[currentQuestion]);
        currentQuestion++;
    } else {

    };
};

function showQuestion(question) {
    $('#question').html(question.question);
    question.answers.forEach(answer => {
        let button = $('<button>').html(answer.text).addClass('btn').addClass(`${answer.correct}`);
        $('#answer-buttons').append(button);
    });
};

function countdown() {
    let timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            $("#timer").html(timeLeft + ' seconds remaining');
            timeLeft--;
        } else if (timeLeft === 1) {
            $("#timer").html(timeLeft + ' seconds remaining');
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            gameOver();
        };
    }, 1000);
};

function gameOver() {
    $('#questions').toggleClass('hide');
    $("#timer").toggleClass('hide');
    console.log('GameOver');
    $('#result').toggleClass('hide');
    $('#high-score').toggleClass('hide');
    $('#result').html('');
};

$('#start-btn').on('click', function () {
    countdown();
    console.log('Started Game!');
    $('.controls').toggleClass('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    console.log(currentQuestion);
    $('#questions').toggleClass('hide');
    $('#timer').toggleClass('hide');
    $('#high-score-btn').toggleClass('hide')
    setNextQuestion();
});

//Selecting Answer
$('#answer-buttons').on('click', '.btn', function () {
    console.log(this);
    if ($(this).hasClass('true')) {
        console.log('correct');
        $('#result').html('Correct!');
    } else {
        console.log('false');
        timeLeft = timeLeft - timePenalty;
        $('#result').html(`Wrong! -${timePenalty} seconds`);
    };
    setNextQuestion();
});

$('#high-score-btn').on('click', function () {
    $('.controls').toggleClass('hide');
    $('#high-score').toggleClass('hide');
    $('#score-list').toggleClass('hide');
});

$('#submit-btn').on('click', function () {
    localStorage.setItem(JSON.stringify($('#score').val()), JSON.stringify(timeLeft));
    location.reload();
});

for (var i = 0, len = localStorage.length; i < len; ++i) {
    let tempData = localStorage.key(i) + localStorage.getItem(localStorage.key(i))
    $('#score-list').append(`<li>${tempData}</li>`);
};
