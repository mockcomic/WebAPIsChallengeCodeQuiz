let timeLeft = 60;
let shuffledQuestions = null;
let currentQuestion = 0;
let timePenalty = 10;
let isGameOver = false;

//Start Game
$('#start-btn').on('click', function () {
    countdown();
    console.log('Started Game!');
    $('#start-btn').toggleClass('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    console.log(currentQuestion);

    $('#questions').toggleClass('hide');
    setNextQuestion();
})

//Selecting Answer
$('#answer-buttons').on('click', '.btn', function () {
    console.log(this);
    if ($(this).hasClass('true')) {
        $('#result').empty()
        console.log('correct');
        $('#result').html('Correct!').addClass('correct');
    } else {
        $('#result').empty()
        console.log('false');
        timeLeft = timeLeft - timePenalty;
        $('#result').html(`Wrong! -${timePenalty} seconds`).addClass('wrong');
    };
    setNextQuestion();
});

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
            $(".timer").html(timeLeft + ' seconds remaining');
            timeLeft--;
        } else if (timeLeft === 1) {
            $(".timer").html(timeLeft + ' seconds remaining');
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            gameOver();
        };
    }, 1000);
};

function gameOver() {
    $('#questions').toggleClass('hide');
    $(".timer").toggleClass('hide');
    console.log('GameOver');
    $('#result').addClass('hide');

};



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
        question: 'x',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            }
        ]
    },
    {
        question: 'x',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            }
        ]
    },
    {
        question: 'x',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            }
        ]
    },
    {
        question: 'x',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            },
            {
                text: '22',
                correct: false
            }
        ]
    }

] //work in progres