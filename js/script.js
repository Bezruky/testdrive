//slider one
$(document).ready(function () {
    $('.b2__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 4, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 500, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 3000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: true, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: false, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
//slider two - main
$(document).ready(function () {
    $('.b12__slider-main').slick({
        arrows: true,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 1, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 500, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 3000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: true, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: false, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана
            // {
            //     breakpoint: 1320,
            //     settings: {
            //         slidesToShow: 3
            //     }
            // }, {
            //     breakpoint: 970,
            //     settings: {
            //         slidesToShow: 2
            //     }
            // }, {
            //     breakpoint: 680,
            //     settings: {
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
});
//slider two - two
$(document).ready(function () {
    $('.b12__slider-two').slick({
        arrows: false,
        dots: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 1, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 500, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 3000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: false, //Перелистывание мышкой
        swipe: false, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: false, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        asNavFor: '.b12__slider-three',
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана

        ]
    });
});
//slider two - three
$(document).ready(function () {
    $('.b12__slider-three').slick({
        arrows: false,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 4, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 500, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 3000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: true, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: false, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        asNavFor: '.b12__slider-two',
        focusOnSelect: true,
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана

        ]
    });
});
//Checkbox
$.each($('.b9__f-checkbox'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active');
    }
});
$(document).on('click', '.b9__f-checkbox', function (event) {
    if ($(this).hasClass('active')) {
        $(this).find('input').prop('checked', false);
    } else {
        $(this).find('input').prop('checked', true);
    }
    $(this).toggleClass('active');
    return false;
});