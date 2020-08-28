(function ($) {
  "use strict";
  $(document).ready(function () {
    "use strict";

    // wow js
    new WOW().init();
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
  });

  // TOP Menu Sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  // smoothscroll feature section
  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      2000
    );
  });
  // Smooth scroll
  $(".main-btn").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      800
    );
  });

  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
})(jQuery);
