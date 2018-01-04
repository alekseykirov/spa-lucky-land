$(window).on('load', function () {
    setTimeout(function () {
        $('.js-preloader').fadeOut();
    }, 0);
});

$(function () {
    window.playersArray = [];
    window.imagesArrayBlue = [
        {id: 0, color: 'blue', url: 'url("../img/blue/0.png")'},
        {id: 1, color: 'blue', url: 'url("../img/blue/1.png")'},
        {id: 2, color: 'blue', url: 'url("../img/blue/2.png")'},
        {id: 3, color: 'blue', url: 'url("../img/blue/3.png")'},
        {id: 4, color: 'blue', url: 'url("../img/blue/4.png")'},
        {id: 5, color: 'blue', url: 'url("../img/blue/5.png")'},
        {id: 6, color: 'blue', url: 'url("../img/blue/6.png")'},
        {id: 7, color: 'blue', url: 'url("../img/blue/7.png")'},
        {id: 8, color: 'blue', url: 'url("../img/blue/8.png")'},
        {id: 9, color: 'blue', url: 'url("../img/blue/9.png")'}
    ];
    window.imagesArrayGreen = [
        {id: 0, color: 'green', url: 'url("../img/green/0.png")'},
        {id: 1, color: 'green', url: 'url("../img/green/1.png")'},
        {id: 2, color: 'green', url: 'url("../img/green/2.png")'},
        {id: 3, color: 'green', url: 'url("../img/green/3.png")'},
        {id: 4, color: 'green', url: 'url("../img/green/4.png")'},
        {id: 5, color: 'green', url: 'url("../img/green/5.png")'},
        {id: 6, color: 'green', url: 'url("../img/green/6.png")'},
        {id: 7, color: 'green', url: 'url("../img/green/7.png")'},
        {id: 8, color: 'green', url: 'url("../img/green/8.png")'},
        {id: 9, color: 'green', url: 'url("../img/green/9.png")'}
    ];
    window.imagesArrayOrange = [
        {id: 0, color: 'orange', url: 'url("../img/orange/0.png")'},
        {id: 1, color: 'orange', url: 'url("../img/orange/1.png")'},
        {id: 2, color: 'orange', url: 'url("../img/orange/2.png")'},
        {id: 3, color: 'orange', url: 'url("../img/orange/3.png")'},
        {id: 4, color: 'orange', url: 'url("../img/orange/4.png")'},
        {id: 5, color: 'orange', url: 'url("../img/orange/5.png")'},
        {id: 6, color: 'orange', url: 'url("../img/orange/6.png")'},
        {id: 7, color: 'orange', url: 'url("../img/orange/7.png")'},
        {id: 8, color: 'orange', url: 'url("../img/orange/8.png")'},
        {id: 9, color: 'orange', url: 'url("../img/orange/9.png")'}
    ];
    window.imagesArrayYellow = [
        {id: 0, color: 'yellow', url: 'url("../img/yellow/0.png")'},
        {id: 1, color: 'yellow', url: 'url("../img/yellow/1.png")'},
        {id: 2, color: 'yellow', url: 'url("../img/yellow/2.png")'},
        {id: 3, color: 'yellow', url: 'url("../img/yellow/3.png")'},
        {id: 4, color: 'yellow', url: 'url("../img/yellow/4.png")'},
        {id: 5, color: 'yellow', url: 'url("../img/yellow/5.png")'},
        {id: 6, color: 'yellow', url: 'url("../img/yellow/6.png")'},
        {id: 7, color: 'yellow', url: 'url("../img/yellow/7.png")'},
        {id: 8, color: 'yellow', url: 'url("../img/yellow/8.png")'},
        {id: 9, color: 'yellow', url: 'url("../img/yellow/9.png")'}
    ];
    var positionArray = [
        {position: 0, x: 1, y: 1, bottom: 6, left: 2, color: 'grey'},
        {position: 1, x: 1, y: 2, bottom: 20, left: 2, color: 'orange'},
        {position: 2, x: 1, y: 3, bottom: 34, left: 2, color: 'grey'},
        {position: 3, x: 1, y: 4, bottom: 48, left: 2, color: 'green'},
        {position: 4, x: 1, y: 5, bottom: 62, left: 2, color: 'yellow'},
        {position: 5, x: 1, y: 6, bottom: 76, left: 2, color: 'blue'},
        {position: 6, x: 1, y: 7, bottom: 90, left: 2, color: 'orange'},
        {position: 7, x: 2, y: 7, bottom: 90, left: 16, color: 'grey'},
        {position: 8, x: 3, y: 7, bottom: 90, left: 30, color: 'green'},
        {position: 9, x: 4, y: 7, bottom: 90, left: 44, color: 'yellow'},
        {position: 10, x: 5, y: 7, bottom: 90, left: 58, color: 'blue'},
        {position: 11, x: 6, y: 7, bottom: 90, left: 72, color: 'grey'},
        {position: 12, x: 7, y: 7, bottom: 90, left: 86, color: 'orange'},
        {position: 13, x: 8, y: 7, bottom: 90, left: 100, color: 'green'},
        {position: 14, x: 9, y: 7, bottom: 90, left: 114, color: 'yellow'},
        {position: 15, x: 10, y: 7, bottom: 90, left: 128, color: 'grey'},
        {position: 16, x: 10, y: 6, bottom: 76, left: 128, color: 'blue'},
        {position: 17, x: 10, y: 5, bottom: 62, left: 128, color: 'orange'},
        {position: 18, x: 10, y: 4, bottom: 48, left: 128, color: 'green'},
        {position: 19, x: 10, y: 3, bottom: 34, left: 128, color: 'yellow'},
        {position: 20, x: 10, y: 2, bottom: 20, left: 128, color: 'grey'},
        {position: 21, x: 10, y: 1, bottom: 6, left: 128, color: 'blue'},
        {position: 22, x: 9, y: 1, bottom: 6, left: 114, color: 'orange'},
        {position: 23, x: 8, y: 1, bottom: 6, left: 100, color: 'grey'},
        {position: 24, x: 7, y: 1, bottom: 6, left: 86, color: 'green'},
        {position: 25, x: 6, y: 1, bottom: 6, left: 72, color: 'yellow'},
        {position: 26, x: 5, y: 1, bottom: 6, left: 58, color: 'grey'},
        {position: 27, x: 4, y: 1, bottom: 6, left: 44, color: 'blue'},
        {position: 28, x: 3, y: 1, bottom: 6, left: 30, color: 'orange'},
        {position: 29, x: 2, y: 1, bottom: 6, left: 16, color: 'green'},
        {position: 30, x: 1, y: 1, bottom: 6, left: 2, color: 'grey'},
        {position: 31, x: 1, y: 2, bottom: 20, left: 2, color: 'orange'},
        {position: 32, x: 1, y: 3, bottom: 34, left: 2, color: 'grey'},
        {position: 33, x: 1, y: 4, bottom: 48, left: 2, color: 'green'},
        {position: 34, x: 1, y: 5, bottom: 62, left: 2, color: 'yellow'},
        {position: 35, x: 1, y: 6, bottom: 76, left: 2, color: 'blue'},
        {position: 36, x: 1, y: 7, bottom: 90, left: 2, color: 'orange'},
        {position: 37, x: 2, y: 7, bottom: 90, left: 16, color: 'grey'},
        {position: 38, x: 3, y: 7, bottom: 90, left: 30, color: 'green'},
        {position: 39, x: 4, y: 7, bottom: 90, left: 44, color: 'yellow'},
        {position: 40, x: 5, y: 7, bottom: 90, left: 58, color: 'blue'},
        {position: 41, x: 6, y: 7, bottom: 90, left: 72, color: 'grey'},
        {position: 42, x: 7, y: 7, bottom: 90, left: 86, color: 'orange'},
        {position: 43, x: 8, y: 7, bottom: 90, left: 100, color: 'green'},
        {position: 44, x: 9, y: 7, bottom: 90, left: 114, color: 'yellow'},
        {position: 45, x: 10, y: 7, bottom: 90, left: 128, color: 'grey'},
        {position: 46, x: 10, y: 6, bottom: 76, left: 128, color: 'blue'},
        {position: 47, x: 10, y: 5, bottom: 62, left: 128, color: 'orange'},
        {position: 48, x: 10, y: 4, bottom: 48, left: 128, color: 'green'},
        {position: 49, x: 10, y: 3, bottom: 34, left: 128, color: 'yellow'},
        {position: 50, x: 10, y: 2, bottom: 20, left: 128, color: 'grey'},
        {position: 51, x: 10, y: 1, bottom: 6, left: 128, color: 'blue'},
        {position: 52, x: 9, y: 1, bottom: 6, left: 114, color: 'orange'},
        {position: 53, x: 8, y: 1, bottom: 6, left: 100, color: 'grey'},
        {position: 54, x: 7, y: 1, bottom: 6, left: 86, color: 'green'},
        {position: 55, x: 6, y: 1, bottom: 6, left: 72, color: 'yellow'},
        {position: 56, x: 5, y: 1, bottom: 6, left: 58, color: 'grey'},
        {position: 57, x: 4, y: 1, bottom: 6, left: 44, color: 'blue'},
        {position: 58, x: 3, y: 1, bottom: 6, left: 30, color: 'orange'},
        {position: 59, x: 2, y: 1, bottom: 6, left: 16, color: 'green'},
        {position: 60, x: 1, y: 1, bottom: 6, left: 2, color: 'grey'},
        {position: 61, x: 1, y: 2, bottom: 20, left: 2, color: 'orange'},
        {position: 62, x: 1, y: 3, bottom: 34, left: 2, color: 'grey'},
        {position: 63, x: 1, y: 4, bottom: 48, left: 2, color: 'green'},
        {position: 64, x: 1, y: 5, bottom: 62, left: 2, color: 'yellow'},
        {position: 65, x: 1, y: 6, bottom: 76, left: 2, color: 'blue'},
        {position: 66, x: 1, y: 7, bottom: 90, left: 2, color: 'orange'},
        {position: 67, x: 2, y: 7, bottom: 90, left: 16, color: 'grey'},
        {position: 68, x: 3, y: 7, bottom: 90, left: 30, color: 'green'},
        {position: 69, x: 4, y: 7, bottom: 90, left: 44, color: 'yellow'},
        {position: 70, x: 5, y: 7, bottom: 90, left: 58, color: 'blue'},
        {position: 71, x: 6, y: 7, bottom: 90, left: 72, color: 'grey'},
        {position: 72, x: 7, y: 7, bottom: 90, left: 86, color: 'orange'},
        {position: 73, x: 8, y: 7, bottom: 90, left: 100, color: 'green'},
        {position: 74, x: 9, y: 7, bottom: 90, left: 114, color: 'yellow'},
        {position: 75, x: 10, y: 7, bottom: 90, left: 128, color: 'grey'},
        {position: 76, x: 10, y: 6, bottom: 76, left: 128, color: 'blue'},
        {position: 77, x: 10, y: 5, bottom: 62, left: 128, color: 'orange'},
        {position: 78, x: 10, y: 4, bottom: 48, left: 128, color: 'green'},
        {position: 79, x: 10, y: 3, bottom: 34, left: 128, color: 'yellow'},
        {position: 80, x: 10, y: 2, bottom: 20, left: 128, color: 'grey'},
        {position: 81, x: 10, y: 1, bottom: 6, left: 128, color: 'blue'},
        {position: 82, x: 9, y: 1, bottom: 6, left: 114, color: 'orange'},
        {position: 83, x: 8, y: 1, bottom: 6, left: 100, color: 'grey'},
        {position: 84, x: 7, y: 1, bottom: 6, left: 86, color: 'green'},
        {position: 85, x: 6, y: 1, bottom: 6, left: 72, color: 'yellow'},
        {position: 86, x: 5, y: 1, bottom: 6, left: 58, color: 'grey'},
        {position: 87, x: 4, y: 1, bottom: 6, left: 44, color: 'blue'},
        {position: 88, x: 3, y: 1, bottom: 6, left: 30, color: 'orange'},
        {position: 89, x: 2, y: 1, bottom: 6, left: 16, color: 'green'},
        {position: 90, x: 1, y: 1, bottom: 6, left: 2, color: 'grey'},
        {position: 91, x: 1, y: 2, bottom: 20, left: 2, color: 'orange'},
        {position: 92, x: 1, y: 3, bottom: 34, left: 2, color: 'grey'},
        {position: 93, x: 1, y: 4, bottom: 48, left: 2, color: 'green'},
        {position: 94, x: 1, y: 5, bottom: 62, left: 2, color: 'yellow'},
        {position: 95, x: 1, y: 6, bottom: 76, left: 2, color: 'blue'},
        {position: 96, x: 1, y: 7, bottom: 90, left: 2, color: 'orange'},
        {position: 97, x: 2, y: 7, bottom: 90, left: 16, color: 'grey'},
        {position: 98, x: 3, y: 7, bottom: 90, left: 30, color: 'green'},
        {position: 99, x: 4, y: 7, bottom: 90, left: 44, color: 'yellow'},
        {position: 100, x: 5, y: 7, bottom: 90, left: 58, color: 'blue'},
        {position: 101, x: 6, y: 7, bottom: 90, left: 72, color: 'grey'},
        {position: 102, x: 7, y: 7, bottom: 90, left: 86, color: 'orange'},
        {position: 103, x: 8, y: 7, bottom: 90, left: 100, color: 'green'},
        {position: 104, x: 9, y: 7, bottom: 90, left: 114, color: 'yellow'},
        {position: 105, x: 10, y: 7, bottom: 90, left: 128, color: 'grey'},
        {position: 106, x: 10, y: 6, bottom: 76, left: 128, color: 'blue'},
        {position: 107, x: 10, y: 5, bottom: 62, left: 128, color: 'orange'},
        {position: 108, x: 10, y: 4, bottom: 48, left: 128, color: 'green'},
        {position: 109, x: 10, y: 3, bottom: 34, left: 128, color: 'yellow'},
        {position: 110, x: 10, y: 2, bottom: 20, left: 128, color: 'grey'},
        {position: 111, x: 10, y: 1, bottom: 6, left: 128, color: 'blue'},
        {position: 112, x: 9, y: 1, bottom: 6, left: 114, color: 'orange'},
        {position: 113, x: 8, y: 1, bottom: 6, left: 100, color: 'grey'},
        {position: 114, x: 7, y: 1, bottom: 6, left: 86, color: 'green'},
        {position: 115, x: 6, y: 1, bottom: 6, left: 72, color: 'yellow'},
        {position: 116, x: 5, y: 1, bottom: 6, left: 58, color: 'grey'},
        {position: 117, x: 4, y: 1, bottom: 6, left: 44, color: 'blue'},
        {position: 118, x: 3, y: 1, bottom: 6, left: 30, color: 'orange'},
        {position: 119, x: 2, y: 1, bottom: 6, left: 16, color: 'green'},
        {position: 120, x: 1, y: 1, bottom: 6, left: 2, color: 'grey'},
        {position: 121, x: 1, y: 2, bottom: 20, left: 2, color: 'orange'},
        {position: 122, x: 1, y: 3, bottom: 34, left: 2, color: 'grey'},
        {position: 123, x: 1, y: 4, bottom: 48, left: 2, color: 'green'},
        {position: 124, x: 1, y: 5, bottom: 62, left: 2, color: 'yellow'},
        {position: 125, x: 1, y: 6, bottom: 76, left: 2, color: 'blue'},
        {position: 126, x: 1, y: 7, bottom: 90, left: 2, color: 'orange'},
        {position: 127, x: 2, y: 7, bottom: 90, left: 16, color: 'grey'},
        {position: 128, x: 3, y: 7, bottom: 90, left: 30, color: 'green'},
        {position: 129, x: 4, y: 7, bottom: 90, left: 44, color: 'yellow'},
        {position: 130, x: 5, y: 7, bottom: 90, left: 58, color: 'blue'},
        {position: 131, x: 6, y: 7, bottom: 90, left: 72, color: 'grey'},
        {position: 132, x: 7, y: 7, bottom: 90, left: 86, color: 'orange'},
        {position: 133, x: 8, y: 7, bottom: 90, left: 100, color: 'green'},
        {position: 134, x: 9, y: 7, bottom: 90, left: 114, color: 'yellow'},
        {position: 135, x: 10, y: 7, bottom: 90, left: 128, color: 'grey'},
        {position: 136, x: 10, y: 6, bottom: 76, left: 128, color: 'blue'},
        {position: 137, x: 10, y: 5, bottom: 62, left: 128, color: 'orange'},
        {position: 138, x: 10, y: 4, bottom: 48, left: 128, color: 'green'},
        {position: 139, x: 10, y: 3, bottom: 34, left: 128, color: 'yellow'},
        {position: 140, x: 10, y: 2, bottom: 20, left: 128, color: 'grey'},
        {position: 141, x: 10, y: 1, bottom: 6, left: 128, color: 'blue'},
        {position: 142, x: 9, y: 1, bottom: 6, left: 114, color: 'orange'},
        {position: 143, x: 8, y: 1, bottom: 6, left: 100, color: 'grey'},
        {position: 144, x: 7, y: 1, bottom: 6, left: 86, color: 'green'},
        {position: 145, x: 6, y: 1, bottom: 6, left: 72, color: 'yellow'},
        {position: 146, x: 5, y: 1, bottom: 6, left: 58, color: 'grey'},
        {position: 147, x: 4, y: 1, bottom: 6, left: 44, color: 'blue'}
    ];


    // Шаг 1. Нажимаем старт - переходит у выбору игроков
    $('.js-button-start').on('click', function () {
        $(this).closest('.first-start__step').addClass('hidden');
        $('.first-start__step_2').removeClass('hidden');
    });

    // Шаг 1. Нажимаем правила - нужно сделать чтобы выходила страница с правилами
    $('.js-button-rules').on('click', function () {
        alert('Rules');
    });

    // Шаг 2. Выбираем количество игроков, игроки отображаются в score и их фишки
    $('.js-button-choose').on('click', function () {
        var numberOfPlayers = $(this).attr('data-choose-number');

        for (var j = 1; j <= numberOfPlayers; j++) {
            window.playersArray.push({id: j, player: 'Player ' + j, score: 0, position: 0, activity: 'inactive'})
        }
        window.playersArray[0].activity = 'active';

        for (var i = 0; i < +numberOfPlayers; i++) {
            var templateScore = '<li class="statistic__player statistic__player_' + window.playersArray[i].id + '" data-statistic-id="' + window.playersArray[i].id + '">' +
                '<div class="statistic__icon"></div>' +
                '<div class="statistic__amount">' + window.playersArray[i].score + '</div>' +
                '</li>';
            var templateChips = '<div class="player player_' + window.playersArray[i].id + '" data-activity="' + window.playersArray[i].activity + '" data-player="' + window.playersArray[i].id + '">' +
                '<div class="player-number">' + window.playersArray[i].id + '</div>' +
                '</div>';

            $('.statistic__list').append(templateScore);
            $(templateChips).appendTo($('.js-start-line'));
        }
        $(this).closest('.first-start').addClass('hidden');
    });

    $('.js-wrong').on('click', function () {
        $('.js-btn-dice').closest('.button').removeClass('inactive');
        $('.card-answer').removeClass('active');
        $('.card').removeClass('active');
        checkTheNumberOfCards();
    });

    $('.js-right').on('click', function () {
        $('.js-btn-dice').closest('.button').removeClass('inactive');
        var player = $(this).attr('data-player-active');
        for (var i = 0; i < window.playersArray.length; i++) {
            if (window.playersArray[i].id == player) {
                window.playersArray[i].score += 5;
                $('.statistic__player_' + player).find('.statistic__amount').text(window.playersArray[i].score);
            }
        }

        $('.card-answer').removeClass('active');
        $('.card').removeClass('active');
        checkTheNumberOfCards()
    });

    $('.js-btn-dice').bind('click', function (e) {
        e.preventDefault();
        $(this).closest('.button').addClass('inactive');
        var randomNumber = getRandomNumber();
        $('.js-title-dice').text(randomNumber);

        var player = $('.player[data-activity="active"]');
        for (var j = 0; j < window.playersArray.length; j++) {
            if (window.playersArray[j].activity == 'active') {
                var next = j + 1, x = 0, y = 0;
                switch (j) {
                    case 0:
                        x = 0;
                        y = 0;
                        break;
                    case 1:
                        x = 2;
                        y = 0;
                        break;
                    case 2:
                        x = 4;
                        y = 0;
                        break;
                    case 3:
                        x = 6;
                        y = 0;
                        break;
                    case 4:
                        x = 0;
                        y = -2;
                        break;
                    case 5:
                        x = 2;
                        y = -2;
                        break;
                    case 6:
                        x = 4;
                        y = -2;
                        break;
                    default:
                        x = 6;
                        y = -2;
                }
                window.playersArray[j].position += randomNumber;
                player.css(
                    {
                        'left': positionArray[window.playersArray[j].position].left + x + 'vh',
                        'bottom': positionArray[window.playersArray[j].position].bottom + y + 'vh'
                    }
                );
                $('.js-right').attr('data-player-active', window.playersArray[j].id);
                window.playersArray[j].activity = 'inactive';
                if (window.playersArray.length == (next)) {
                    window.playersArray[0].activity = 'active';
                } else {
                    window.playersArray[next].activity = 'active';
                }
                showCurrentCart(positionArray[window.playersArray[j].position].color, positionArray[window.playersArray[j].position].position);
                break;
            }
        }
        for (var k = 0; k < window.playersArray.length; k++) {
            var id = window.playersArray[k].id;
            $('.player[data-player="' + id + '"]').attr('data-activity', window.playersArray[k].activity)
        }
    });


    function showCurrentCart(currentColor, position) {
        switch (currentColor) {
            case 'blue':
                spliceArray(imagesArrayBlue);
                break;
            case 'green':
                spliceArray(imagesArrayGreen);
                break;
            case 'orange':
                spliceArray(imagesArrayOrange);
                break;
            case 'yellow':
                spliceArray(imagesArrayYellow);
                break;
        }
        showNumberCard();

        $('.card').removeClass('active');
        var colorCard = '.card_' + currentColor;
        setTimeout(function () {
            $(colorCard).addClass('active');
            if (positionArray[position].color != 'grey') {
                setTimeout(function () {
                    $('.card-answer').addClass('active');
                }, 1500);
            }
            if (positionArray[position].color == 'grey') {
                $('.js-btn-dice').closest('.button').removeClass('inactive');
            }
        }, 1500);
    }

    function showNumberCard() {
        $('.js-yellow').empty().text(window.imagesArrayYellow.length);
        $('.js-blue').empty().text(window.imagesArrayBlue.length);
        $('.js-green').empty().text(window.imagesArrayGreen.length);
        $('.js-orange').empty().text(window.imagesArrayOrange.length);
    }

    function getRandomNumber() {
        return Math.floor(1 + Math.random() * 6);
    }

    function spliceArray(array) {
        var rand = Math.floor(Math.random() * array.length);
        $('.card-answer__card').css({'background-image': array[rand].url});
        array.splice(rand, 1);
    }

    function checkTheNumberOfCards() {
        if (window.imagesArrayBlue.length == 0 ||
            window.imagesArrayGreen.length == 0 ||
            window.imagesArrayOrange.length == 0 ||
            window.imagesArrayYellow.length == 0) {
            showWinner();
        }
    }

    function showWinner() {
        console.log('Тут будет победитель')
    }
});