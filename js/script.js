/* Анимация при скролле */

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }  
  }

  // setTimeout(() => {
  //   animOnScroll();
  // }, 100);
  animOnScroll();
} else {
  console.log("error");
}


// Выпадающее окно с выбором языка сайта

$(document).ready(function () {
  $(".language-selector-btn").click(function (event) {
    event.stopPropagation();
    $(".language-dropdown").slideToggle();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".language-selector").length) {
      $(".language-dropdown").slideUp();
    }
  });
});

/* Аккордеон */

var accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  var header = item.querySelector(".accordion-header");

  header.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      accordionItems.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});
/* Burger-menu */

$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger, .burger-menu, .header-wrapper").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header-logo-link, .globus").toggle();
  });
  $(".header-link-burger, .header-button-burger-link").click(function () {
    $(".header-burger, .burger-menu, .header-wrapper").removeClass("active");
    $("body").removeClass("lock");
    $(".header-logo-link, .globus").show(); // Показываем элементы
  });
});

/* Sliders  */


/* $(document).ready(function () {
  $(".services-slider").slick({
     infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
           centerMode: false,
           variableWidth: false,
           swipe: true,
           adaptiveHeight: true,
            speed: 1000,
            fade: true,
           slide: "div",
            cssEase: "linear",
        },
      },
    ],
  });
$(document).ready(function () {
  $(".services-slider .slick-prev").css("display", "none");
  $(".services-slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var slideCount = slick.slideCount;

      // Проверка для кнопки "Вперед"
      if (currentSlide === slideCount - 1) {
        $(".services-slider .slick-next").css("display", "none"); // Скрыть кнопку "Вперед"
      } else {
        $(".services-slider .slick-next").css("display", "block"); // Показать кнопку "Вперед"
      }

      // Проверка для кнопки "Назад"
      if (currentSlide === 0) {
        $(".services-slider .slick-prev").css("display", "none"); // Скрыть кнопку "Назад"
      } else {
        $(".services-slider .slick-prev").css("display", "block"); // Показать кнопку "Назад"
      }
    }
  );
});

  $(".services-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // Сбросить все фоны и цвета текста
      $(".services-slider-item").css(
        "background-color",
        "rgba(255, 525, 255, 0.03)"
      );
      $(
        ".services-slider-item h3, .services-slider-item h4, .services-slider-item p"
      ).css("color", "rgb(232, 232, 232)");
      $(".services-slider-item .white").css("display", "block");
      $(".services-slider-item .black").css("display", "none");

      // Проверьте ширину экрана
      if ($(window).width() < 769) {
        // Изменение цвета фона и текста активного слайда (для маленьких экранов)

        $('.services-slider-item[data-slick-index="' + nextSlide + '"]').css({
          "background-color": "rgb(232, 232, 232)",
        });
        $(
          '.services-slider-item[data-slick-index="' +
            nextSlide +
            '"] h3, .services-slider-item[data-slick-index="' +
            nextSlide +
            '"] h4, .services-slider-item[data-slick-index="' +
            nextSlide +
            '"] p'
        ).css("color", "rgb(46, 46, 46)");
        $(
          '.services-slider-item[data-slick-index="' + nextSlide + '"] .black'
        ).css("display", "block");
        $(
          '.services-slider-item[data-slick-index="' + nextSlide + '"] .white'
        ).css("display", "none"); 
        
      } else {
         // Изменить цвет фона и текста активного слайда (для больших экранов)

         $('.services-slider-item[data-slick-index="' + nextSlide + '"]').css({
           "background-color": "rgb(232, 232, 232)",
         });
         $(
           '.services-slider-item[data-slick-index="' +
             nextSlide +
             '"] h3, .services-slider-item[data-slick-index="' +
             nextSlide +
             '"] h4, .services-slider-item[data-slick-index="' +
             nextSlide +
             '"] p'
         ).css("color", "rgb(46, 46, 46)");
         $(
           '.services-slider-item[data-slick-index="' + nextSlide + '"] .black'
         ).css("display", "block");
         $(
           '.services-slider-item[data-slick-index="' + nextSlide + '"] .white'
         ).css("display", "none");
       }
    }
  );
  
/////////////

  $(".unity-slider").slick({
    infinite: true,  
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    // centerMode: false,
    variableWidth: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true,
          swipe: true,
           speed: 1000,
            fade: true,
           slide: "div",
            cssEase: "linear",
        },
      },
    ],
  });
});

$(".unity-slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    // Сбросить все фоны и цвета текста
    $(".unity-slider-item").css(
      "background-color",
      "rgba(255, 525, 255, 0.03)"
    );
    $(".unity-slider-item h3, .unity-slider-item h4, .unity-slider-item p").css(
      "color",
      "rgb(232, 232, 232)"
    );

    // Проверьте ширину экрана
    if ($(window).width() < 769) {
      // Изменение цвета фона и текста активного слайда (для маленьких экранов)

      $('.unity-slider-item[data-slick-index="' + nextSlide + '"]').css({
        "background-color": "rgb(232, 232, 232)",
      });
      $(
        '.unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] h3, .unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] h4, .unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] p'
      ).css("color", "rgb(47, 47, 47)");
    } else {
      // Изменить цвет фона и текста активного слайда (для больших экранов)

      $('.unity-slider-item[data-slick-index="' + nextSlide + '"]').css({
        "background-color": "rgb(232, 232, 232)",
      });
      $(
        '.unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] h3, .unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] h4, .unity-slider-item[data-slick-index="' +
          nextSlide +
          '"] p'
      ).css("color", "rgb(47, 47, 47)");
    }
  }
);
$(document).ready(function () {
  $(".unity-slider .slick-prev").css("display", "none");
$(".unity-slider").on("afterChange", function (event, slick, currentSlide) {
  var slideCount = slick.slideCount;

  // Проверка для кнопки "Вперед"
  if (currentSlide === slideCount - 1) {
    $(".unity-slider .slick-next").css("display", "none"); // Скрыть кнопку "Вперед"
  } else {
    $(".unity-slider .slick-next").css("display", "block"); // Показать кнопку "Вперед"
  }

  // Проверка для кнопки "Назад"
  if (currentSlide === 0) {
    $(".unity-slider .slick-prev").css("display", "none"); // Скрыть кнопку "Назад"
  } else {
    $(".unity-slider .slick-prev").css("display", "block"); // Показать кнопку "Назад"
  }
});
});

// Установка начального цвета фона и текста для активного слайда
$(document).ready(function () {
  var initialSlideIndex = $(".services-slider").slick("slickCurrentSlide");

  $('.services-slider-item[data-slick-index="' + initialSlideIndex + '"]').css({
    "background-color": "rgb(232, 232, 232)",
  });
  $(
    '.services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h3, .services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h4, .services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] p'
  ).css("color", "rgb(46, 46, 46)");
  $(
    '.services-slider-item[data-slick-index="' + initialSlideIndex + '"] .black'
  ).css("display", "block");
  $(
    '.services-slider-item[data-slick-index="' + initialSlideIndex + '"] .white'
  ).css("display", "none");
});

// Установка начального цвета фона и текста для активного слайда
$(document).ready(function () {
  var initialSlideIndex = $(".unity-slider").slick("slickCurrentSlide");

  if ($(window).width() < 769) {
    $('.unity-slider-item[data-slick-index="' + initialSlideIndex + '"]').css({
      "background-color": "rgb(232, 232, 232)",
    });
    $(
      '.unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] h3, .unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] h4, .unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] p'
    ).css("color", "rgb(47, 47, 47)");
  } else {
    $('.unity-slider-item[data-slick-index="' + initialSlideIndex + '"]').css({
      "background-color": "rgb(232, 232, 232)",
    });
    $(
      '.unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] h3, .unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] h4, .unity-slider-item[data-slick-index="' +
        initialSlideIndex +
        '"] p'
    ).css("color", "rgb(47, 47, 47)");
  }
}); */

$(document).ready(function () {

    //  .services-slider

  $(".services-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
          centerMode: false,
          variableWidth: false,
          swipe: true,
          adaptiveHeight: true,
          speed: 1000,
          fade: true,
          slide: "div",
          cssEase: "linear",
        },
      },
    ],
  });

  // Проверка для кнопки "Вперед" и "Назад" для .services-slider

  $(document).ready(function () {
    $(".services-slider .slick-prev").css("display", "none");

    $(".services-slider").on(
      "afterChange",
      function (event, slick, currentSlide) {
        var slideCount = slick.slideCount;

        // Проверка для кнопки "Вперед"
        if (currentSlide === slideCount - 1) {
          $(".services-slider .slick-next").css("display", "none"); // Скрыть кнопку "Вперед"
        } else {
          $(".services-slider .slick-next").css("display", "block"); // Показать кнопку "Вперед"
        }

        // Проверка для кнопки "Назад"
        if (currentSlide === 0) {
          $(".services-slider .slick-prev").css("display", "none"); // Скрыть кнопку "Назад"
        } else {
          $(".services-slider .slick-prev").css("display", "block"); // Показать кнопку "Назад"
        }
      }
    );
  });

  // Замена фона и цвета текста для .services-slider

  $(document).ready(function () {
    $(".services-slider").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        // Сбросить все фоны и цвета текста
        $(".services-slider-item").css(
          "background-color",
          "rgba(255, 255, 255, 0.03)"
        );
        $(
          ".services-slider-item h3, .services-slider-item h4, .services-slider-item p"
        ).css("color", "rgb(232, 232, 232)");
        $(".services-slider-item .white").css("display", "block");
        $(".services-slider-item .black").css("display", "none");

        // Проверьте ширину экрана
        if ($(window).width() < 769) {
          // Изменение цвета фона и текста активного слайда (для маленьких экранов)

          $('.services-slider-item[data-slick-index="' + nextSlide + '"]').css({
            "background-color": "rgb(232, 232, 232)",
          });
          $(
            '.services-slider-item[data-slick-index="' +
              nextSlide +
              '"] h3, .services-slider-item[data-slick-index="' +
              nextSlide +
              '"] h4, .services-slider-item[data-slick-index="' +
              nextSlide +
              '"] p'
          ).css("color", "rgb(46, 46, 46)");
          $(
            '.services-slider-item[data-slick-index="' + nextSlide + '"] .black'
          ).css("display", "block");
          $(
            '.services-slider-item[data-slick-index="' + nextSlide + '"] .white'
          ).css("display", "none");
        } else {
          // Изменить цвет фона и текста активного слайда (для больших экранов)

          $('.services-slider-item[data-slick-index="' + nextSlide + '"]').css({
            "background-color": "rgb(232, 232, 232)",
          });
          $(
            '.services-slider-item[data-slick-index="' +
              nextSlide +
              '"] h3, .services-slider-item[data-slick-index="' +
              nextSlide +
              '"] h4, .services-slider-item[data-slick-index="' +
              nextSlide +
              '"] p'
          ).css("color", "rgb(46, 46, 46)");
          $(
            '.services-slider-item[data-slick-index="' + nextSlide + '"] .black'
          ).css("display", "block");
          $(
            '.services-slider-item[data-slick-index="' + nextSlide + '"] .white'
          ).css("display", "none");
        }
      }
    );
  });

  /////////////////////////////////////

  // .unity-slider

  $(".unity-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    // centerMode: false,
    variableWidth: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true,
          swipe: true,
          speed: 1000,
          fade: true,
          slide: "div",
          cssEase: "linear",
        },
      },
    ],
  });

  // Проверка для кнопки "Вперед" и "Назад" для .unity-slider

  $(document).ready(function () {
    $(".unity-slider .slick-prev").css("display", "none");
    $(".unity-slider").on("afterChange", function (event, slick, currentSlide) {
      var slideCount = slick.slideCount;

      // Проверка для кнопки "Вперед"
      if (currentSlide === slideCount - 1) {
        $(".unity-slider .slick-next").css("display", "none"); // Скрыть кнопку "Вперед"
      } else {
        $(".unity-slider .slick-next").css("display", "block"); // Показать кнопку "Вперед"
      }

      // Проверка для кнопки "Назад"
      if (currentSlide === 0) {
        $(".unity-slider .slick-prev").css("display", "none"); // Скрыть кнопку "Назад"
      } else {
        $(".unity-slider .slick-prev").css("display", "block"); // Показать кнопку "Назад"
      }
    });
  });

  // Замена фона и цвета текста для .unity-slider

  $(document).ready(function () {
  $(".unity-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // Сбросить все фоны и цвета текста
      $(".unity-slider-item").css(
        "background-color",
        "rgba(255, 255, 255, 0.03)"
      );
      $(
        ".unity-slider-item h3, .unity-slider-item h4, .unity-slider-item p"
      ).css("color", "rgb(232, 232, 232)");
      $(".unity-slider-item .white").css("display", "block");
      $(".unity-slider-item .black").css("display", "none");

      // Проверьте ширину экрана
      if ($(window).width() < 769) {
        // Изменение цвета фона и текста активного слайда (для маленьких экранов)

        $('.unity-slider-item[data-slick-index="' + nextSlide + '"]').css({
          "background-color": "rgb(232, 232, 232)",
        });
        $(
          '.unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] h3, .unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] h4, .unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] p'
        ).css("color", "rgb(46, 46, 46)");
      } else {
        // Изменить цвет фона и текста активного слайда (для больших экранов)

        $('.unity-slider-item[data-slick-index="' + nextSlide + '"]').css({
          "background-color": "rgb(232, 232, 232)",
        });
        $(
          '.unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] h3, .unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] h4, .unity-slider-item[data-slick-index="' +
            nextSlide +
            '"] p'
        ).css("color", "rgb(46, 46, 46)");
        $(
          '.unity-slider-item[data-slick-index="' + nextSlide + '"] .black'
        ).css("display", "block");
        $(
          '.unity-slider-item[data-slick-index="' + nextSlide + '"] .white'
        ).css("display", "none");
      }
    }
  );
  });



  // Установка начального цвета фона и текста для активного слайда .services-slider

  $(document).ready(function () {
  var initialSlideIndex = $(".services-slider").slick("slickCurrentSlide");

  $('.services-slider-item[data-slick-index="' + initialSlideIndex + '"]').css({
    "background-color": "rgb(232, 232, 232)",
  });
  $(
    '.services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h3, .services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h4, .services-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] p'
  ).css("color", "rgb(46, 46, 46)");
  $(
    '.services-slider-item[data-slick-index="' + initialSlideIndex + '"] .black'
  ).css("display", "block");
  $(
    '.services-slider-item[data-slick-index="' + initialSlideIndex + '"] .white'
  ).css("display", "none");
  });


  // Установка начального цвета фона и текста для активного слайда .unity-slider

  $(document).ready(function () {
  var initialSlideIndex = $(".unity-slider").slick("slickCurrentSlide");

  $('.unity-slider-item[data-slick-index="' + initialSlideIndex + '"]').css({
    "background-color": "rgb(232, 232, 232)",
  });
  $(
    '.unity-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h3, .unity-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] h4, .unity-slider-item[data-slick-index="' +
      initialSlideIndex +
      '"] p'
  ).css("color", "rgb(46, 46, 46)");
  
  });

});

// UniMailMaster (Email) UNITY Агенція

$(document).ready(function () {
  $(".form-landing").submit(function () {
    //Change
    var th = $(this);
    var redirectUrl = "/response-message.php";
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize(),
    })
      .done(function (response) {
        setTimeout(function () {
          // Done Functions
          window.location.href = redirectUrl;
          th.trigger("reset");
          th.trigger(".r");
        }, 0);
      })
      .fail(function () {
        alert("Помилка відправки форми");
      });
    return false;
  });
});

// Валидация формы

function validateForm() {
  var checkboxes = document.getElementsByName("agreement");
  if (checkboxes[0].checked) {
    return true;
  } else {
    alert("Будь ласка, погодьтеся з умовами");
    return false;
  }
}

// UniMailMaster (Email) Boda Агенція

$(document).ready(function () {
  $(".form-landing-uk").submit(function () {
    //Change
    var th = $(this);
    var redirectUrl = "/response-message-uk.php";
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize(),
    })
      .done(function (response) {
        setTimeout(function () {
          // Done Functions
          window.location.href = redirectUrl;
          th.trigger("reset");
          th.trigger(".r");
        }, 0);
      })
      .fail(function () {
        alert("Помилка відправки форми");
      });
    return false;
  });
});

// Валидация формы

function validateForm() {
  var checkboxes = document.getElementsByName("agreement");
  if (checkboxes[0].checked) {
    return true;
  } else {
    alert("Будь ласка, погодьтеся з умовами");
    return false;
  }
}

// Плавный переход на странице 

$('.header-link, .footer-link, .header-button-link, .start, .letsgo').on('click', function(event) {
  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 1000); // время анимации в миллисекундах
  }
});


// Кнопка скроллинга вверх

  $(document).ready(function () {
  var section2 = $("#about");

  if (section2.length) {
    var section2Top = section2.offset().top;

    $(window).scroll(function () {
      var currentScrollTop = $(window).scrollTop();
      if (currentScrollTop > section2Top) {
        if ($(window).width() > 768) {
          $(".scroll-top").show();
        }
      } else {
        $(".scroll-top").hide();
      }
    });

    $(".scroll-top").click(function () {
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  }
});



// Перемещение элемента .checkbox из блока в другой блок при изменении ширины экрана

 const checkboxBlock = document.querySelector(".checkbox");
 const nameTelCheckboxBlock = document.querySelector(".name-tel-checkbox");
 const emailTextareaSubmitBlock = document.querySelector(
   ".email-textarea-submit"
 );

 function moveCheckbox() {
   const windowWidth = window.innerWidth;
   if (windowWidth < 768) {
     // Перемещаем .checkbox в .email-textarea-submit
     emailTextareaSubmitBlock.insertBefore(
       checkboxBlock,
       emailTextareaSubmitBlock.childNodes[
         emailTextareaSubmitBlock.childNodes.length - 2
       ]
     );
   } else {
     // Перемещаем .checkbox в .name-tel-checkbox
     nameTelCheckboxBlock.insertBefore(
       checkboxBlock,
       nameTelCheckboxBlock.childNodes[
         nameTelCheckboxBlock.childNodes.length - 2
       ]
     );
   }
 }
 // Добавляем обработчик события изменения ширины окна
 window.addEventListener("resize", moveCheckbox);
 // Вызываем функцию moveCheckbox() один раз при загрузке страницы
 moveCheckbox();

// // Перемещение элементов .operational, .seo из блока в другой блок при изменении ширины экрана
  const operationalBlock = document.querySelector(".operational");
  const seoBlock = document.querySelector(".seo");
  const howweworkblockrightBlock = document.querySelector(
   ".howwework-block-right"
  );
  const howweworkblockleftBlock = document.querySelector(".howwework-block-left");

  function moveOperational() {
   const windowWidth = window.innerWidth;
   if (windowWidth < 768) {
      // Перемещаем .operational, .seo в .howwework-block-left
      howweworkblockleftBlock.insertBefore(
       operationalBlock,
       howweworkblockleftBlock.childNodes[
          howweworkblockleftBlock.childNodes.length - 5
       ]
      );
      howweworkblockleftBlock.insertBefore(
       seoBlock,
       howweworkblockleftBlock.childNodes[
          howweworkblockleftBlock.childNodes.length - 2
       ]
      );
   } else {
      // Перемещаем .operational, .seo в .howwework-block-right
      howweworkblockrightBlock.insertBefore(
       operationalBlock,
       howweworkblockrightBlock.childNodes[
          howweworkblockrightBlock.childNodes.length - 5
       ]
      );
      howweworkblockrightBlock.insertBefore(
       seoBlock,
       howweworkblockrightBlock.childNodes[
          howweworkblockrightBlock.childNodes.length - 2
       ]
      );
   }
  }
  // Добавляем обработчик события изменения ширины окна
  window.addEventListener("resize", moveOperational);
  // Вызываем функцию moveOperational() один раз при загрузке страницы
  moveOperational();



    // Плавный переход между страницами сайта
    
$(document).ready(function() {
    $('.language-option').click(function(event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: 0
        }, 500, function() {
            window.location = link;
        });
    });
});
   

    // Вибрация на чекбоксе
    
/* function vibratePhone() {
    if (navigator.vibrate) {
      navigator.vibrate(300);
    } else {
      console.log("Vibration API is not supported in your browser.");
    }
  } */

// Появление вертикальной линии из точки при скролле

/* const line = document.getElementById("line");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const windowWidth = window.innerWidth
  
 if (windowWidth > 768) {   
  if (scrollY >= viewportHeight) {
    const lineHeight = Math.min(scrollY - viewportHeight, viewportHeight) * 2.6;
    line.style.height = `${lineHeight}px`;
    line.style.opacity = 1;
  } else {
    line.style.height = "0";
    line.style.opacity = 0;
  }
 } else {
     if (scrollY >= viewportHeight) {
      const lineHeight = Math.min(scrollY - viewportHeight, viewportHeight) * 2.55;
      line.style.height = `${lineHeight}px`;
      line.style.opacity = 1;
    } else {
      line.style.height = "0";
      line.style.opacity = 0;
    }
 }
}); */


const line = document.getElementById("line");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const windowWidth = window.innerWidth
  
 if (windowWidth < 768) {   
     if (scrollY >= viewportHeight) {
      const lineHeight = Math.min(scrollY - viewportHeight, viewportHeight) * 2.55;
      line.style.height = `${lineHeight}px`;
      line.style.opacity = 1;
    } else {
      line.style.height = "0";
      line.style.opacity = 0;
    }
 }
});
/* const line = document.getElementById("line");
const parentElement = document.getElementById("howwework-wrapper-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const parentHeight = parentElement.clientHeight - 50;
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {

  if (scrollY >= parentHeight) {
    // line.style.height = `${parentHeight}px`;
    line.style.height = `${parentHeight}px`;
    line.style.opacity = 1;
  } else {
    line.style.height = "0";
    line.style.opacity = 0;
  }
  }
}); */


const developmentElement = document.getElementById("development");
const webElement = document.getElementById("web");
const advertisingElement = document.getElementById("advertising");
const operationalElement = document.getElementById("operational");
const seoElement = document.getElementById("seo");
const continuousElement = document.getElementById("continuous");

function updateAOSAttribute() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    developmentElement.setAttribute("data-aos", "zoom-in-down");
    webElement.setAttribute("data-aos", "zoom-in-down");
    advertisingElement.setAttribute("data-aos", "zoom-in-down");
    operationalElement.setAttribute("data-aos", "zoom-in-down");
    seoElement.setAttribute("data-aos", "zoom-in-down");
    continuousElement.setAttribute("data-aos", "zoom-in-down");
    
  } else {
    developmentElement.setAttribute("data-aos", "fade-right");
    webElement.setAttribute("data-aos", "fade-right");
    advertisingElement.setAttribute("data-aos", "fade-right");
    operationalElement.setAttribute("data-aos", "fade-left");
    seoElement.setAttribute("data-aos", "fade-left");
    continuousElement.setAttribute("data-aos", "fade-left");
  }
}

updateAOSAttribute(); // Вызовите функцию для установки начального значения

window.addEventListener("resize", updateAOSAttribute); // Слушатель события изменения размера окна 

////////////////////////////////////////////////////////////////
