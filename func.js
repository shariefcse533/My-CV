include('hashchange.min');

$(window).load(function() {
    $('#loading').fadeOut();
    vcenter('.vcenter');
    pageCheck();

    $('.vcenter, .shortInfo').animate({'opacity':1});

    function pageCheck() {
      var hash = location.hash;
      hash = ( hash.replace( /^#\//, '' ) || '' );
      page(hash);

      if(hash != '') {
        
      }
    }

    $('nav').find('li:not(#logo)').each(function() {
      $(this).find('a').on('click', function() {
        if($(window).width() > 322) {
          $('#nav').css({'background' : 'rgba(0,0,0,1)'});
          $(this).parent().addClass('active').siblings().removeClass('active')  
        }

        if($(window).width() < 322) {
          $('#nav').animate({
            'left': '100%', 'margin-left':'0', 'padding-left':'-.5em'
          });
        }
      })
    })

    $('#nav > .box').click(function() {
      if($(window).width() < 322) {
        $('#nav').animate({
          'left': '0%', 'margin':0, 'padding-left':0
        });
      }
    });

    $(window).resize(function() {
      if ($(window).width() <= 768 ) {
        $('#picture').hide()
        $('#intro').removeClass('medium-9').addClass('medium-12');
      } else {
        //$('#picture').show()
        $('#intro').removeClass('medium-12').addClass('medium-9');
      }
    })

    //url Change
    $(window).hashchange(function() {
      var hash = location.hash;
      hash = ( hash.replace( /^#\//, '' ) || '' );
      page(hash)
    })

    var navH = $('#nav').height();

    function vcenter(el) {
      var elem = $(el),
      h = elem.height() / 2;
      console.log(h);
      elem.css({
        'margin-top'  : '-' + h + 'px',
        'top'         : '50%'
      })
    }

    function page(p) {
      var html = $('#'+p).find('.wrap').clone();
      console.log(html.length);

      if( p == "" || html.length == 0 ) {
        $('#home').fadeIn();
        $('nav').find('li').removeClass('active');
        $('#displayPage').hide().find('.page').empty()

        if($(window).width() > 322)
          $('#nav').css({'background' : 'rgba(0,0,0,0)'});

      } else {
        $('#home').fadeOut()
        $('#displayPage')
          .show().css({'overflow':'visible', 'height':'auto'})
            .find('.'+p).show()
            .animate({'opacity' : 1}, 600, 'jswing')
            .addClass('pageOn').removeClass('pageOff').html(html)
          .siblings()
            .animate({'opacity' : 0}, 300, 'jswing', function(){ $(this).hide() })
            .addClass('pageOff').removeClass('pageOn').empty()
      }
    }
});

function include(f) {
  document.write("<script src='js/" + f + ".js'></script>");
}