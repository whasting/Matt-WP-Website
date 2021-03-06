let modalOpen = false;

$(window).scroll(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  // let alpha = $(window).scrollTop() / ($('.hero').height() - 200);
  // if (!modalOpen) {
  //   $('nav').css("background-color", `rgba(0, 0, 0, ${alpha})`);
  // }
});

$(window).resize(() => {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  positionHoverText();
});

let $root = $('html, body');
$('a').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  let href = $.attr(this, 'href');
  // if ($(href).offset()) {
  //   $root.animate({
  //       scrollTop: $(href).offset().top - 80
  //   }, 400);
  // }
});

let menuOpen = false;

$('.hamburger').click(function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'flex');
    setTimeout(function() {menuOpen = true;}, 100);
  } else {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('body').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('.menu-item').click(function() {
  $('.menu').css('display', 'none');
  menuOpen = false;
});

$(document).ready(function() {
  $('p').has('.hero-img').addClass('hero');

  positionHoverText();
});

$(window).load(function() {
  positionHoverText();
});

const positionHoverText = () => {
  for (let i = 0; $(`.img-description-${i}`).siblings().position(); i++) {
    let element = $(`.img-description-${i}`);

    element.css({
      'top': element.siblings().position().top,
      'left': element.siblings().position().left,
      'height': element.siblings().height(),
      'width': element.siblings().width()
    });
  }
};

const scrollLock = $.scrollLock = ( function scrollLockClosure() {
    'use strict';

    var $html      = $( 'html' ),
        // State: unlocked by default
        locked     = false,
        // State: scroll to revert to
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        },
        // State: styles to revert to
        prevStyles = {},
        lockStyles = {
            'overflow-y' : 'scroll',
            'position'   : 'fixed',
            'width'      : '100%'
        };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr( 'style' ),
            styleStrs = [],
            styleHash = {};

        if( !styleAttr ){
            return;
        }

        styleStrs = styleAttr.split( /;\s/ );

        $.each( styleStrs, function serializeStyleProp( styleString ){
            if( !styleString ) {
                return;
            }

            var keyValue = styleString.split( /\s:\s/ );

            if( keyValue.length < 2 ) {
                return;
            }

            styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
        } );

        $.extend( prevStyles, styleHash );
    }

    function lock() {
        var appliedLock = {};

        // Duplicate execution will break DOM statefulness
        if( locked ) {
            return;
        }

        // Save scroll state...
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend( appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left' : - prevScroll.scrollLeft + 'px',
            'top'  : - prevScroll.scrollTop  + 'px'
        } );

        // Then lock styles...
        $html.css( appliedLock );

        // ...and scroll state
        $( window )
            .scrollLeft( 0 )
            .scrollTop( 0 );

        locked = true;
    }

    function unlock() {
        // Duplicate execution will break DOM statefulness
        if( !locked ) {
            return;
        }

        // Revert styles
        $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

        // Revert scroll values
        $( window )
            .scrollLeft( prevScroll.scrollLeft )
            .scrollTop(  prevScroll.scrollTop );

        locked = false;
    }

    return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
            if( on ) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if( locked ){
                unlock();
            }
            else {
                lock();
            }
        }
    };
}() );
