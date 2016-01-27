(function(){

$(document).ready(function(){
    $('.nav li a').on('click', function(){
    $('.navbar-toggle').click() 
});

    // Toggle the section content
    
    $('#data-extra-text').hide();
    $('.data-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#data-extra-text').fadeToggle();
    });

var pContainerHeight = $('.landing-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.wc-jeffrey-logo').css({
      'transform' : 'translate(0px, '+ wScroll /8 +'%)'
    });

    $('.jm_logo_top').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.shape-group').css({
      'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.about_img').offset().top - ($(window).height() / 3.5)) {
// console.log('hi');
    $('.about_img figure').each(function(i){

      setTimeout(function(){
        $('.about_img figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 600);
    });

  }


  // Promoscope
  // if(wScroll > $('.large-window').offset().top - $(window).height()){

  //   $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

  //   var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

  //   $('.window-tint').css({'opacity': opacity});

  // }


  // // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    // $('.post-2').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 5) + 'px'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
});

})();
