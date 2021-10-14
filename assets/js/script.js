const startButton = $('.start-btn');

// $('.timer').replaceWith('dateInput');

// function countdown() {
//     let timeLeft = 5;

//     let timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             $('.timer').replaceWith(`${timeLeft} seconds remaing`);
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             $('.timer').replaceWith(`${timeLeft} seconds remaing`);
//             timeLeft--;
//         } else {
//             $('.timer').replaceWith('')
//             clearInterval(timeInterval);
//             displayMessage();
//         }
//     }, 1000);
// }

function countdown() {
    let timeLeft = 60;

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
        }
    }, 1000);
}

// Displays the message one word at a time
function gameOver() {
    console.log('GameOver')
    alert("Game Over!")
}

countdown();

$('#btn-4').on('click',function () {
    console.log(this)
    $(this).html('hi');
})