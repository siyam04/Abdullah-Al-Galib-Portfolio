$(document).ready(function() {
  $(".tab-list li").click(function(e) {
    e.preventDefault();
    $(".tab-list li").removeClass("active");
    $(this).addClass("active");
  });
});
