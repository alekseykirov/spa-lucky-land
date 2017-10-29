$(window).on('load', function () {
    setTimeout(function () {
        $('.js-preloader').fadeOut();
    }, 0);
});

$(function () {
    var position = 0;

    $('.js-button-start').on('click', function () {
        $(this).closest('.first-start__step').addClass('hidden');
        $('.first-start__step_2').removeClass('hidden');
    });

    $('.js-button-rules').on('click', function () {
        alert('Rules');
    });

    $('.js-button-choose').on('click', function () {
        $(this).closest('.first-start').addClass('hidden');
    });

    $('.js-dice').on('click', function () {
        // $(this).closest('.button').addClass('inactive');

        var rand = getRandomNumber();


        $('.history__title').empty().append(rand);
        var player = $('.player_4');
        position += rand;
        console.log(position);

        var player4Bottom = player.css('bottom');
        var player4BottomNumber = parseInt(player4Bottom, 10);

        var player4Left = player.css('left');
        var player4LeftNumber = parseInt(player4Left, 10);


        if (position <= 6) {
            player.css({'bottom': player4BottomNumber + getDefaultDistance() * rand + 'px'});
        } else if (position > 6 && position <= 15) {
            var a = 6 - position;
            // var b = rand - a;
            player.css({'bottom': player4BottomNumber + getDefaultDistance() * a + 'px'});

            // player.css({'left': player4LeftNumber + getDefaultDistance() * b + 'px'});
        } else if (position > 15 && position <= 21) {
            player.css({'bottom': player4BottomNumber - getDefaultDistance() * rand + 'px'});
        } else if (position > 21 && position <= 30) {
            player.css({'left': player4LeftNumber - getDefaultDistance() * rand + 'px'});
        }
    });


    function getRandomNumber() {
        return Math.floor(1 + Math.random() * 6);
    }

    function getDefaultDistance() {
        return parseInt($('.js-distance').css('width'), 10);
    }


})
;