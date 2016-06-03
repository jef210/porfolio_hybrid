(function() {

  $(document).ready(function() {
    $('.nav li a').on('click', function() {
      $('.navbar-toggle').click();
    });

    // Toggle the section content

    $('#data-extra-text').hide();
    $('.data-section').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('#data-extra-text').fadeToggle();
    });



    $(window).scroll(function() {
      window.requestAnimationFrame(onScroll);
    });

    var pContainerHeight = $('.landing-box').height();
    var blogPosts = $('.blog-posts');
    var wcJeffreyLogo = $('.wc-jeffrey-logo');
    var about_img = $('.about_img');
    var about_img_figure = $('.about_img figure');
    var post1 = $('.post-1');
    var post3 = $('.post-3');
    var jm_logo_top = $('.jm_logo_top');
    var shape_group = $('.shape-group');

    function onScroll() {

      var wScroll = $(this).scrollTop();

      if (wScroll <= pContainerHeight) {

        wcJeffreyLogo.css({
          'transform': 'translate(0px, ' + wScroll / 8 + '%)'
        });

        jm_logo_top.css({
          'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });

        shape_group.css({
          'transform': 'translate(0px, -' + wScroll / 60 + '%)'
        });

      }


      // Landing Elements
      if (wScroll > about_img.offset().top - ($(window).height() / 3.5)) {
        // console.log('hi');
        about_img_figure.each(function(i) {

          setTimeout(function() {
            about_img_figure.eq(i).addClass('is-showing');
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


      if (wScroll > blogPosts.offset().top - $(window).height()) {

        var offset = (Math.min(0, wScroll - blogPosts.offset().top + $(window).height() - 350)).toFixed();

        post1.css({'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'});

        // $('.post-2').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 5) + 'px'});

        post3.css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'});

      }
    }

  });

})();
