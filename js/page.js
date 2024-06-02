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



/* Burger-menu */

$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.burger-menu, .header-wrapper").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header-logo-link, .globus").toggle();
  });
  $(".header-link-burger, .header-button-link").click(function () {
    $(".header-burger, .burger-menu, .header-wrapper").removeClass("active");
    $("body").removeClass("lock");
    $(".header-logo-link, .globus").show(); // Показываем элементы
  });
});