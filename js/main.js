$(document).ready(function() {
  var $projects = $(".projects");

  $projects.isotope({
    // options
    itemSelector: ".item",
    layoutMode: "fitRows"
  });

  $(".tab-list li").click(function(e) {
    e.preventDefault();

    var filter = $(this).attr("data-filter");

    $(".tab-list li").removeClass("active");
    $(this).addClass("active");

    $projects.isotope({ filter: filter });
  });
});

$(document).on("ready", function() {
  $(".responsive").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    // slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });
});

$(document).on("ready", function() {
  $(".certifications").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    // slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });
});
