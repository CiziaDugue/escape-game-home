function hideShow(itemA, itemB, ms) {
    itemA.fadeOut(2000);
    setTimeout(function() {
        itemB.fadeIn(2000);
        setTimeout(function() {
            itemB.fadeOut(2000);
            setTimeout(function() {
                itemA.fadeIn(2000);
            }, 2000)
        }, ms)
    }, 2000);
}

function getRandomNumber(range, max) {
    return Math.random() * range - max;
}

function displayWallPaint(wallpaint) {
    wallpaint
        .css('transform', 'translate(35px, 65px) rotate(' + getRandomNumber(60, 30) + 'deg)')
        .fadeIn(800);
}

function pauseTicking(t1) {
    let ticking = $("#clock-sound")[0];
    setTimeout(function() {
        ticking.pause();
        setTimeout(function() {
            ticking.play()
        }, t1 + 5000), 10
    });
}

function playTune(tune) {
    setTimeout(function() {
        tune.pause();
        setTimeout(function() {
            tune.play()
        }, 2000), 10
    });
}

$(function() {
    if ($('#clock-main').css('display') != 'none') {
        $('#newspaper').click(function() {
            let ms = 20000;
            playTune($("#spooky-sound")[0]);
            pauseTicking(ms);
            hideShow($('#clock-main'), $('#text-main'), ms);
        });

        $('#postcard').click(function() {
            let ms = 20000;
            playTune($("#thunder-sound")[0]);
            pauseTicking(ms);
            hideShow($('#clock-main'), $('#picture-main'), ms);
        });

        $('#book').click(function() {
            let ms = 20000;
            playTune($("#spooky-sound")[0]);
            pauseTicking(ms);
            hideShow($('#clock-main'), $('#clue-main'), ms);
        });

        $('#phone').click(function() {
            let ms = 30000;
            playTune($("#ringing-sound")[0]);
            pauseTicking(ms);
            $('#clue-main').hide();
            hideShow($('#clock-main'), $('#form-main'), ms);
        });
    }

    $('#camera').click(function() {
        let flash = $("#flash-sound")[0];
        flash.play();
        $('#flash').addClass('flash-on');
        let millisecondsToWait = 400;
        setTimeout(function() {
            $('#flash').removeClass('flash-on');
            displayWallPaint($('#wp1'));
            displayWallPaint($('#wp2'));
            displayWallPaint($('#wp3'));
            displayWallPaint($('#wp4'));
        }, millisecondsToWait);
    });

    $('#magnifier').click(function() {
        if ($('.wall-paint').css('display') == 'block') {
            let reveal = $("#reveal-sound")[0];
            reveal.play();
            $('#clue1').text('39').toggleClass('red-paint text-white');
            $('#clue2').text('26').toggleClass('red-paint text-white');
            $('#clue3').text('15').toggleClass('red-paint text-white');
            $('#clue4').text('41').toggleClass('red-paint text-white');
        }
    });

    $('#submit').click(function() {
        $('#wrong').hide();
        let answer = $('#password').val();
        if (answer == 62951413) {
            $('#link').show();
        } else if (answer != '' && answer != 60221408) {
            $('#wrong').show();
            $('#password').val('').focus();
        }
    });

})
