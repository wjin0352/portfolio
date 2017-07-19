$( document ).ready(function() {
  console.log('ready')

  // this line just initializes all popover messages, for detail refer to bootstrap popovers
  $('[data-toggle="popover"]').popover();

  // scrolling fade
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  // var openEmail = function() {
  //   $('.target').on('click', function(){
  //     $('.tap-target').tapTarget('open')
  //   });   
  // }

  // var closeEmail = function() {
  //   $('.target-close').on('click', function() {
  //     $('.tap-target').tapTarget('close');
  //   });
  // }

  // openEmail();
  // closeEmail();
}());

