// Custom Javascript

// Preloader
(function($) {
    "use strict";
    $(window).load(function() {

         $('.preloader').fadeOut(800);
         $('.header-search-icon, .menu-burger-search').on('click', function(e) {
            $('.search-overlay').removeClass("hidden");
        });
         $('.menu-burger').on('click', function(e) {
            $('.menu-overlay').removeClass("hidden");
        });
         $('.menu-item-has-children').on('click', function(event) {

            $(this).children('ul').toggleClass('hidden');

        });

            $('.closeicon').on('click', function(e) {
            $('.search-overlay').addClass("hidden");
            $('.menu-overlay').addClass("hidden");

        });
    });
})(jQuery);

// Header FX
(function($) {
    "use strict";
    $(window).scroll(function () {
  if ( $(this).scrollTop() > 20 && !$('.site-header-fixed-background').hasClass('sticky') ) {
    $('.site-header-fixed-background').addClass('sticky');
    $('.site-header').addClass('sticky');
    $('.site-logo-image').addClass('sticky');
   } else if ( $(this).scrollTop() <= 20 ) {
    $('.site-header-fixed-background').removeClass('sticky');
    $('.site-header').removeClass('sticky');
    $('.site-logo-image').removeClass('sticky');
   }
});
})(jQuery);

// Product Box Icons
(function($) {
    "use strict";
     $("body").on("click", ".woocommerce-quickview-icon-wrapper", function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().find(".yith-wcqv-button").click();
    });
    $("body").on("click", ".woocommerce-wishlist-icon-wrapper", function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().find(".add_to_wishlist").click();
    });
})(jQuery);

// Accordion
(function($) {
    "use strict";
$( "#accordion" ).accordion({

  animate: 300,
  heightStyle: "content",
    event:false,
  active :false

  });
var noSections = $("#accordion h3").length-1;
$("h3").each(function (index, element)
{
    $(element).click(function()
    {
       if($(this).hasClass('ui-state-active'))
       {
           if(index < noSections)
              $("#accordion").accordion('option','active',index + 1);
           else
              $("#accordion").accordion('option','active',index - 1);
       }
       else
       {
          $("#accordion").accordion('option','active',index);
       }
   });
});

})(jQuery);

// Misc FX
(function($) {
    "use strict";
        $('li.product').hover(function() {
            $(this).find('img').fadeTo(500, 0.8);
        }, function() {
            $(this).find('img').fadeTo(500, 1);
        });
        $('.related.products h2').addClass("background-line");

        //$('div[id^="redux_blast"]').remove();

})(jQuery);

// Product Counters
(function($) {
    "use strict";
(function() {
  $(".qty").before("<span class=\"input-number-decrement\">–</span>");
  $(".qty").after("<span class=\"input-number-increment\">+</span>");

  window.inputNumber = function(el) {
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;
    var els = {};
    els.dec = el.prev();
    els.inc = el.next();
    el.each(function() {
      init($(this));
    });
    function init(el) {
      el.prev().on('click', decrement);
      el.next().on('click', increment);
      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }
      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();
inputNumber($('.qty'));
})(jQuery);
